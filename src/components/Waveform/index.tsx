import { getTopNProsody } from '@/utils';
import { AgentTranscriptMessage, useVoice } from '@humeai/voice-react';
import { expressionColors } from 'expression-colors';
import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';

type WaveformProps = {
  message: AgentTranscriptMessage | null;
};
export const Waveform: FC<WaveformProps> = (props) => {
  const { message } = props;
  const { fft } = useVoice();

  const top3Expressions = useMemo(() => {
    return getTopNProsody(message?.models.prosody.scores || {}, 3).map(
      ({ name }) => {
        return `rgba(${expressionColors[name].rgba.join(', ')})`;
      },
    );
  }, [message]);

  return (
    <div className="opacity-30">
      <motion.svg
        viewBox={'0 0 100 100'}
        width={400}
        height={400}
        className={'absolute inset-0 size-full'}
      >
        {Array.from({ length: 24 }).map((_, index) => {
          const value = (fft[index] ?? 0) / 4;
          const height = Math.min(Math.max(value * 80, 2), 70);
          const yOffset = 50 - height * 0.5;

          return (
            <motion.rect
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
