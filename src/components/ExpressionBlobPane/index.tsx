import { ExpressionBlob } from '@/components/ExpressionBlob';
import { getTopNProsody } from '@/utils';
import { AgentTranscriptMessage, useVoice } from '@humeai/voice-react';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';

export type ExpressionBlobPaneProps = {
  lastVoiceMessage: AgentTranscriptMessage | null;
};

export const ExpressionBlobPane: FC<ExpressionBlobPaneProps> = (props) => {
  const { lastVoiceMessage } = props;

  const topExpressions = useMemo(() => {
    return getTopNProsody(lastVoiceMessage?.models.prosody.scores || {}, 1);
  }, [lastVoiceMessage]);

  return (
    <div className="relative h-full contrast-[10] bg-black">
      {topExpressions[0]?.name ? (
        <>
          <ExpressionBlob expression={topExpressions[0]?.name} />
          <ExpressionBlob expression={topExpressions[0]?.name} />
          <ExpressionBlob expression={topExpressions[0]?.name} />
          <ExpressionBlob expression={topExpressions[0]?.name} />
          <ExpressionBlob expression={topExpressions[0]?.name} />
        </>
      ) : null}
    </div>
  );
};
