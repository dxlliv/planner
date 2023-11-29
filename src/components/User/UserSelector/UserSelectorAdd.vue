<template>
  <UserSelector add @click="onProfileAdd">
    <suspense>
      <UserAvatar>
        <template #inner>
          <v-icon size="48px" icon="mdi-plus" color="grey-lighten-1" />
        </template>

        <UserSelectorAddMenu @toggle="onMenuToggle" />

        <h3 class="mt-4" v-text="randomUsername.value" />
      </UserAvatar>
    </suspense>
  </UserSelector>
</template>

<script setup lang="ts">
const randomUsername: any = reactive({
  value: '',
  generatorInterval: 0
})

function onMenuToggle(opened: boolean) {
  if (opened) {
    startRandomUsernameGenerator()
  } else {
    stopRandomUsernameGenerator()
  }
}

function startRandomUsernameGenerator() {
  randomUsername.generatorInterval = setInterval(() => {
    randomUsername.value = generateUuidv4().substring(0, 6)
  }, 75)
}

function stopRandomUsernameGenerator() {
  clearInterval(randomUsername.generatorInterval)
  randomUsername.value = ''
}

async function onProfileAdd() {
  //profileManagerStore.importProfile()


  //configUserStore.setUserConfig(config)
}
</script>

<style scoped lang="scss">
h3 {
  opacity: 0.1;
}
</style>
