import type { Meta, StoryFn } from '@storybook/react';

import { createMockAgentMessage, createMockUserMessage } from '@/utils/mocks';
import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useEffect, useState } from 'react';
import type { MessagesProps } from '.';
import { Messages } from '.';

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
    <div className="min-h-screen w-screen bg-black p-8">
      <Messages transcriptMessages={messages} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  transcriptMessages: [],
} satisfies MessagesProps;
