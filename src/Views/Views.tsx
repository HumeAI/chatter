import { ConversationView } from '@/Views/ConversationView';
import { HomeView } from '@/Views/HomeView';
import { useVoice } from '@humeai/voice-react';
import { match } from 'ts-pattern';

export const Views = () => {
  const { status } = useVoice();

  return (
    <div className="h-screen w-screen overflow-hidden bg-beige-300">
      {match(status.value)
        .with('connected', () => {
          return <ConversationView />;
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
