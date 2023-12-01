import type { Meta, StoryObj } from '@storybook/vue3';

import UserProfileWebsite from './UserProfileWebsite.vue';
import {mockupUser} from "~/stories/mockup/user.mockup";

const meta = {
    component: UserProfileWebsite,
    args: {
        profile: mockupUser,
    },
} satisfies Meta<typeof UserProfileWebsite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};