import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeader from './ProfileHeader.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeader,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};