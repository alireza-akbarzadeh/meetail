import { AlertCircleIcon } from 'lucide-react';

interface ErrorStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorState(props: ErrorStateProps) {
  const { title, description, actionLabel = 'Try Again', onAction } = props;

  return (
    <div className="flex flex-1 items-center justify-center px-8 py-4">
      <div className="bg-background flex flex-col items-center justify-center gap-y-6 rounded-lg p-10 shadow-sm">
        <AlertCircleIcon className="size-6 text-red-500" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        {onAction && (
          <button
            onClick={onAction}
            className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
