import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment, useMemo } from 'react';

export type UserMessageProps = {
  messageContent: string;
};
export const UserMessage: FC<UserMessageProps> = ({ messageContent }) => {
  const words = useMemo(() => {
    return messageContent.split(' ');
  }, [messageContent]);

  return (
    <motion.div
      className="z-50 mb-4 mr-auto w-fit max-w-lg rounded-t-3xl rounded-br-3xl bg-green-300 p-4 text-neutral-900 md:text-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap">
        {words.map((word, index) => {
          return (
            <Fragment key={`user-${index}__${word}`}>
              <motion.span>{word}</motion.span>
              {index !== words.length - 1 && <span>&nbsp;</span>}
            </Fragment>
          );
        })}
      </div>
    </motion.div>
  );
};
