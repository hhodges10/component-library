import type { Meta, StoryObj } from '@storybook/react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import Link, { LinkProps } from './Link';
import React from 'react';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      name: 'Link Text',
      type: 'string',
    },
    icon: {
      options: ['left-arrow', 'right-arrow'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

const LinkTemplate = (args: LinkProps) => {
  let icon: React.ReactNode = null;
  if (args.icon) {
    icon = args.icon === 'right-arrow' ? <FaChevronRight /> : <FaChevronLeft />;
  }
  return (
    <Link {...args} icon={icon}>
      {args.children}
    </Link>
  );
};

export const PrimaryLink: Story = {
  render: (args) => (
    <LinkTemplate {...args} href={args.href || '/'}>
      {args.children || 'this is a link'}
    </LinkTemplate>
  ),
};
