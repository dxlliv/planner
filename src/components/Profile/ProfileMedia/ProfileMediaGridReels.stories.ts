import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileMediaGridReels from './ProfileMediaGridReels.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileMediaGridReels,
    args: {
        reels: mockupProfile.media.reels,
    },
} satisfies Meta<typeof ProfileMediaGridReels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};