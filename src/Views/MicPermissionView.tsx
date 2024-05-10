import { NavRail } from '@/components/NavRail';
import { MicOff } from 'lucide-react';
import dynamic from 'next/dynamic';
import type { Dispatch, FC, SetStateAction } from 'react';
import { Balancer } from 'react-wrap-balancer';

const Button = dynamic(
  () => import('@/components/Button').then((m) => m.Button),
  {
    ssr: false,
  },
);

type MicPermissionViewProps = {
  setActiveView: Dispatch<
    SetStateAction<'home' | 'error' | 'conversation' | 'mic_error'>
  >;
};

export const MicPermissionView: FC<MicPermissionViewProps> = ({
  setActiveView,
}) => {
  return (
    <>
      <NavRail variant="dark" />
      <div className="mx-auto flex w-full grow flex-col items-center justify-center gap-4 overflow-scroll">
        <MicOff size={40} />
        <Balancer
          as={'h2'}
          className="max-w-2xl text-center text-2xl sm:text-3xl"
        >
          Please grant microphone permissions to continue using Chatter.
        </Balancer>
        <Balancer as="p" className="mb-8 text-center text-lg sm:text-xl">
          Permissions can be updated in your browser settings.
        </Balancer>
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
