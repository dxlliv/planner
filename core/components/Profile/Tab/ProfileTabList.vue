<script setup lang="ts">
const emit = defineEmits(["select"])

defineProps<{
  tabs: any[]
  active: string
}>()
</script>

<template>
  <div class="dx-profile-tab-list">
    <template v-for="(tab, i) of tabs" :key="i">
      <ProfileTab
        :tab="tab"
        :active="active === tab.name"
        @click="emit('select', tab)"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.dx-profile-tab-list {
  display: block;
  text-align: center;
  padding: 0;
  margin-bottom: 2px;

  @media(min-width: 960px) {
    border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }
}
</style>
