import { useVoice } from '@humeai/voice-react';

export const ConnectButton = () => {
  const { connect, status } = useVoice();

  return (
    <button
      className="bg-black rounded-lg text-white px-3 py-1"
      onClick={() => {
        void connect();
      }}
      disabled={status.value === 'connecting'}
    >
      {status.value === 'connecting' ? 'Connecting...' : 'Connect'}
    </button>
  );
};
