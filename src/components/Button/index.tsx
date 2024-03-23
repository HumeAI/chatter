import { cn } from '@/utils';
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
  return (
    <motion.button
      className={cn(
        'rounded-lg bg-black px-4 py-2 text-xl text-white disabled:cursor-not-allowed disabled:opacity-50 md:text-3xl',
        className,
      )}
      onClick={onClick}
      initial={{ x: 0, y: 0 }}
      whileHover={{
        x: '-0.4rem',
        y: '-0.4rem',
        boxShadow:
          '0.4rem 0.4rem rgba(240, 46, 170, 1), 0.8rem 0.8rem rgba(240, 46, 170, 0.3)',
      }}
      transition={{ duration: 0.1 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
