import { cn } from '@/utils';
import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';

function randomBetween30And80(): number {
  return Math.floor(Math.random() * (80 - 30 + 1)) + 30;
}

function formatRadius() {
  return Array.from({ length: 4 }, () => randomBetween30And80()).join('% ');
}

export type BackdropProps = {};

export const Backdrop: FC<BackdropProps> = () => {
  const initialSize = useMemo(() => {
    return formatRadius();
  }, []);

  return (
    <div>
      <div className="p-40">
        <div className={cn('flex flex-wrap gap-2 p-4 ', 'blur-xl')}>
          <motion.div
            className="size-40 bg-purple-300"
            initial={{ borderRadius: initialSize, y: -30, x: 50 }}
            animate={{
              scale: [1.2, 0.9, 1.1, 1, 1.3],
              borderRadius: [
                '40% 30% 70% 30%',
                '70% 30% 50% 60%',
                '40% 30% 70% 30%',
                '70% 30% 50% 60%',
                '40% 30% 70% 30%',
              ],
              y: [0, 40, 0, -40, 0],
              x: [-50, 40, 20, -60, 0],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </div>
    </div>
  );
};
