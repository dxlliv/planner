import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderInner from './ProfileHeaderInner.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderInner,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderInner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};