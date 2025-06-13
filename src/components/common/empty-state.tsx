import Image from 'next/image';

interface ErrorStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState(props: ErrorStateProps) {
  const { title, description } = props;

  return (
    <div className="justify-cente flex flex-col items-center">
      <Image src="/empty.svg" alt="Empty" width={240} height={240} />
      <div className="mx-auto flex max-w-md flex-col gap-y-6 text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}
