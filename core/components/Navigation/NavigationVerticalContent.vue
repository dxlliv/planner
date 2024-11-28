<script setup lang="ts">
defineProps<{
  user: IUser
}>()

const plannerConfig = usePlannerConfig()

const emit = defineEmits(["create"])
</script>

<template>
  <NavigationItemList
    :title="$t('instagram.navigation.home')"
    to="/"
  >
    <template #icon>
      <InstagramIconHome />
    </template>
  </NavigationItemList>

  <NavigationItemList
    :title="$t('instagram.navigation.source')"
    :href="plannerConfig.project.links.source" target="_blank"
  >
    <template #icon>
      <InstagramIconMagnify />
    </template>
  </NavigationItemList>

  <NavigationItemList
    :title="$t('instagram.navigation.explore')"
    :href="plannerConfig.project.links.docs" target="_blank"
  >
    <template #icon>
      <InstagramIconExplore />
    </template>
  </NavigationItemList>

  <NavigationItemList
    :title="$t('instagram.navigation.support')"
    :href="plannerConfig.project.links.support" target="_blank"
  >
    <template #icon>
      <InstagramIconHeart />
    </template>

    <AppSupportDialog />
  </NavigationItemList>

  <NavigationItemList
    :title="$t('instagram.navigation.create')"
    @click="emit('create')"
  >
    <template #icon>
      <InstagramIconNewPost />
    </template>
  </NavigationItemList>

  <NavigationItemList
    :title="$t('instagram.navigation.profile')"
    :to="user.route"
  >
    <template #icon>
      <suspense>
        <InstagramUserAvatar
          :avatar="user.profile.avatar"
          :size="36"
        />
      </suspense>
    </template>
  </NavigationItemList>
</template>