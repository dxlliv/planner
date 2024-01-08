import type { Meta, StoryObj } from "@storybook/vue3"

import UserProfileInner from "./UserProfileInner.vue"
import { mockupUser } from "~/stories/mockup/user.mockup"

const meta = {
  component: UserProfileInner,
  args: {
    profile: mockupUser,
  },
} satisfies Meta<typeof UserProfileInner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
