import { cn } from '@/utils';
import type { AssistantTranscriptMessage } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment, useMemo, useRef } from 'react';

function randomBounded(lowerBound: number, upperBound: number) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

export type AgentMessageProps = {
  message: AssistantTranscriptMessage;
};

export const AgentMessage: FC<AgentMessageProps> = ({ message }) => {
  const words = useMemo(() => {
    return message.message.content.split(' ');
  }, [message.message.content]);

  const finalX = useRef(randomBounded(-50, 0));

  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          'z-10 ml-auto w-fit max-w-xl rounded-t-3xl rounded-bl-3xl bg-blue-300 px-4 py-2 text-lg opacity-80 md:px-8 md:py-4 md:text-2xl',
        )}
        style={{
          boxShadow:
            'rgba(240, 46, 170, 0.4) 1px 1px, rgba(240, 46, 170, 0.4) 10px 10px, rgba(240, 46, 170, 0.3) 20px 20px, rgba(240, 46, 170, 0.2) 30px 30px, rgba(240, 46, 170, 0.1) 40px 40px, rgba(240, 46, 170, 0.05) 50px 50px',
        }}
        initial={{ opacity: 0, x: 10, y: 5 }}
        animate={{
          opacity: 1,
          x: finalX.current,
          y: 0,
        }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="my-4 flex flex-wrap"
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
              <Fragment key={`word-${word}-${index}`}>
                <motion.span
                  key={`${index}__${word}`}
                  className="opacity-0"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                >
                  {word}
                </motion.span>
                {index !== words.length - 1 && <span>&nbsp;</span>}
              </Fragment>
            );
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
