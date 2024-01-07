<script setup lang="ts">
const emit = defineEmits(['close'])

defineProps<{
  user: any;
}>();
</script>

<template>
  <v-dialog
      content-class="ig-user-export"
      :max-width="700"
      @close="emit('close')"
  >
    <v-card height="70vh">
      <v-card-title v-text="`Profile export`" />

      <v-row class="ma-0">
        <v-col align-self="center" class="text-center">
          <p>
            Changes have been made to the profile<br />
            and are now stored in your browser.
          </p>
          <p class="mt-2">
            You could export your changes as a ZIP<br />
            and overwrite your profile configuration in<br />
            <code>/public/user/instagram/{user}</code>
          </p>
          <br />

          <v-btn
            color="primary"
            @click="user.storage.exportAsZip()"
          >
            Export as ZIP
          </v-btn>
        </v-col>
      </v-row>

    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>