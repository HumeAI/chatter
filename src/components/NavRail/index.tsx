'use client';
import { cn } from '@/utils';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { HumeWordmark } from '../HumeWordmark';

export type NavRailProps = {
  variant?: 'light' | 'dark';
};

export const NavRail: FC<NavRailProps> = ({ variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'flex h-16 w-full items-center',
        'pr-0 md:pr-[var(--pad)]',
        'z-10 gap-4',
        isDark && 'bg-black',
      )}
    >
      <div className={'flex shrink items-center gap-3 pl-6'}>
        <Link
          href={'https://hume.ai'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <HumeWordmark
            className={cn(
              'h-5 w-auto',
              isDark ? 'text-neutral-100' : 'text-neutral-700',
            )}
          />
          <span className={'sr-only'}>{`Hume AI's website`}</span>
        </Link>
      </div>
      <div className={'relative isolate h-full grow'}>
        <div
          className={
            'absolute right-0 top-0 flex flex-col items-end gap-2 pr-6 pt-4'
          }
        >
          <Link
            href={'https://beta.hume.ai/playground/voice'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className={cn(
              'flex items-center justify-center',
              'text-sm font-medium ',
              isDark
                ? 'border border-neutral-100'
                : 'border border-neutral-700',
              'h-8 rounded-full bg-transparent px-4',
              isDark
                ? 'hover:bg-neutral-100 hover:text-black'
                : 'hover:bg-neutral-700 hover:text-white',
              isDark
                ? 'focus:bg-neutral-100 focus:text-black'
                : 'focus:bg-neutral-700 focus:text-white',
              'focus:outline-none',
              'shrink-0 grow',
              'gap-1',
              'min-w-0',
              isDark ? 'text-neutral-100' : 'text-neutral-800',
            )}
          >
            <span className={'opacity-70'}>
              <Rocket className={'size-4'} />
            </span>
            <span className={cn('line-clamp-1 shrink truncate')}>
              Start building
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
