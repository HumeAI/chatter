'use client';
import { Views } from '@/Views/Views';
import { getClientToken } from '@/components/Voice/getClientToken';
import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { VoiceProvider } from '@humeai/voice-react';
import { useState } from 'react';
import useSWR from 'swr';

export const Voice = () => {
  const [transcriptMessages, setTranscriptMessages] = useState<
    Array<UserTranscriptMessage | AssistantTranscriptMessage>
  >([]);
  const { data } = useSWR('/api/access-token', getClientToken);

  const accessToken = data?.access_token || '';

  return (
    <VoiceProvider
      auth={{
        type: 'accessToken',
        value: accessToken,
      }}
      hostname={process.env.NEXT_PUBLIC_VOICE_HOSTNAME}
      onMessage={(message) => {
        if (message.type === 'user_message' && !message.models.prosody) {
          return;
        }

        if (
          message.type === 'user_message' ||
          message.type === 'assistant_message'
        ) {
          if (transcriptMessages.length >= 3) {
            setTranscriptMessages([message]);
          } else {
            setTranscriptMessages((p) => p.concat(message));
          }
        }
      }}
      onClose={() => {
        setTranscriptMessages([]);
      }}
      configId={process.env.NEXT_PUBLIC_VOICE_CONFIG_ID}
    >
      <Views
        transcriptMessages={transcriptMessages}
        clearMessages={() => {
          setTranscriptMessages([]);
        }}
      />
    </VoiceProvider>
  );
};
