import { z } from 'zod';
import { AgentGetOne } from '@/modules/agents/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTRPC } from '@/trpc/client';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { agentInsertSchema } from '@/modules/agents';

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

  return <div></div>;
}
