import type { Meta, StoryFn } from '@storybook/react';

import {
  AgentTranscriptMessage,
  UserTranscriptMessage,
} from '@humeai/voice-react';
import { useState } from 'react';
import type { OnAirProps } from '.';
import { OnAir } from '.';

export default {
  component: OnAir,
  title: 'OnAir',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<OnAirProps> = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-black ">
      <OnAir expression="Admiration" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  expression: 'Admiration',
} satisfies ExpressionBlobProps;
