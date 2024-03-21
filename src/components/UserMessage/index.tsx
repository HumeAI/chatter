import { UserTranscriptMessage } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';
import { expressionColors } from 'expression-colors';

export type UserMessageProps = {
  message: UserTranscriptMessage;
};
export const UserMessage: FC<UserMessageProps> = ({ message }) => {
  const words = useMemo(() => {
    return message.message.content.split(' ');
  }, [message.message.content]);

  return (
    <motion.div
      className="text-md z-50 mr-auto w-fit max-w-lg rounded-xl bg-green-300 px-4 py-1"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="my-4 flex flex-wrap">
        {words.map((word, index) => {
          return (
            <Fragment key={index}>
              <motion.span key={`${index}__${word}`}>{word}</motion.span>
              <span>&nbsp;</span>
            </Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};
