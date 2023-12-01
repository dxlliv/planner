import type { Meta, StoryObj } from '@storybook/vue3';

import UserProfileMobile from './UserProfileMobile.vue';
import {mockupUser} from "~/stories/mockup/user.mockup";

const meta = {
    component: UserProfileMobile,
    args: {
        profile: mockupUser,
    },
} satisfies Meta<typeof UserProfileMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};