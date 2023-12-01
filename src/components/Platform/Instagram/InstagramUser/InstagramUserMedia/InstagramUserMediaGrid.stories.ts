import type { Meta, StoryObj } from '@storybook/vue3';

import UserMediaGridPosts from './UserMediaGridPosts.vue';
import {mockupUser} from "~/stories/mockup/user.mockup";

const meta = {
    component: UserMediaGridPosts,
    args: {
        posts: mockupUser.media.posts,
    },
} satisfies Meta<typeof UserMediaGridPosts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};