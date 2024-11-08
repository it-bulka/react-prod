import type { Meta, StoryObj } from '@storybook/react'
import { HStack } from './HStack'

const meta = {
  title: 'shared/Stack/HStack',
  tags: ['!autodocs'],
  component: HStack,
  argTypes: {
    children: { table: { disable: true }}
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
} satisfies Meta<typeof HStack>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: 'HStack'
}
