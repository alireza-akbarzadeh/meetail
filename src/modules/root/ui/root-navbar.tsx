import { ToggleTheme } from '@/components/common/theme-options';
import React from 'react';

export function RootNavbar() {
  return (
    <header className='flex items-center justify-between pt-5'>
      <nav aria-label='Main navigation'>main navigation</nav>
      <ToggleTheme />
    </header>
  );
}
