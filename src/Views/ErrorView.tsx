import { Button } from '@/components/Button';
import type { Dispatch, FC, SetStateAction } from 'react';

type ErrorViewProps = {
  setActiveView: Dispatch<SetStateAction<'home' | 'error' | 'conversation'>>;
};

export const ErrorView: FC<ErrorViewProps> = ({ setActiveView }) => {
  return (
    <div className="mx-auto my-[30vh] flex w-full flex-col items-center justify-center gap-8">
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
  );
};
