'use client';
import { getClientToken } from '@/components/Voice/getClientToken';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import useSWR from 'swr';

const Test = () => {
  const { connect } = useVoice();

  return (
    <div>
      <button
        onClick={() => {
          void connect();
        }}
      >
        Connect
      </button>
    </div>
  );
};

export const Voice = () => {
  const { data } = useSWR('/api/access-token', getClientToken);

  const accessToken = data?.access_token || '';

  return (
    <VoiceProvider
      auth={{
        type: 'accessToken',
        value: accessToken,
      }}
      hostname={process.env.NEXT_PUBLIC_VOICE_HOSTNAME}
    >
      <div>
        <h1>Hello</h1>
        <Test />
      </div>
    </VoiceProvider>
  );
};
