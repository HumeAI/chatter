import { motion } from 'framer-motion';
import { MessageCircleWarning } from 'lucide-react';
import { FC } from 'react';

export type ErrorMessageProps = {
  messageContent: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({ messageContent }) => {
  return (
    <motion.div
      className="z-50 my-4 w-full rounded-md bg-white p-4 font-mono md:text-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col border-l-4 border-red-500 pl-4">
        <div className={'flex w-full items-center justify-start'}>
          <div
            className={
              'flex items-center gap-1 rounded-full text-xs uppercase text-red-500'
            }
          >
            <MessageCircleWarning className={'size-3 text-red-500'} />
            <div>Error</div>
          </div>
        </div>
        <div
          className={
            'break-all font-mono text-sm leading-tight text-neutral-900'
          }
        >
          {messageContent}
        </div>
      </div>
    </motion.div>
  );
};
