import type { Meta, StoryObj } from '@storybook/vue3';

import MediaImage from './MediaImage.vue';
import {mockupMediaImage} from "~/stories/mockup/media.mockup";

const meta = {
    component: MediaImage,
    args: {
        media: mockupMediaImage,
    },
} satisfies Meta<typeof MediaImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};