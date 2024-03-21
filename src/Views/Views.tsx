import { ConversationView } from '@/Views/ConversationView';
import { HomeView } from '@/Views/HomeView';
import { initialMessage } from '@/components/Voice/prompts';
import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
  useVoice,
} from '@humeai/voice-react';
import { FC, useEffect, useRef } from 'react';
import { match } from 'ts-pattern';

export type ViewsProps = {
  transcriptMessages: Array<UserTranscriptMessage | AgentTranscriptMessage>;
};

export const Views: FC<ViewsProps> = ({ transcriptMessages }) => {
  const { status, sendText } = useVoice();
  const isFirstMessageSent = useRef(false);

  useEffect(() => {
    if (isFirstMessageSent.current === false && status.value === 'connected') {
      console.log('sending');
      isFirstMessageSent.current = true;
      sendText(initialMessage);
    }
    return () => {
      isFirstMessageSent.current = false;
    };
  }, [status.value]);

  return (
    <div className="bg-beige-300 h-screen w-screen overflow-hidden">
      {match(status.value)
        .with('connected', () => {
          return <ConversationView transcriptMessages={transcriptMessages} />;
        })
        .with('disconnected', 'connecting', () => {
          return <HomeView />;
        })
        .otherwise(() => {
          return <div>something went wrong</div>;
        })}
    </div>
  );
};
