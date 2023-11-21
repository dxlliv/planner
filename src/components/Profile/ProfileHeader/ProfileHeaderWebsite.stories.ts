import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderWebsite from './ProfileHeaderWebsite.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderWebsite,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderWebsite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};