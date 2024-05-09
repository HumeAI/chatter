'use client';

import { cn } from '@/utils';
import { useShortScreen } from '@/utils/useShortScreen';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

export const AppHeading = () => {
  const { isShortScreen } = useShortScreen();
  return (
    <>
      <motion.h1
        className={cn(
          'mx-auto text-7xl [text-shadow:_6px_6px_6px_theme(colors.pink.400)] lg:mt-40',
          isShortScreen ? 'text-7xl' : 'mt-16 md:text-[7rem]',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.3 }}
      >
        Chatter
      </motion.h1>
      <motion.p
        className={cn(
          '-mt-4 mb-4 px-4 text-center text-2xl',
          isShortScreen ? 'text-2xl' : 'md:text-4xl',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.6 }}
      >
        <Balancer>An interactive podcast experience</Balancer>
      </motion.p>
    </>
  );
};
