import { ResponsiveDialog } from '@/components/common/responsive-dialog';

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
      new agent form
    </ResponsiveDialog>
  );
}
