import { NavRail } from '@/components/NavRail';
import dynamic from 'next/dynamic';
import type { Dispatch, FC, SetStateAction } from 'react';

const Button = dynamic(
  () => import('@/components/Button').then((m) => m.Button),
  {
    ssr: false,
  },
);

type ErrorViewProps = {
  setActiveView: Dispatch<SetStateAction<'home' | 'error' | 'conversation'>>;
};

export const ErrorView: FC<ErrorViewProps> = ({ setActiveView }) => {
  return (
    <>
      <NavRail variant="dark" />
      <div className="mx-auto my-[30vh] flex w-full grow flex-col items-center justify-center gap-8">
        <h1 className="text-center text-3xl sm:text-5xl">
          Oops! Something went wrong
        </h1>
        <Button
          onClick={() => {
            setActiveView('home');
          }}
        >
          Back to home
        </Button>
      </div>
    </>
  );
};
