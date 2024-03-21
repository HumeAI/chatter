import type { Meta, StoryFn } from '@storybook/react';

import type { ExpressionBlobProps } from '.';
import { ExpressionBlob } from '.';

export default {
  component: ExpressionBlob,
  title: 'ExpressionBlob',
  args: {},
  argTypes: {},
} satisfies Meta;

const Template: StoryFn<ExpressionBlobProps> = () => {
  return (
    <div className="min-h-screen w-screen bg-tan-400 p-8">
      <ExpressionBlob expression="Admiration" />
      <ExpressionBlob expression="Anger" />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  expression: 'Admiration',
} satisfies ExpressionBlobProps;
