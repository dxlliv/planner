import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileHeaderMobile from './ProfileHeaderMobile.vue';
import {profileMockup} from "../../../stories/mockup/profile.mockup";

const meta = {
    component: ProfileHeaderMobile,
    args: {
        profile: profileMockup,
    },
} satisfies Meta<typeof ProfileHeaderMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};