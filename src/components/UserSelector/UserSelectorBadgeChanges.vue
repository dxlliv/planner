<script setup lang="ts"></script>

<template>
  <v-badge color="primary">
    <v-tooltip
      content-class="text-overline"
      activator="parent"
      :offset="[16, 3]"
    >
      {{$t('common.hasChanges')}}
    </v-tooltip>
  </v-badge>
</template>

<style scoped lang="scss"></style>
