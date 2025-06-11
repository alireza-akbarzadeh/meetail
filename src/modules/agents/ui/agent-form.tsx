'use client';

import { z } from 'zod';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useTRPC } from '@/trpc/client';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { agentInsertSchema } from '../agent-schemas';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import GenerateAvatar from '@/components/common/generate-avatar';
import { Input } from '@/components/ui/input';
import { AgentGetOne } from '../types';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface AgentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: AgentGetOne;
}

export function AgentForm(props: AgentFormProps) {
  const { initialValues, onCancel, onSuccess } = props;
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const createAgent = useMutation(
    trpc.agents.create.mutationOptions({
      onSuccess: () => {
        onSuccess?.();
        queryClient.invalidateQueries(trpc.agents.geMany.queryOptions());
        if (initialValues?.id) {
          queryClient.invalidateQueries(trpc.agents.getOne.queryOptions(initialValues.id));
        }
      },
      onError: () => {},
    }),
  );

  const agentFormProvider = useForm<z.infer<typeof agentInsertSchema>>({
    resolver: zodResolver(agentInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? '',
      instructions: initialValues?.instructions ?? '',
    },
  });

  const { name } = useWatch({ control: agentFormProvider.control });

  const isEdit = !!initialValues?.id;
  const isPending = createAgent.isPending;

  const onSubmitAgentForm = async (values: z.infer<typeof agentInsertSchema>) => {
    if (isEdit) {
      console.log('todo update agent');
      return;
    }
    createAgent.mutate(values);
  };

  return (
    <Form {...agentFormProvider}>
      <form className="space-y-4" onSubmit={agentFormProvider.handleSubmit(onSubmitAgentForm)}>
        <GenerateAvatar seed={name || ''} variants="bottsNeutral" className="size-16 border" />
        <FormField
          control={agentFormProvider.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g. Math tutor" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={agentFormProvider.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Your are a helpfull math assistant that can answer question and help with assignment"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          {onCancel && (
            <Button onClick={() => onCancel()} variant="outline" disabled={isPending} type="button">
              Cancel
            </Button>
          )}
          <Button loading={isPending} type="submit">
            {isEdit ? 'Edit' : 'Save'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
