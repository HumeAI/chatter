'use client';
import { cn } from '@/utils';
import { useShortScreen } from '@/utils/useShortScreen';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  disabled = false,
  onClick,
  className,
}) => {
  const { isShortScreen } = useShortScreen();

  const hoverState = {
    x: '-0.4rem',
    y: '-0.4rem',
    boxShadow:
      '0.4rem 0.4rem rgba(240, 46, 170, 1), 0.8rem 0.8rem rgba(240, 46, 170, 0.3)',
  };

  return (
    <motion.button
      className={cn(
        'rounded-lg bg-white px-4 py-2 text-xl text-black disabled:cursor-not-allowed disabled:opacity-50 ',
        'focus:outline-none',
        isShortScreen ? 'text-xl' : 'md:text-3xl',
        className,
      )}
      onClick={onClick}
      initial={{ x: 0, y: 0 }}
      whileHover={hoverState}
      whileFocus={hoverState}
      transition={{ duration: 0.1 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
