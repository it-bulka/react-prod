module.exports = (layer, componentName) => {
  return `import type { Meta, StoryObj } from '@storybook/react'
import { ${componentName} } from './${componentName}'

const meta = {
  title: '${layer}/${componentName}',
  tags: ['!autodocs'],
  component: ${componentName}
} satisfies Meta<typeof ${componentName}>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  name: '${componentName}'
}
`
}