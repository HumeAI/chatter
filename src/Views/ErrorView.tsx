import type { Dispatch, FC, SetStateAction } from 'react';

type ErrorViewProps = {
  setActiveView: Dispatch<SetStateAction<'home' | 'error' | 'conversation'>>;
};

export const ErrorView: FC<ErrorViewProps> = ({ setActiveView }) => {
  return (
    <div className="mx-auto my-[30vh] flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-3xl sm:text-5xl text-center">
        Oops! Something went wrong
      </h1>
      <button
        className="z-10 rounded-lg bg-black px-4 py-2 text-xl sm:text-3xl text-white hover:shadow-[8px_8px_#f02eaa]"
        onClick={() => {
          setActiveView('home');
        }}
      >
        Back to home
      </button>
    </div>
  );
};
