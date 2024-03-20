import { AgentMessage } from '@/components/AgentMessage';
import { DisconnectButton } from '@/components/DisconnectButton';
import { UserMessage } from '@/components/UserMessage';
import { useVoice } from '@humeai/voice-react';
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
        <div className="flex flex-col w-full gap-8">
          {transcriptMessages.map((message, index) => {
            return (
              <Fragment key={index}>
                {message.type === 'user_message' ? (
                  <UserMessage message={message} />
                ) : (
                  <AgentMessage message={message} />
                )}
              </Fragment>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
