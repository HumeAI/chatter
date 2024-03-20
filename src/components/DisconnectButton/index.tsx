import { useVoice } from '@humeai/voice-react';

export const DisconnectButton = () => {
  const { disconnect } = useVoice();

  return (
    <button
      onClick={() => {
        void disconnect();
      }}
    >
      Disconnect
    </button>
  );
};
