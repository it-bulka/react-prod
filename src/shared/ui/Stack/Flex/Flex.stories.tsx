import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
  title: 'shared/Stack/Flex',
  tags: ['!autodocs'],
  component: Flex,
  argTypes: {
    children: { table: { disable: true }},
    justify: {
      control: 'radio',
      options: ['start', 'center', 'end', 'between']
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end']
    },
    direction: {
      control: 'radio',
      options: ['row', 'column']
    },
    gap: {
      control: 'radio',
      options: ['4', '8', '16', '32']
    },
    max: { control: 'boolean' }
  },
  args: {
    children: (
      <>
        <div style={{ backgroundColor: 'green', width: 'fit-content', height: '20px' }}>1</div>
        <div style={{ backgroundColor: 'red', width: 'fit-content', height: '20px' }}>2</div>
        <div style={{ backgroundColor: 'blue', width: 'fit-content', height: '20px' }}>3</div>
      </>
    )
  }
} satisfies Meta<typeof Flex>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'Flex'
}
