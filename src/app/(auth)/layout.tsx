import { PropsWithChildren } from "react";

export default function AuthLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-1">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
}
