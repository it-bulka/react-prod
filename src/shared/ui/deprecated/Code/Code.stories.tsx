import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'

const code = '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
const meta = {
  title: 'shared/Code',
  args: {
    text: code
  },
  component: Code
} satisfies Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {}
