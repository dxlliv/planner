<script setup lang="ts">
defineProps<{
  user: any
}>()
</script>

<template>
  <DialogContent :title="$t('instagram.profile.export.title')">
    <v-row class="ma-0 fill-height">
      <v-col align-self="center" class="text-center">

        <div class="pb-4">
          <p v-html="$t('instagram.profile.export.description')" />

          <v-text-field variant="outlined" class="mt-5">
            /public/user/{{user.platform}}/{{user.id}}
          </v-text-field>
        </div>

        <v-btn
          class="mx-1"
          :text="$t('common.actions.reset')"
          @click="user.reset()"
        />
        <v-btn
          color="primary" class="mx-1"
          :text="$t('instagram.profile.export.action')"
          @click="user.storage.exportAsZip()"
        />

      </v-col>
    </v-row>
  </DialogContent>
</template>

<style scoped lang="scss">
.v-input {
  margin: 0 auto;
  width: 360px;

  :deep(.v-field__input) {
    display: block;
    text-align: center;

    input {
      display: none;
    }
  }
}
</style>
