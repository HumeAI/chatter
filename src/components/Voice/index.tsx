'use client';
import { Views } from '@/Views/Views';
import { ConnectButton } from '@/components/ConnectButton';
import { getClientToken } from '@/components/Voice/getClientToken';
import { systemPrompt } from '@/components/Voice/systemPrompt';
import { VoiceProvider } from '@humeai/voice-react';
import useSWR from 'swr';

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
      systemPrompt={systemPrompt}
    >
      <Views />
    </VoiceProvider>
  );
};
