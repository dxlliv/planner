import type { Meta, StoryObj } from '@storybook/vue3';

import UserProfileStats from './UserProfileStats.vue';
import {mockupUser} from "~/stories/mockup/user.mockup";

const meta = {
    component: UserProfileStats,
    args: {
        profile: mockupUser,
    },
} satisfies Meta<typeof UserProfileStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};