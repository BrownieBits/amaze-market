import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBarItem, { ISideBarItem } from './SideBarItem';
import { mockSideBarItemProps } from './SideBarItem.mocks';

export default {
  title: 'templates/SideBarItem',
  component: SideBarItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideBarItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideBarItem> = (args) => (
  <SideBarItem {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideBarItemProps.base,
} as ISideBarItem;
