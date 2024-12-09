<script setup lang="ts">

</script>

<template>
  <div>
    <div class="pa-4">
      <v-row>
        <v-col class="flex-grow-0">

          <slot name="avatar" />

        </v-col>
        <v-col class="flex-grow-1 pl-1" align-self="center">

          <slot name="username" />

        </v-col>
        <v-col class="flex-grow-0">
          <slot />
        </v-col>
      </v-row>
    </div>
    <v-divider class="ma-0" />
  </div>
</template>

<style scoped lang="scss">
:deep(.v-btn) {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>