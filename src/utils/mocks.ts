import { EVI_PROSODY_EXPRESSIONS } from '@/constants/emotions';
import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { randSentence } from '@ngneat/falso';
import { EmotionScores } from 'hume/api/resources/empathicVoice';
import { nanoid } from 'nanoid';

const createScoresObject = (expressions: readonly (keyof EmotionScores)[]) => {
  const result = {} as Record<keyof EmotionScores, number>;
  expressions.forEach((key) => {
    result[key] = 0;
  });
  return result;
};

const scores = createScoresObject(EVI_PROSODY_EXPRESSIONS);

function createMockProsodyObject() {
  return {
    prosody: {
      scores,
    },
  };
}

export function createMockAgentMessage({
  date,
}: {
  content?: string;
  date?: Date;
} = {}): AssistantTranscriptMessage {
  return {
    fromText: false,
    id: nanoid(),
    type: 'assistant_message',
    message: {
      role: 'assistant',
      content: randSentence(),
    },
    models: createMockProsodyObject(),
    receivedAt: date ?? new Date(),
  };
}

export function createMockUserMessage() {
  return {
    type: 'user_message',
    message: {
      role: 'user',
      content: randSentence(),
    },
    models: createMockProsodyObject(),
    time: { begin: new Date().getTime(), end: new Date().getTime() },
    receivedAt: new Date(),
    fromText: false,
  } satisfies UserTranscriptMessage;
}
