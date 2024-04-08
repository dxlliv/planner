<script setup lang="ts">
const plannerConfig = usePlannerConfig()
</script>

<template>
  <DialogContent title="Deluxe Edition">
    <AppBackground />

    <v-row no-gutters class="ma-0 fill-height">
      <v-col align-self="center" class="text-center">
        <p>
          {{$t('instagram.profile.deluxe.freeOptions.enjoy')}} <a :href="plannerConfig.project.links.source">dxlliv/planner</a>!<br />
          {{$t('instagram.profile.deluxe.freeOptions.youCan')}} <router-link class="font-weight-black" to="/">{{$t('instagram.profile.deluxe.freeOptions.tryPlanner')}}</router-link>
          {{$t('instagram.profile.deluxe.freeOptions.or')}} <a class="font-weight-black" :href="plannerConfig.project.links.source">{{$t('instagram.profile.deluxe.freeOptions.hostPlanner')}}</a>.
        </p>
        <v-divider class="my-6" />
        <p v-html="$t('instagram.profile.deluxe.description')" />
        <br />
        <v-btn
          :href="plannerConfig.project.links.deluxe" target="_blank"
          color="primary"
          :text="$t('instagram.profile.deluxe.action')"
        />
      </v-col>
    </v-row>
  </DialogContent>
</template>

<style scoped lang="scss">
a {
  color: inherit;
  text-decoration: none;
}
</style>
