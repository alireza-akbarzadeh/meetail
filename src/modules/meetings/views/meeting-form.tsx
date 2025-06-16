'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { meetingInsertSchema } from '@/modules/meetings/meeting.schema';
import { MeetingGetOne } from '@/modules/meetings/types';
import { useState } from 'react';
import { CommandSelect } from '@/components/common/command-select';
import GenerateAvatar from '@/components/common/generate-avatar';
import { NewAgentDialog } from '@/modules/agents/ui/new-agent-dialog';

interface MeetingFormProps {
  onSuccess?: (id?: string) => void;
  onCancel?: () => void;
  initialValues?: MeetingGetOne;
}

export function MeetingForm(props: MeetingFormProps) {
  const { initialValues, onCancel, onSuccess } = props;
  const trpc = useTRPC();
  const [openNewAgentDialog, setNewAgentOpenDialog] = useState<boolean>(false);

  const [search, setSearch] = useState<string>('');
  const queryClient = useQueryClient();
  const { data: agents } = useQuery(trpc.agents.getMany.queryOptions({ pageSize: 100, search }));

  const createMeeting = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        // TODO: invalid free plan
        onSuccess?.(data.id);
      },
      onError: (error) => {
        toast.error(error.message);
        //   TODO: Check if error code is "FORBIDDEN", redirect to /upgrade
      },
    }),
  );
  const updateMeeting = useMutation(
    trpc.meetings.update.mutationOptions({
      onSuccess: async () => {
        onSuccess?.();
        await queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.meetings.getOne.queryOptions({ id: initialValues.id }),
          );
        }
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);
        //   TODO: Check if error code is "FORBIDDEN", redirect to /upgrade
      },
    }),
  );

  const meetingFormProvider = useForm<z.infer<typeof meetingInsertSchema>>({
    resolver: zodResolver(meetingInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? '',
      agentId: initialValues?.agentId ?? '',
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createMeeting.isPending || updateMeeting.isPending;

  const onSubmitMeetingForm = async (values: z.infer<typeof meetingInsertSchema>) => {
    if (isEdit) {
      updateMeeting.mutate({ ...values, id: initialValues.id });
      return;
    }
    createMeeting.mutate(values);
  };

  return (
    <>
      <NewAgentDialog open={openNewAgentDialog} onOpenChange={setNewAgentOpenDialog} />
      <Form {...meetingFormProvider}>
        <form
          className="space-y-4"
          onSubmit={meetingFormProvider.handleSubmit(onSubmitMeetingForm)}
        >
          <FormField
            control={meetingFormProvider.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g. Math Consulations" />
                </FormControl>
              </FormItem>
            )}
          />{' '}
          <FormField
            control={meetingFormProvider.control}
            name="agentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent</FormLabel>
                <FormControl>
                  <CommandSelect
                    options={(agents?.items ?? []).map((agent) => ({
                      id: agent.id,
                      value: agent.id,
                      children: (
                        <div className="flex items-center gap-x-2">
                          <GenerateAvatar
                            seed={agent.name}
                            variants="bottsNeutral"
                            className="size-6 border"
                          />
                          <span>{agent.name}</span>
                        </div>
                      ),
                    }))}
                    onSelect={(value) => field.onChange(value)}
                    onSearch={setSearch}
                    placeholder="Select and Agent"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Not found what you&apos;re looking for?{' '}
                  <button
                    type="button"
                    onClick={() => setNewAgentOpenDialog(true)}
                    className="text-primary hover:underline"
                  >
                    Create new agent
                  </button>
                </FormDescription>
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            {onCancel && (
              <Button
                onClick={() => onCancel()}
                variant="outline"
                disabled={isPending}
                type="button"
              >
                Cancel
              </Button>
            )}
            <Button loading={isPending} type="submit">
              {isEdit ? 'Edit' : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
