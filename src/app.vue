<script setup lang="ts">
const route = useRoute()

let platform = ''

if (route.params.platform) {
  platform = capitalizeFirstLetter(route.params.platform)
}

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${platform} Planner` : 'Planner';
  }
})
</script>

<template>
  <v-app>
    <suspense>
      <AppLoader>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </AppLoader>
    </suspense>
  </v-app>
</template>