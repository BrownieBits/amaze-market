import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthLayout, { IAuthLayout } from './AuthLayout';
import { mockLayoutProps } from './AuthLayout.mocks';

export default {
  title: 'templates/Layout',
  component: AuthLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthLayout> = (args) => (
  <AuthLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLayoutProps.base,
} as IAuthLayout;
