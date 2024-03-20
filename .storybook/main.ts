import type { StorybookConfig } from '@storybook/nextjs';
import { flow } from 'fp-ts/function';
import { aliasSrcFolder } from './utils/aliasSrcFolder';
// import { glslLoader } from "../src/utils/glslLoader.mjs";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpack: flow(aliasSrcFolder),
};
export default config;
