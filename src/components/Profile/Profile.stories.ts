import type { Meta, StoryObj } from '@storybook/vue3';

import Profile from './Profile.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: Profile,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};