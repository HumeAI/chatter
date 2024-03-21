'use client';
import { Views } from '@/Views/Views';
import { ConnectButton } from '@/components/ConnectButton';
import { getClientToken } from '@/components/Voice/getClientToken';
import { systemPrompt } from '@/components/Voice/systemPrompt';
import { VoiceProvider } from '@humeai/voice-react';
import { useState } from 'react';
import useSWR from 'swr';

export const Voice = () => {
  const [transcriptMessages, setTranscriptMessages] = useState([]);
  const { data } = useSWR('/api/access-token', getClientToken);

  const accessToken = data?.access_token || '';

  return (
    <VoiceProvider
      auth={{
        type: 'accessToken',
        value: accessToken,
      }}
      hostname={process.env.NEXT_PUBLIC_VOICE_HOSTNAME}
      systemPrompt={systemPrompt}
      onMessage={(message) => {
        if (
          message.type === 'user_message' ||
          message.type === 'assistant_message'
        ) {
          if (transcriptMessages.length === 5) {
            console.log('5', message);
            setTranscriptMessages([message]);
          } else {
            console.log('less', message);
            setTranscriptMessages((p) => p.concat(message));
          }
        }
      }}
    >
      <Views transcriptMessages={transcriptMessages} />
    </VoiceProvider>
  );
};
