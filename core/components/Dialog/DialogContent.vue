<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  height?: string
}>(), {
  height: '60vh'
})

const emit = defineEmits(['back'])
</script>

<template>
  <v-card :height="height">
    <v-card-title :class="['py-4', {'text-left': $vuetify.display.smAndDown}]">
      <v-icon
        v-if="$vuetify.display.smAndDown"
        icon="mdi-arrow-left" class="mr-2"
        style="vertical-align: -4px"
        @click="emit('back')"
      />
      {{title}}
    </v-card-title>
    <v-divider v-if="$vuetify.display.mdAndUp" />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>