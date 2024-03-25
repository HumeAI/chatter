import { Messages } from '@/components/Messages';
import { OnAir } from '@/components/OnAir';
import { Waveform } from '@/components/Waveform';
import type {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useVoice } from '@humeai/voice-react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { DoorOpen } from 'lucide-react';

export type ConversationViewProps = {
  transcriptMessages: Array<UserTranscriptMessage | AgentTranscriptMessage>;
  onDisconnect: () => void;
};

export const ConversationView: FC<ConversationViewProps> = ({
  transcriptMessages,
  onDisconnect,
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
        <div className="flex w-full justify-end">
          <button
            className="p-4 text-white opacity-50 flex gap-1"
            onClick={onDisconnect}
          >
            <DoorOpen strokeWidth={1} />
            <span>Disconnect</span>
          </button>
        </div>

        <OnAir />
        <Waveform message={lastVoiceMessage} />
        <div className="ml-auto mr-40 w-1/2">
          <Messages transcriptMessages={transcriptMessages} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
