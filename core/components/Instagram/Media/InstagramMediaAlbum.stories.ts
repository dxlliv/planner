import type { Meta, StoryObj } from "@storybook/vue3"

import MediaAlbum from "./MediaAlbum.vue"
import { mockupMediaAlbum } from "~/stories/mockup/media.mockup"

const meta = {
  component: MediaAlbum,
  args: {
    media: mockupMediaAlbum,
  },
} satisfies Meta<typeof MediaAlbum>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
