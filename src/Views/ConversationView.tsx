'use client';
import { Messages } from '@/components/Messages';
import { NavRail } from '@/components/NavRail';
import { OnAir } from '@/components/OnAir';
import { WaitingOnHost } from '@/components/WaitingOnHost';
import { Waveform } from '@/components/Waveform';
import type {
  AssistantTranscriptMessage,
  ToolCall,
  ToolResponse,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { JSONErrorMessage, useVoice } from '@humeai/voice-react';
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
  const { lastVoiceMessage, messages, status } = useVoice();

  const filteredMessages = useMemo(() => {
    return messages
      .filter(
        (
          message,
        ): message is
          | UserTranscriptMessage
          | AssistantTranscriptMessage
          | JSONErrorMessage
          | ToolCall
          | ToolResponse => {
          return (
            message.type === 'assistant_message' ||
            message.type === 'user_message' ||
            message.type === 'error' ||
            message.type === 'tool_call' ||
            message.type === 'tool_response'
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

  return (
    <>
      <NavRail variant="dark" />
      <AnimatePresence>
        <motion.div
          className="flex max-h-[calc(100svh-64px)] w-screen grow flex-col overflow-hidden bg-black"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: 1000 }}
          transition={{ duration: 0.1 }}
        >
          <OnAir />
          <Waveform message={lastVoiceMessage} />

          {filteredMessages.length > 0 ? (
            <Messages
              messages={filteredMessages}
              status={status}
              onReconnect={onReconnect}
            />
          ) : (
            <WaitingOnHost />
          )}
          <div className="fixed bottom-4 left-4 text-sm text-neutral-500 md:bottom-8 md:left-8">
            Chatter may make mistakes.
          </div>

          <div className="flex w-full justify-end md:p-4">
            <button
              className="flex gap-1 p-4 text-neutral-100"
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
