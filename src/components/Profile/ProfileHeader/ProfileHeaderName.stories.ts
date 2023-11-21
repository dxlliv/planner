import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderName from './ProfileHeaderName.vue';
import {profileMockup} from "../../../stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderName,
    args: {
        profile: profileMockup,
    },
} satisfies Meta<typeof ProfileHeaderName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};