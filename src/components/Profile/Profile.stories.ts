import type { Meta, StoryObj } from '@storybook/vue3';

import Profile from './Profile.vue';
import {profileMockup} from "../../stories/mockup/profile.mockup";

const meta = {
    component: Profile,
    args: {
        profile: profileMockup,
    },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};