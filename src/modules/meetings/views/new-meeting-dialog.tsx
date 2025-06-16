'use client';

import { ResponsiveDialog } from '@/components/common/responsive-dialog';

import { MeetingForm } from '@/modules/meetings/views/meeting-form';
import { useRouter } from 'next/navigation';

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewMeetingDialog(props: NewAgentDialogProps) {
  const { open, onOpenChange } = props;
  const router = useRouter();
  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create an instant meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
}
