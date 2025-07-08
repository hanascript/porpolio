'use client';

import { useKernel } from '@/components/hooks/use-kernel';
import { cn } from '@/lib/utils';

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDisabled } = useKernel();

  return <div className={cn('transition-all duration-300', isDisabled ? 'hidden' : 'block')}>{children}</div>;
};
