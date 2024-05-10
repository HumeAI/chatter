import type { Meta, StoryFn } from '@storybook/react';

import { createMockAgentMessage, createMockUserMessage } from '@/utils/mocks';
import type {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useEffect, useState } from 'react';
import type { MessagesProps } from '.';
import { Messages } from '.';
import { JSONErrorMessage } from '@humeai/voice';

export default {
  component: Messages,
  title: 'Messages',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<MessagesProps> = () => {
  const [messages, setMessages] = useState<
    Array<UserTranscriptMessage | AssistantTranscriptMessage | JSONErrorMessage>
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
    setTimeout(() => {
      setMessages((p) => p.concat(createMockAgentMessage()));
    }, 10000);
    setTimeout(() => {
      setMessages((p) => p.concat(createMockAgentMessage()));
    }, 12000);
    setTimeout(() => {
      setMessages((p) =>
        p.concat([
          {
            type: 'error' as const,
            code: 'I0100',
            slug: 'uncaught',
            message:
              'Unexpected service error occurred. Please visit https://dev.hume.ai/support for assistance.',
            receivedAt: new Date(),
          },
        ]),
      );
    }, 15000);
  }, []);

  return (
    <div className="h-svh w-screen bg-black p-8">
      <Messages
        messages={messages}
        status={{
          value: 'connected',
        }}
        onReconnect={() => {}}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  messages: [],
  status: { value: 'connected' },
  onReconnect: () => {},
} satisfies MessagesProps;
