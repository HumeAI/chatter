import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { randSentence } from '@ngneat/falso';
import { expressionColors } from 'expression-colors';
import { nanoid } from 'nanoid';

function createMockProsodyObject() {
  return {
    prosody: {
      scores: Object.keys(expressionColors)
        .map((name) => ({
          name,
          score: Math.random(),
        }))
        .reduce<Record<string, number>>((acc, score) => {
          acc[score.name] = score.score;
          return acc;
        }, {}),
    },
  };
}

export function createMockAgentMessage({
  date,
}: {
  content?: string;
  date?: Date;
} = {}): AgentTranscriptMessage {
  return {
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
    receivedAt: new Date(),
  } satisfies UserTranscriptMessage;
}
