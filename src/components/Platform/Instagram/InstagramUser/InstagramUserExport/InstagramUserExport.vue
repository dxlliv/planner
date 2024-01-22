<script setup lang="ts">
defineProps<{
  user: any
}>()
</script>

<template>
  <DialogContent title="Profile export">
    <v-row class="ma-0 fill-height">
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

        <v-btn
          color="primary"
          :text="$t('instagram.profile.export.asZip')"
          @click="user.storage.exportAsZip()"
        />
      </v-col>
    </v-row>
  </DialogContent>
</template>

<style scoped lang="scss"></style>
