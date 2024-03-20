import { top3Prosody } from '@/utils';
import { UserTranscriptMessage } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';
import { expressionColors } from 'expression-colors';

export type UserMessageProps = {
  message: UserTranscriptMessage;
};
export const UserMessage: FC<UserMessageProps> = ({ message }) => {
  const top3 = useMemo(() => {
    return top3Prosody(message.models.prosody.scores);
  }, [message]);

  const words = useMemo(() => {
    return message.message.content.split(' ');
  }, [message.message.content]);

  return (
    <motion.div
      className="bg-pink-200 mr-auto w-fit py-2 px-4 text-md rounded-xl max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap my-4">
        {words.map((word, index) => {
          return (
            <Fragment key={index}>
              <motion.span key={`${index}__${word}`}>{word}</motion.span>
              <span>&nbsp;</span>
            </Fragment>
          );
        })}
      </div>
      {JSON.stringify(top3)}
    </motion.div>
  );
};
