import type { Meta, StoryFn } from '@storybook/react';

import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useState } from 'react';
import type { BackdropProps } from '.';
import { Backdrop } from '.';

export default {
  component: Backdrop,
  title: 'Backdrop',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<BackdropProps> = () => {
  const [messages, setMessages] = useState<
    Array<UserTranscriptMessage | AgentTranscriptMessage>
  >([]);

  return (
    <div className="bg-tan-400 min-h-screen w-screen p-8">
      <Backdrop />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  transcriptMessages: [],
} satisfies BackdropProps;
