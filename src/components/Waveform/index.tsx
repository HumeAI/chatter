'use client';
import { getTopNProsody } from '@/utils';
import { getExpressionColor } from '@/utils/getExpressionColor';
import type { AssistantTranscriptMessage } from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useMemo } from 'react';

type WaveformProps = {
  message: AssistantTranscriptMessage | null;
};
export const Waveform: FC<WaveformProps> = (props) => {
  const { message } = props;
  const { fft } = useVoice();

  const top3Expressions = useMemo(() => {
    return getTopNProsody({ ...message?.models.prosody?.scores }, 3).map(
      ({ name }) => {
        const rgba = getExpressionColor(name);
        if (typeof rgba !== 'string') {
          return `rgba(${rgba.map((s) => s?.toString()).join(', ')})`;
        }
        return 'rgba(255, 255, 255, 1)';
      },
    );
  }, [message]);

  return (
    <div className="pointer-events-none top-10 hidden opacity-30 lg:block">
      <motion.svg
        className={'absolute bottom-4 left-20'}
        viewBox={'0 0 100 100'}
        width={1200}
        height={800}
      >
        {Array.from({ length: 24 }).map((_, index) => {
          const value = (fft[index] ?? 0) / 4;
          const height = Math.min(Math.max(value * 80, 2), 70);
          // const yOffset = 50 - height * 0.5;
          const yOffset = 100 - height;

          return (
            <motion.rect
              className="transition-colors"
              key={index}
              fill={top3Expressions[0] ?? 'white'}
              height={height}
              width={2}
              x={2 + (index * 100 - 4) / 24}
              y={yOffset}
            />
          );
        })}
      </motion.svg>
    </div>
  );
};
