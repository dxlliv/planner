<script setup lang="ts">
defineProps<{
  user: any
}>()
</script>

<template>
  <v-card height="60vh">
    <v-card-title v-text="`Profile export`" />

    <v-row class="ma-0">
      <v-col align-self="center" class="text-center">
        <p>
          Changes have been made to the profile<br />
          and are now stored in your browser.
        </p>
        <p class="mt-4">
          You could export your changes as a ZIP<br />
          and overwrite your profile configuration in<br />
          <code>/public/user/instagram/{user}</code>
        </p>
        <br />

        <v-btn color="primary" @click="user.storage.exportAsZip()">
          Export as ZIP
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss"></style>
