import React from 'react';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return <div id="root-page-page">{children}</div>;
}
