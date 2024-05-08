import { Messages } from '@/components/Messages';
import { NavRail } from '@/components/NavRail';
import { OnAir } from '@/components/OnAir';
import { WaitingOnHost } from '@/components/WaitingOnHost';
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
  onReconnect: () => void;
};

export const ConversationView: FC<ConversationViewProps> = ({
  onDisconnect,
  onReconnect,
}) => {
  const { lastVoiceMessage, messages, toolStatusStore, status } = useVoice();

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
      .filter((message) => {
        const isInitialMessage =
          message.type === 'user_message' &&
          (message.from_text === true || !message.models.prosody);
        return !isInitialMessage;
      });
  }, [messages]);

  const pendingTools = useMemo(() => {
    return Object.keys(toolStatusStore).filter((toolId) => {
      return !toolStatusStore[toolId].resolved;
    });
  }, [toolStatusStore]);

  return (
    <>
      <NavRail variant="dark" />
      <AnimatePresence>
        <motion.div
          className="mt-16 flex h-[calc(100svh-64px)] w-screen flex-col overflow-hidden bg-black"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ duration: 0.1 }}
        >
          <OnAir />
          <Waveform message={lastVoiceMessage} />
          {lastVoiceMessage ? (
            <Messages
              messages={filteredMessages}
              hasPendingTools={pendingTools.length > 0}
              status={status}
              onReconnect={onReconnect}
            />
          ) : (
            <WaitingOnHost />
          )}
          <div className="flex w-full justify-end md:p-4">
            <button
              className="flex gap-1 p-4 text-white opacity-50"
              onClick={onDisconnect}
            >
              <DoorOpen strokeWidth={1} />
              <span>Disconnect</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
