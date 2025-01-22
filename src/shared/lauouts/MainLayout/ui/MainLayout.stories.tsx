import type { Meta, StoryObj } from '@storybook/react'

import { NavBar } from '@/widgets/NavBar/testing'
import { SideBar } from '@/widgets/SideBar/testing'

import { MainLayout } from './MainLayout'

const meta = {
  title: 'shared/layouts/MainLayout',
  component: MainLayout,
  tags: ['autodocs'],
  args: {
    header: <NavBar />,
    content: <div>content</div>,
    sidebar: <SideBar />
  }
} satisfies Meta<typeof MainLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {}
