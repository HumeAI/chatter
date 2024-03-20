import { AgentMessage } from '@/components/AgentMessage';
import { DisconnectButton } from '@/components/DisconnectButton';
import { Messages } from '@/components/Messages';
import { UserMessage } from '@/components/UserMessage';
import { createMockAgentMessage, createMockUserMessage } from '@/utils/mocks';
import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
  useVoice,
} from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useMemo } from 'react';

export const ConversationView = () => {
  const { status, messages } = useVoice();
  const transcriptMessages = useMemo(() => {
    return messages.filter((message) => {
      return (
        message.type === 'user_message' || message.type === 'assistant_message'
      );
    });
  }, [messages]);

  return (
    <AnimatePresence>
      <motion.div
        className="bg-tan-400 w-screen h-screen"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 0.5 }}
      >
        <DisconnectButton />
        <Messages transcriptMessages={transcriptMessages} />
      </motion.div>
    </AnimatePresence>
  );
};
