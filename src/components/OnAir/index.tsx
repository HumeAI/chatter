import { cn } from '@/utils';
import { motion } from 'framer-motion';

export type OnAirProps = {};
export const OnAir = () => {
  return (
    <motion.div
      className="absolute"
      initial={{ top: -500, left: 56, skewX: -10 }}
      animate={{ top: 56, skewX: 0 }}
      transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
    >
      <motion.div
        className={cn(
          'flex w-fit items-center justify-center rounded-xl border-4 p-1 px-3 [text-shadow:_0px_0px_4px_white,_3px_3px_10px_white,_0px_0px_15px_theme(colors.pink.400),_0px_0px_25px_theme(colors.pink.400),_0px_0px_35px_theme(colors.pink.400)]',
          'border-white shadow-[0_0_2px_theme(colors.pink.100),inset_0_0_2px_theme(colors.pink.400),0_0_5px_theme(colors.pink.100),0_0_15px_theme(colors.pink.400),0_0_20px_theme(colors.pink.400),0_0_25px_theme(colors.pink.400)]',
          'font-neon text-9xl uppercase text-pink-100',
        )}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1, 0, 1] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          delay: 0.8,
          repeatDelay: 10,
        }}
      >
        <span>O</span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            delay: 3,
            repeatDelay: 3,
          }}
        >
          n
        </motion.span>
        <motion.span
          className="ml-8"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            delay: 7,
            repeatDelay: 5,
          }}
        >
          Air
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
