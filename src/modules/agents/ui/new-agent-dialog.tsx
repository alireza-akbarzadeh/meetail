'use client';

import { ResponsiveDialog } from '@/components/common/responsive-dialog';
import { AgentForm } from '../ui/agent-form';

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewAgentDialog(props: NewAgentDialogProps) {
  const { open, onOpenChange } = props;
  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm onSuccess={() => onOpenChange(false)} onCancel={() => onOpenChange(false)} />
    </ResponsiveDialog>
  );
}
