<script setup lang="ts">
</script>

<template>
  <div class="app-post-comment-list overflow-y-auto scrollbar-invisible">
    <slot>
      <v-row no-gutters class="text-center fill-height">
        <v-col align-self="center" v-text="$t('profile.post.comment.empty')" />
      </v-row>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.app-post-comment-list {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
