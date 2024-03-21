import { ConnectButton } from '@/components/ConnectButton';
import { useVoice } from '@humeai/voice-react';

export const HomeView = () => {
  const { status } = useVoice();
  return (
    <div className="mx-auto my-56 flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Chatter</h1>
      <ConnectButton />
    </div>
  );
};
