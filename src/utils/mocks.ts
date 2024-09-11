import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { randSentence } from '@ngneat/falso';
import { EmotionScores } from 'hume/api/resources/empathicVoice';
import { nanoid } from 'nanoid';
import { expressionColors } from './expressionColors';

const createScoresObject = (expressions: string[]) => {
  const result = {} as Record<keyof EmotionScores, number>;
  expressions.forEach((key) => {
    if (key in expressionColors) {
      result[key as keyof EmotionScores] = 0;
    }
  });
  return result;
};

const scores = createScoresObject(Object.keys(expressionColors));

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
