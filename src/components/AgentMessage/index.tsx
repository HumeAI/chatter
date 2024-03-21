import { cn, getTopNProsody } from '@/utils';
import { AgentTranscriptMessage } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';

export type AgentMessageProps = {
  message: AgentTranscriptMessage;
};

export const AgentMessage: FC<AgentMessageProps> = ({ message }) => {
  const words = useMemo(() => {
    return message.message.content.split(' ');
  }, [message.message.content]);

  return (
    <motion.div
      className={cn(
        'bg-blue-300 ml-auto w-fit py-4 px-8 text-2xl rounded-xl max-w-xl opacity-80 z-10',
        // 'shadow-[10px_12px_0px_0px_white]',
      )}
      style={{
        boxShadow:
          'rgba(240, 46, 170, 0.4) 1px 1px, rgba(240, 46, 170, 0.4) 10px 10px, rgba(240, 46, 170, 0.3) 20px 20px, rgba(240, 46, 170, 0.2) 30px 30px, rgba(240, 46, 170, 0.1) 40px 40px, rgba(240, 46, 170, 0.05) 50px 50px',
      }}
      initial={{ opacity: 0, x: 10, y: 5, skewX: 5 }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        skewX: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        layout
        className="flex flex-wrap my-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
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
    </motion.div>
  );
};
