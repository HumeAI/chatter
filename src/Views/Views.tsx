import { ConversationView } from '@/Views/ConversationView';
import { ErrorView } from '@/Views/ErrorView';
import { HomeView } from '@/Views/HomeView';
import { initialMessage } from '@/components/Voice/prompts';
import type {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { match } from 'ts-pattern';

export type ViewsProps = {
  transcriptMessages: Array<UserTranscriptMessage | AgentTranscriptMessage>;
  clearMessages: () => void;
};

export const Views: FC<ViewsProps> = ({
  transcriptMessages,
  clearMessages,
}) => {
  const { status, sendText, disconnect } = useVoice();
  const isFirstMessageSent = useRef(false);
  const [activeView, setActiveView] = useState<
    'home' | 'error' | 'conversation'
  >('home');

  useEffect(() => {
    if (isFirstMessageSent.current === false && status.value === 'connected') {
      isFirstMessageSent.current = true;
      sendText(initialMessage);
    }
    return () => {
      isFirstMessageSent.current = false;
    };
  }, [sendText, status.value]);

  return (
    <>
      {match(activeView)
        .with('conversation', () => {
          return (
            <ConversationView
              transcriptMessages={transcriptMessages}
              onDisconnect={() => {
                disconnect();
                clearMessages();
                setActiveView('home');
              }}
            />
          );
        })
        .with('home', () => {
          return <HomeView setActiveView={setActiveView} />;
        })
        .with('error', () => {
          return <ErrorView setActiveView={setActiveView} />;
        })
        .exhaustive()}
    </>
  );
};
