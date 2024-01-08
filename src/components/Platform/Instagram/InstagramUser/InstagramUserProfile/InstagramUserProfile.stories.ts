import type { Meta, StoryObj } from "@storybook/vue3"

import UserProfile from "./UserProfile.vue"
import { mockupUser } from "~/stories/mockup/user.mockup"

const meta = {
  component: UserProfile,
  args: {
    profile: mockupUser,
  },
} satisfies Meta<typeof UserProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
