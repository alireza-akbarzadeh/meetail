'use client';

import { ResponsiveDialog } from '@/components/common/responsive-dialog';
import { AgentForm } from '../ui/agent-form';
import { AgentGetOne } from '@/modules/agents/types';

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

export function UpdateAgentDialog(props: UpdateAgentDialogProps) {
  const { open, initialValues, onOpenChange } = props;
  return (
    <ResponsiveDialog
      title="Edit agent"
      description="Edit the agent details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
}
