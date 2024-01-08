import type { Meta, StoryObj } from "@storybook/vue3"

import UserProfileUsername from "./UserProfileUsername.vue"
import { mockupUser } from "~/stories/mockup/user.mockup"

const meta = {
  component: UserProfileUsername,
  args: {
    profile: mockupUser,
  },
} satisfies Meta<typeof UserProfileUsername>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Verified: Story = {
  args: {
    profile: {
      ...mockupUser,
      verified: true,
    },
  },
}
