import type { Meta, StoryObj } from '@storybook/vue3';

import MediaVideo from './MediaVideo.vue';
import {mockupMediaVideo} from "~/stories/mockup/media.mockup";

const meta = {
    component: MediaVideo,
    args: {
        media: mockupMediaVideo,
    },
} satisfies Meta<typeof MediaVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Playable: Story = {
    args: {
        playable: true
    }
};