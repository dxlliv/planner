<script setup lang="ts">

</script>

<template>
  <v-system-bar
    style="height: 5dvh;" color="background"
    class="px-5 text-black" absolute
  >
    <v-row no-gutters>
      <v-col class="text-left" align-self="center">
        <AppDateTime />
      </v-col>
      <v-col align-self="center">
        <v-icon icon="mdi-wifi" size="1.8vh" color="black" />
        <v-icon icon="mdi-signal" size="1.9vh" style="top: 1px;" class="ml-1" />
      </v-col>
    </v-row>
  </v-system-bar>
</template>

<style scoped lang="scss">
:deep(.dx-app-bar__date-time) {
  position: relative;
  top: 0.08vh;
  font-size: 1.6vh !important;
}

.mdi {
  color: black;
  opacity: 1;
  margin-top: 1px;
}
</style>