import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileAvatar from './ProfileAvatar.vue';
import {profileMockup} from "../../../stories/mockup/profile.mockup";

const meta = {
    component: ProfileAvatar,
    args: {
        avatar: profileMockup.avatar
    },
} satisfies Meta<typeof ProfileAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};