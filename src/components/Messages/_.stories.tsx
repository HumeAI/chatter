import type { Meta, StoryFn } from '@storybook/react';
import { expressionColors } from 'expression-colors';
import { randSentence } from '@ngneat/falso';
import { nanoid } from 'nanoid';

import { Messages } from '.';
import type { MessagesProps } from '.';
import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { createMockUserMessage, createMockAgentMessage } from '@/utils/mocks';
import { useEffect, useState } from 'react';

export default {
  component: Messages,
  title: 'Messages',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<MessagesProps> = () => {
  const [messages, setMessages] = useState<
    Array<UserTranscriptMessage | AgentTranscriptMessage>
  >([]);

  useEffect(() => {
    setTimeout(() => {
      setMessages((p) => p.concat(createMockUserMessage()));
    }, 500);
    setTimeout(() => {
      setMessages((p) => p.concat(createMockAgentMessage()));
    }, 3000);
    setTimeout(() => {
      setMessages((p) => p.concat(createMockAgentMessage()));
    }, 5000);
    setTimeout(() => {
      setMessages((p) => p.concat(createMockUserMessage()));
    }, 7000);
  }, []);
  return (
    <div className="bg-tan-400 h-screen w-screen">
      <Messages transcriptMessages={messages} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  transcriptMessages: [],
} satisfies MessagesProps;
