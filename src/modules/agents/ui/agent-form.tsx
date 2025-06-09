import { z } from 'zod';
import { AgentGetOne } from '@/modules/agents/types';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTRPC } from '@/trpc/client';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { agentInsertSchema } from '@/modules/agents';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import GenerateAvatar from '@/components/common/generate-avatar';
import { Input } from '@/components/ui/input';

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
      onSuccess: () => {},
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
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
