import React from 'react';
import { Button } from '@/components/ui/button';
interface DataPaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export function DataPagination(props: DataPaginationProps) {
  const { page, totalPage, onPageChange } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="text-muted-foreground flex-1 text-sm">
        Page {page} of {totalPage || 1}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          variant="outline"
          size="sm"
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(Math.min(totalPage, page + 1))}
          variant="outline"
          size="sm"
          disabled={page === totalPage || totalPage === 0}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
