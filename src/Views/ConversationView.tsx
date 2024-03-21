import { DisconnectButton } from '@/components/DisconnectButton';
import { Messages } from '@/components/Messages';
import { OnAir } from '@/components/OnAir';
import { Waveform } from '@/components/Waveform';
import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
  useVoice,
} from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

export type ConversationViewProps = {
  transcriptMessages: Array<UserTranscriptMessage | AgentTranscriptMessage>;
};

export const ConversationView: FC<ConversationViewProps> = ({
  transcriptMessages,
}) => {
  const { lastVoiceMessage } = useVoice();

  return (
    <AnimatePresence>
      <motion.div
        className="h-screen w-screen bg-black"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.1 }}
      >
        <DisconnectButton />
        <OnAir />
        <Waveform message={lastVoiceMessage} />
        <div className="ml-auto mr-40 w-1/2">
          <Messages transcriptMessages={transcriptMessages} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
