import { Messages } from '@/components/Messages';
import { OnAir } from '@/components/OnAir';
import { Waveform } from '@/components/Waveform';
import { JSONErrorMessage } from '@humeai/voice';
import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { DoorOpen } from 'lucide-react';
import { type FC, useMemo } from 'react';

export type ConversationViewProps = {
  onDisconnect: () => void;
};

export const ConversationView: FC<ConversationViewProps> = ({
  onDisconnect,
}) => {
  const { lastVoiceMessage, messages, toolStatusStore } = useVoice();

  const filteredMessages = useMemo(() => {
    return messages
      .filter(
        (
          message,
        ): message is
          | UserTranscriptMessage
          | AssistantTranscriptMessage
          | JSONErrorMessage => {
          return (
            message.type === 'assistant_message' ||
            message.type === 'user_message' ||
            message.type === 'error'
          );
        },
      )
      .slice(1);
  }, [messages]);

  const pendingTools = useMemo(() => {
    console.log('status', toolStatusStore);
    return Object.keys(toolStatusStore).filter((toolId) => {
      return !toolStatusStore[toolId].resolved;
    });
  }, [toolStatusStore]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex h-svh w-screen flex-col overflow-hidden bg-black"
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
        <Messages
          messages={filteredMessages}
          hasPendingTools={pendingTools.length > 0}
        />
      </motion.div>
    </AnimatePresence>
  );
};
