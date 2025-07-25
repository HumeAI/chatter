'use client';
import { Views } from '@/Views/Views';
import { getClientToken } from '@/components/Voice/getClientToken';
import { VoiceProvider } from '@humeai/voice-react';
import useSWR from 'swr';

export const Voice = () => {
  const { data } = useSWR('/api/access-token', getClientToken);

  const accessToken = data?.access_token || '';

  return (
    <VoiceProvider clearMessagesOnDisconnect={false}>
      <Views accessToken={accessToken} />
    </VoiceProvider>
  );
};
