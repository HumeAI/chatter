import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { Balancer } from 'react-wrap-balancer';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  ease: 'easeInOut',
  repeatType: 'reverse' as const,
};

export default function ThreeDotsWave() {
  return (
    <motion.div
      className="flex gap-3"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        className="block size-2 rounded-full bg-white"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        className="block size-2 rounded-full bg-white"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        className="block size-2 rounded-full bg-white"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}

export type WaitingOnHostProps = Record<never, never>;

export const WaitingOnHost: FC<WaitingOnHostProps> = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex size-full h-svh flex-col items-center justify-center gap-8 px-8 text-center font-mono text-xl text-white"
        exit={{ opacity: 0 }}
      >
        <div className="flex">
          <ThreeDotsWave />
        </div>

        <Balancer>Your podcast co-host will be here soon</Balancer>
      </motion.div>
    </AnimatePresence>
  );
};
