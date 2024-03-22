import { FC } from 'react';

type ErrorViewProps = {
  setActiveView: (view: 'home' | 'error' | 'conversation') => void;
};

export const ErrorView: FC<ErrorViewProps> = ({ setActiveView }) => {
  return (
    <div className="mx-auto my-[30vh] flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Oops! Something went wrong</h1>
      <button
        className="z-10 rounded-lg bg-black px-4 py-2 text-3xl text-white hover:shadow-[8px_8px_#f02eaa]"
        onClick={() => {
          setActiveView('home');
        }}
      >
        Back to home
      </button>
    </div>
  );
};
