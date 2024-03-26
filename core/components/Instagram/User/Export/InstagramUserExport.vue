<script setup lang="ts">
defineProps<{
  user: any
}>()
</script>

<template>
  <DialogContent>
    <v-row class="ma-0 fill-height">
      <v-col align-self="center" class="text-center">

        <div class="pb-8">
          <p>
            You could export your changes as a ZIP,<br />
            then overwrite your profile configuration in<br />
            <code>/public/user/{{user.platform}}/{user}</code>
          </p>
        </div>

        <v-btn
          class="mx-1"
          :text="$t('common.actions.reset')"
          @click="user.reset()"
        />
        <v-btn
          color="primary" class="mx-1"
          :text="$t('instagram.profile.export.asZip')"
          @click="user.storage.exportAsZip()"
        />

      </v-col>
    </v-row>
  </DialogContent>
</template>

<style scoped lang="scss"></style>
