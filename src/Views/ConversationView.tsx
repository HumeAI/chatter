import { Messages } from '@/components/Messages';
import { OnAir } from '@/components/OnAir';
import { Waveform } from '@/components/Waveform';
import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC, useMemo } from 'react';
import { DoorOpen } from 'lucide-react';

export type ConversationViewProps = {
  onDisconnect: () => void;
};

export const ConversationView: FC<ConversationViewProps> = ({
  onDisconnect,
}) => {
  const { lastVoiceMessage, messages } = useVoice();

  const transcriptMessages = useMemo(() => {
    return messages
      .filter(
        (
          message,
        ): message is UserTranscriptMessage | AssistantTranscriptMessage => {
          return (
            message.type === 'assistant_message' ||
            message.type === 'user_message'
          );
        },
      )
      .slice(1);
  }, [messages]);

  return (
    <AnimatePresence>
      <motion.div
        className="h-screen w-screen bg-black"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex w-full justify-end">
          <button
            className="flex gap-1 p-4 text-white opacity-50"
            onClick={onDisconnect}
          >
            <DoorOpen strokeWidth={1} />
            <span>Disconnect</span>
          </button>
        </div>

        <OnAir />
        <Waveform message={lastVoiceMessage} />
        <div className="ml-auto mr-40 h-[80vh] w-1/2">
          <Messages transcriptMessages={transcriptMessages} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
