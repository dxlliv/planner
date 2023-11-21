import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderName from './ProfileHeaderName.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderName,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};