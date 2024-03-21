import { cn } from '@/utils';
import { expressionColors } from 'expression-colors';
import { motion } from 'framer-motion';
import { FC, useMemo, useRef } from 'react';

function randomBounded(lowerBound: number, upperBound: number) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

function getRandomBorderRadius() {
  return Array.from({ length: 4 }, () => `${randomBounded(30, 80)}%`).join(' ');
}

export type ExpressionBlobProps = {
  expression: keyof typeof expressionColors;
};

export const ExpressionBlob: FC<ExpressionBlobProps> = ({ expression }) => {
  const numKeyframes = useRef(randomBounded(3, 6));
  const initialSize = useRef(getRandomBorderRadius());

  const color = `rgba(${expressionColors[expression].rgba.join(', ')})`;

  const scaleValues = useMemo(() => {
    return Array.from({ length: numKeyframes.current }).map(() =>
      randomBounded(1, 1.6),
    );
  }, []);

  const borderRadiusValues = useMemo(() => {
    return Array.from({ length: numKeyframes.current }).map(() =>
      getRandomBorderRadius(),
    );
  }, []);

  const xValues = useMemo(() => {
    return Array.from({ length: numKeyframes.current }).map(() =>
      randomBounded(0, 500),
    );
  }, []);
  const yValues = useMemo(() => {
    return Array.from({ length: numKeyframes.current }).map(() =>
      randomBounded(0, 700),
    );
  }, []);

  return (
    <motion.div
      className="transition-bg absolute size-40 bg-[var(--color)] blur-lg"
      style={{
        '--color': color,
      }}
      initial={{
        borderRadius: initialSize.current,
        // y: randomBounded(-200, 200),
        bottom: 0,
        x: randomBounded(0, 1000),
      }}
      animate={{
        scale: scaleValues,
        borderRadius: borderRadiusValues,
        x: xValues,
        bottom: yValues,
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {expression}
    </motion.div>
  );
};
