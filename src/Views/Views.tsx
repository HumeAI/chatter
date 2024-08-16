import { ConversationView } from '@/Views/ConversationView';
import { ErrorView } from '@/Views/ErrorView';
import { HomeView } from '@/Views/HomeView';
import { MicPermissionView } from '@/Views/MicPermissionView';
import { useVoice } from '@humeai/voice-react';
import { format } from 'date-fns';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { match } from 'ts-pattern';

function getInitialMessage() {
  const today = format(new Date(), 'LLLL do, yyyy');
  return `Start your response with: "Welcome to Chatter, an interactive news podcast. The date is ${today}." Then, use the web_search tool to run exactly this query: "top pop culture news stories ${today}". Then, go over the most interesting top 4 stories. Do not acknowledge that you received this request.`;
}

export type ViewsProps = Record<never, never>;

export const Views: FC<ViewsProps> = () => {
  const { status, sendUserInput, disconnect, connect, clearMessages } =
    useVoice();
  const isFirstMessageSent = useRef(false);
  const [activeView, setActiveView] = useState<
    'home' | 'error' | 'conversation' | 'mic_error'
  >('home');

  useEffect(() => {
    if (isFirstMessageSent.current === false && status.value === 'connected') {
      isFirstMessageSent.current = true;
      // Initial message is necessary because the assistant can't speak first
      sendUserInput(getInitialMessage());
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
                clearMessages();
              }}
              onReconnect={() => {
                connect();
                isFirstMessageSent.current = false;
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
        .with('mic_error', () => {
          return <MicPermissionView setActiveView={setActiveView} />;
        })
        .exhaustive()}
    </>
  );
};
