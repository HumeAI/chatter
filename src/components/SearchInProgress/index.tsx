import type { ToolCall } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { FC, useMemo } from 'react';

export type SearchInProgressProps = {
  message: ToolCall;
};

export const SearchInProgress: FC<SearchInProgressProps> = ({ message }) => {
  const toolCallId = 'tool_call_id' in message ? message.tool_call_id : '';

  const query = useMemo(() => {
    try {
      if ('parameters' in message && typeof message.parameters === 'string') {
        const parameters = JSON.parse(message.parameters);
        if (parameters.query) {
          console.log('query', parameters.query);
          return parameters.query;
        }
      }
    } catch (e) {
      return '';
    }
  }, [message]);

  return (
    <AnimatePresence>
      <motion.div
        className="z-10 my-4 ml-auto flex w-fit items-center justify-center gap-2 rounded-3xl bg-black px-2 py-1 text-neutral-200"
        data-tool-call-id={toolCallId}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 10 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <Search size={20} />
        {query ? (
          <div className="bg-black">
            <span>Searching the web for </span>
            <span className="font-mono text-neutral-400">
              &ldquo;{query}&rdquo;
            </span>
          </div>
        ) : (
          <span>Searching the web ...</span>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
