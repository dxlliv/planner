import type { Meta, StoryObj } from "@storybook/vue3"

import UserProfileDesktop from "./UserProfileDesktop.vue"
import { mockupUser } from "~/stories/mockup/user.mockup"

const meta = {
  component: UserProfileDesktop,
  args: {
    profile: mockupUser,
  },
} satisfies Meta<typeof UserProfileDesktop>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
