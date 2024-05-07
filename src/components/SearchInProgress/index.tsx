import { AnimatePresence, motion } from 'framer-motion';
import { Hourglass } from 'lucide-react';
import { FC } from 'react';

export type SearchInProgressProps = Record<never, never>;

export const SearchInProgress: FC<SearchInProgressProps> = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="my-4 ml-auto flex w-fit items-center justify-center gap-2 text-neutral-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <Hourglass className="animate-spin-slow" size={20} />
        <span>Searching the web ...</span>
      </motion.div>
    </AnimatePresence>
  );
};
