import { top3Prosody } from '@/utils';
import { AgentTranscriptMessage } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';

export type AgentMessageProps = {
  message: AgentTranscriptMessage;
};

export const AgentMessage: FC<AgentMessageProps> = ({ message }) => {
  const top3 = useMemo(() => {
    return top3Prosody(message.models.prosody.scores);
  }, [message]);

  const words = useMemo(() => {
    return message.message.content.split(' ');
  }, [message.message.content]);

  return (
    <motion.div
      className="bg-blue-200 ml-auto w-fit py-4 px-8 text-xl rounded-xl max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layout
        className="flex flex-wrap my-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {words.map((word, index) => {
          return (
            <Fragment key={index}>
              <motion.span
                key={`${index}__${word}`}
                className="word opacity-0"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
              >
                {word}
              </motion.span>
              <span>&nbsp;</span>
            </Fragment>
          );
        })}
      </motion.div>

      {/* {JSON.stringify(top3)} */}
    </motion.div>
  );
};
