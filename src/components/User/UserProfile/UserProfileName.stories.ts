import type { Meta, StoryObj } from '@storybook/vue3';

import UserProfileName from './UserProfileName.vue';
import {mockupUser} from "~/stories/mockup/user.mockup";

const meta = {
    component: UserProfileName,
    args: {
        profile: mockupUser,
    },
} satisfies Meta<typeof UserProfileName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};