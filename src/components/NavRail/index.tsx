'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HumeWordmark } from '../HumeWordmark';
import { NotifyButton } from '../NotifyButton';
import { WidgetButton } from '../WidgetButton';
import { cn } from '@/utils';
import { useLayout } from '@/store/useLayout';
import { useNavigation } from '@/store/useNavigation';

export const NavRail = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-10 flex h-16 w-full items-center',
        pathname === '/about' && 'bg-background-light',
        'pr-0 md:pr-[var(--pad)]',
        'gap-4',
      )}
    >
      <div className={'flex shrink items-center gap-3 pl-6'}>
        <Link
          href={'https://hume.ai'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <HumeWordmark className={'h-5 w-auto text-gray-700'} />
          <span className={'sr-only'}>{`Hume AI's website`}</span>
        </Link>
        <span
          className={
            'flex items-center rounded-full bg-tan-700/20 px-3 py-1.5 text-xs font-medium leading-none'
          }
        >
          Preview
        </span>
      </div>
      <div className={'relative isolate h-full grow'}>
        <div
          className={
            'absolute right-0 top-0 flex flex-col items-end gap-2 pr-6 pt-4'
          }
        >
          <button>hello</button>
        </div>
      </div>
    </div>
  );
};
