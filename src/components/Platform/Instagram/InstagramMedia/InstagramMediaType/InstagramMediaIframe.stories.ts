import type { Meta, StoryObj } from '@storybook/vue3';

import MediaIframe from './MediaIframe.vue';
import {mockupMediaIframe} from "~/stories/mockup/media.mockup";

const meta = {
    component: MediaIframe,
    args: {
        media: mockupMediaIframe,
    },
} satisfies Meta<typeof MediaIframe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};