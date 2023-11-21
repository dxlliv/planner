import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderStats from './ProfileHeaderStats.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderStats,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};