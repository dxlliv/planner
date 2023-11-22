import type { Meta, StoryObj } from '@storybook/vue3';

import ProfileMediaGridPosts from './ProfileMediaGridPosts.vue';
import {mockupProfile} from "~/stories/mockup/profile.mockup";

const meta = {
    component: ProfileMediaGridPosts,
    args: {
        posts: mockupProfile.media.posts,
    },
} satisfies Meta<typeof ProfileMediaGridPosts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};