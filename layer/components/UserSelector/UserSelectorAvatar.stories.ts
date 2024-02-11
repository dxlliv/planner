import type { Meta, StoryObj } from "@storybook/vue3"

import UserAvatar from "./UserAvatar.vue"
import { mockupUser } from "~/stories/mockup/user.mockup"

const meta = {
  component: UserAvatar,
  args: {
    avatar: mockupUser.avatar,
  },
} satisfies Meta<typeof UserAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
