import { DisconnectButton } from '@/components/DisconnectButton';
import { ExpressionBlobPane } from '@/components/ExpressionBlobPane';
import { Messages } from '@/components/Messages';
import { useVoice } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo } from 'react';

export const ConversationView = () => {
  const { messages, lastVoiceMessage } = useVoice();
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
        className="bg-black w-screen h-screen"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 0.5 }}
      >
        <DisconnectButton />
        <div className="flex h-full">
          <div className="">
            <Messages transcriptMessages={transcriptMessages} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
