<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <ProfileHeaderLayoutMobile>
    <template v-slot:back-button>
      <router-link to="/" class="hidden-xs">
        <v-icon
          v-if="$vuetify.display.smAndDown"
          icon="mdi-arrow-left"
          class="mr-2 mt-1"
          style="vertical-align: -2px;"
        />
      </router-link>
    </template>

    <template v-slot:username>
      <InstagramUserProfileUsername
        editable
        :user="user"
        size="large"
      />
      <v-icon icon="mdi-chevron-down" class="mt-n1" :size="21" />
    </template>

    <template v-slot:actions-top>
      <v-btn
        v-if="user.hasUnsavedChanges"
        class="mx-n2"
        flat icon variant="text"
        color="primary"
        @click="user.save()"
      >
        <IconSave :size="24" />
      </v-btn>

      <v-btn flat icon variant="text">
        <v-icon icon="mdi-menu" :size="27" />
        <InstagramUserMenu :user="user" />
      </v-btn>
    </template>

    <template v-slot:avatar>
      <InstagramUserProfileAvatarEditor :size="72" :user="user" />
    </template>

    <template v-slot:stats>
      <InstagramUserProfileStats mobile :user="user" />
    </template>

    <template v-slot:description>
      <InstagramUserProfileInner :user="user" />
    </template>

    <template v-slot:actions>
      <InstagramUserProfileMobileActions :user="user" />
    </template>
  </ProfileHeaderLayoutMobile>
</template>

<style scoped lang="scss">

</style>
