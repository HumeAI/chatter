import type { Meta, StoryFn } from '@storybook/react';

import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useState } from 'react';
import type { ExpressionBlobProps } from '.';
import { ExpressionBlob } from '.';

export default {
  component: ExpressionBlob,
  title: 'ExpressionBlob',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<ExpressionBlobProps> = () => {
  const [messages, setMessages] = useState<
    Array<UserTranscriptMessage | AgentTranscriptMessage>
  >([]);

  return (
    <div className="bg-tan-400 min-h-screen w-screen p-8">
      <ExpressionBlob expression="Admiration" />
      <ExpressionBlob expression="Anger" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  expression: 'Admiration',
} satisfies ExpressionBlobProps;
