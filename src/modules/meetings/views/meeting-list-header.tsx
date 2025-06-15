'use client';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { NewMeetingDialog } from '@/modules/meetings/views/new-meeting-dialog';
import { useState } from 'react';

export function MeetingListHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="flex flex-col px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-medium">My Agents</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <div className="flex items-center gap-x-2 p-1"></div>
      </div>
    </>
  );
}
