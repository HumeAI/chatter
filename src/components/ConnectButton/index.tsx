import { useVoice } from '@humeai/voice-react';

export const ConnectButton = () => {
  const { connect, status } = useVoice();

  return (
    <button
      className="rounded-lg bg-black px-2 py-1 text-white"
      onClick={() => {
        void connect();
      }}
      disabled={status.value === 'connecting'}
    >
      {status.value === 'connecting' ? 'Connecting...' : 'Connect'}
    </button>
  );
};
