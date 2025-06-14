import React, { JSX, useState } from 'react';
import { ResponsiveDialog } from '@/components/common/responsive-dialog';
import { Button } from '@/components/ui/button';

interface UseConfirmProps {
  title: string;
  description: string;
}

export function useConfirm(props: UseConfirmProps): [() => JSX.Element, () => Promise<unknown>] {
  const { title, description } = props;
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => setPromise(null);

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const confirmationDialog = () => {
    return (
      <ResponsiveDialog
        title={title}
        description={description}
        open={promise !== null}
        onOpenChange={handleClose}
      >
        <div className="fle w-full flex-col-reverse items-center justify-end gap-x-2 gap-y-5 pt-4 lg:flex-row lg:justify-between">
          <Button onClick={handleCancel} variant="outline" className="w-full lg:w-auto">
            Cancel
          </Button>
          <Button onClick={handleConfirm} className="w-full lg:w-auto">
            Confirm
          </Button>
        </div>
      </ResponsiveDialog>
    );
  };

  return [confirmationDialog, confirm];
}
