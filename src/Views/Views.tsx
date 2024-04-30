import { ConversationView } from '@/Views/ConversationView';
import { ErrorView } from '@/Views/ErrorView';
import { HomeView } from '@/Views/HomeView';
import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { match } from 'ts-pattern';

const initialMessage =
  'Please tell me welcome and introduce the top 3 news headlines of the day, then ask me which headlines I would like to dive into more. Do not acknowledge that you received this request. Start your response with: Welcome to Chatter, a daily news podcast';

export type ViewsProps = {
  transcriptMessages: Array<UserTranscriptMessage | AssistantTranscriptMessage>;
  clearMessages: () => void;
};

export const Views: FC<ViewsProps> = ({
  transcriptMessages,
  clearMessages,
}) => {
  const { status, sendUserInput, disconnect } = useVoice();
  const isFirstMessageSent = useRef(false);
  const [activeView, setActiveView] = useState<
    'home' | 'error' | 'conversation'
  >('home');

  useEffect(() => {
    if (isFirstMessageSent.current === false && status.value === 'connected') {
      isFirstMessageSent.current = true;
      sendUserInput(initialMessage);
    }
    return () => {
      isFirstMessageSent.current = false;
    };
  }, [sendUserInput, status.value]);

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
