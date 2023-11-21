import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderDesktop from './ProfileHeaderDesktop.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderDesktop,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};