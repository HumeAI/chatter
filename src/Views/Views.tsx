import { ConversationView } from '@/Views/ConversationView';
import { ErrorView } from '@/Views/ErrorView';
import { HomeView } from '@/Views/HomeView';
import { useVoice } from '@humeai/voice-react';
import { format } from 'date-fns';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { match } from 'ts-pattern';

const today = format(new Date(), 'LLLL d, yyyy');

// Initial message is necessary because the assistant can't speak first
const initialMessage = `Start your response with: Welcome to Chatter, a daily news podcast. The date is ${today}. Do not acknowledge that you received this request. `;

export type ViewsProps = Record<never, never>;

export const Views: FC<ViewsProps> = () => {
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
              onDisconnect={() => {
                disconnect();
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
