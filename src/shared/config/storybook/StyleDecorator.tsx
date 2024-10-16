import 'app/styles/index.scss'
import { Decorator } from '@storybook/react'

export const StyleDecorator: Decorator = Story => (
  <div style={{ border: '2px solid red' }}>
    <Story />
  </div>
)
