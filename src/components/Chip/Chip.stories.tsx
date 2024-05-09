import { Meta, StoryObj } from '@storybook/react';
import Chip from './Chip';
import { FaFaceSmile, FaFaceFrown } from 'react-icons/fa6';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ['smile', 'frown'],
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

const ChipTemplate = (args: any) => {
  let icon: React.ReactNode = null;
  if (args.icon) {
    icon = args.icon === 'smile' ? <FaFaceSmile /> : <FaFaceFrown />;
  }

  const clickHandler = (event: MouseEvent) => {
    console.log('clicked', event);
  };

  return (
    <Chip
      {...args}
      icon={icon}
      onClick={args.clickable ? clickHandler : undefined}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <ChipTemplate
      {...args}
      label={args.label || 'Chip'}
      type={args.type || 'default'}
    />
  ),
};
