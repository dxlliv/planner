import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderInner from './ProfileHeaderInner.vue';
import {profileMockup} from "../../../stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderInner,
    args: {
        profile: profileMockup,
    },
} satisfies Meta<typeof ProfileHeaderInner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};