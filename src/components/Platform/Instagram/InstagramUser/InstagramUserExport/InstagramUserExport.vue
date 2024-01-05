<script setup lang="ts">
const emit = defineEmits(['close'])
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
            Some changes have been made to the profile<br />
            and have now been stored in your browser.
          </p>
          <MainSupport />
        </v-col>
      </v-row>

    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>