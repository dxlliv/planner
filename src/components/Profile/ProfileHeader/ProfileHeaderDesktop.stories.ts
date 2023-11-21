import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderDesktop from './ProfileHeaderDesktop.vue';
import {profileMockup} from "../../../stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderDesktop,
    args: {
        profile: profileMockup,
    },
} satisfies Meta<typeof ProfileHeaderDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};