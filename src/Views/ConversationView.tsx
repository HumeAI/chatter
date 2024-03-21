import { DisconnectButton } from '@/components/DisconnectButton';
import { ExpressionBlobPane } from '@/components/ExpressionBlobPane';
import { Messages } from '@/components/Messages';
import { Waveform } from '@/components/Waveform';
import { useVoice } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export const ConversationView = ({ transcriptMessages }) => {
  const { lastVoiceMessage } = useVoice();

  return (
    <AnimatePresence>
      <motion.div
        className="bg-black w-screen h-screen"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        exit={{ y: -1000 }}
        transition={{ duration: 0.5 }}
      >
        <DisconnectButton />
        <Waveform message={lastVoiceMessage} />

        <div className="ml-auto mr-40 w-1/2">
          <Messages transcriptMessages={transcriptMessages} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
