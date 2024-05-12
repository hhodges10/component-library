import type { Meta, StoryObj } from '@storybook/react';
import Radio, { RadioProps } from './Radio';
import React from 'react';
import styled from 'styled-components';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    checked: {
      control: false,
    },
    value: {
      control: false,
    },
    label: {
      control: false,
    },
    disabled: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const WrapperTemplate = (args: RadioProps) => {
  const [selectedVal, setSelectedVal] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVal(event.target.value);
  };

  return (
    <Wrapper>
      <Radio
        {...args}
        label="Radio button 1"
        value="Radio 1"
        checked={selectedVal === 'Radio 1'}
        onChange={handleChange}
      ></Radio>
      <Radio
        {...args}
        label="Radio button 2"
        value="Radio 2"
        checked={selectedVal === 'Radio 2'}
        onChange={handleChange}
      ></Radio>
    </Wrapper>
  );
};

export const Default: Story = {
  render: (args) => <WrapperTemplate {...args}></WrapperTemplate>,
};

export const Disabled: Story = {
  render: (args) => <WrapperTemplate {...args} disabled></WrapperTemplate>,
};
