<script setup lang="ts">
defineProps<{
  media: IMedia;
  profile: IUserProfile;
}>()
</script>

<template>
  <v-sheet class="ig-user-comment fill-height">
    <div class="px-4 py-3">
      <v-row>
        <v-col class="flex-grow-0">
          <InstagramUserAvatar
            :avatar="profile.avatar"
            :size="32"
          />
        </v-col>
        <v-col class="flex-grow-1 pl-1" align-self="center">

          <InstagramUserProfileUsername
            size="medium" class="d-inline mr-1"
            :profile="profile"
          />

          <p v-text="media.caption" />

        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">
p {
  display: inline;
  font-size: 14px;
}

.ig-user-comment {
  line-height: 18px !important;
}
</style>