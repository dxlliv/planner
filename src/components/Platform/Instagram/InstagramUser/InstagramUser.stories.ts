import type { Meta, StoryObj } from "@storybook/vue3"

import Profile from "./Profile.vue"
import { mockupUser } from "~/stories/mockup/user.mockup"

const meta = {
  component: Profile,
  args: {
    profile: mockupUser,
  },
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
