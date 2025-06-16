import { Footer } from '../../modules/root/ui/footer';
import { RootNavbar } from '../../modules/root/ui/root-navbar';
import { RootView } from '../../modules/root/view/root.view';
import React from 'react';

export default function RootPage() {
  return (
    <>
      <RootNavbar />
      <main>
        <RootView />
      </main>
      <Footer />
    </>
  );
}
