import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderMobile from './ProfileHeaderMobile.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderMobile,
    args: {
        profile: mockupProfile,
    },
} satisfies Meta<typeof ProfileHeaderMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};