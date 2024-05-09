import { StoryObj, Meta } from '@storybook/react';

import TextArea from './TextArea';

const meta: Meta = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => <TextArea name="Test"></TextArea>,
};
