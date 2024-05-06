import type { Meta, StoryFn } from '@storybook/react';

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
    <div className="flex min-h-svh w-screen items-center justify-center bg-black ">
      <OnAir />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  expression: 'Admiration',
} satisfies OnAirProps;
