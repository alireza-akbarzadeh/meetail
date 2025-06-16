import React from 'react';
import { RootBanner } from '../ui/sections/banner';
import { Features } from '../ui/sections/features';
import { Pricing } from '../ui/sections/pricing';
import { Demo } from '../ui/sections/demo';

export function RootView() {
  return (
    <>
      <RootBanner />
      <Features />
      <Pricing />
      <Demo />
    </>
  );
}
