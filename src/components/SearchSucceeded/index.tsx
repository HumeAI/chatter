import { ToolResponse } from '@humeai/voice';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

export type SearchSucceededProps = {
  message: ToolResponse;
};

export const SearchSucceeded: FC<SearchSucceededProps> = ({ message }) => {
  const toolCallId = 'tool_call_id' in message ? message.tool_call_id : '';

  return (
    <AnimatePresence>
      <motion.div
        className="-mt-2 mb-4 ml-auto flex w-fit items-center justify-center gap-2 bg-black text-neutral-200"
        data-tool-call-id={toolCallId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <span>Found results!</span>
      </motion.div>
    </AnimatePresence>
  );
};
