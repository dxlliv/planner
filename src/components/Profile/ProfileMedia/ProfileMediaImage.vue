<template>
  <ProfileMediaContainer class="ig-profile-media--image">
    <v-img :src="media.file.path" />
  </ProfileMediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  media: IProfileMediaImage;
}>();
</script>
