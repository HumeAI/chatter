import { cn } from '@/utils';
import { motion } from 'framer-motion';

export type OnAirProps = {};
export const OnAir = () => {
  return (
    <motion.div
      className="absolute"
      initial={{ top: -500, left: 40, skewX: -50 }}
      animate={{ top: 40, skewX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={cn(
          'w-fit flex justify-center items-center gap-8 rounded-lg p-1 px-2 pr-3 border-4 [text-shadow:_0px_0px_4px_white,_3px_3px_10px_white,_0px_0px_15px_#f02eaa,_0px_0px_25px_#f02eaa,_0px_0px_35px_#f02eaa]',
          'border-white shadow-[0_0_2px_#fff,inset_0_0_2px_#f02eaa,0_0_5px_#fff,0_0_15px_#f02eaa,0_0_20px_#f02eaa,0_0_25px_#f02eaa]',
          'text-8xl uppercase text-pink-100 font-neon tracking-tighter',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0, 1, 0, 1, 0, 1] }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          delay: 2,
          repeatDelay: 10,
        }}
      >
        <span>On</span>
        <span>Air</span>
      </motion.div>
    </motion.div>
  );
};
