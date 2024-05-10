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
  render: (args) => (
    <div style={{ width: '480px', height: '6rem' }}>
      <TextArea
        {...args}
        inputLabel={args.inputLabel || 'Your text here...'}
      ></TextArea>
    </div>
  ),
};
