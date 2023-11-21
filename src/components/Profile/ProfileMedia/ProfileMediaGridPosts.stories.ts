import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileMediaGridPosts from './ProfileMediaGridPosts.vue';
import {profileMockup} from "../../../stories/mockup/profile.mockup";

const meta = {
    component: ProfileMediaGridPosts,
    args: {
        posts: profileMockup.media.posts,
    },
} satisfies Meta<typeof ProfileMediaGridPosts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};