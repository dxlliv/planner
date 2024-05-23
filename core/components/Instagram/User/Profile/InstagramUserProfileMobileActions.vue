<script setup lang="ts">

</script>

<template>
  <div class="ig-profile-page__mobile-actions">
    <v-row no-gutters>
      <v-col class="flex-grow-1">

        <v-row no-gutters>
          <v-col>
            <v-btn
              block size="small" :height="32"
            >
              {{$t('instagram.profile.header.nowFollowing')}}
              <v-icon icon="mdi-chevron-down" />
            </v-btn>
          </v-col>
          <v-col class="pl-2">
            <v-btn
              block size="small" :height="32"
              :text="$t('instagram.profile.header.message')"
            />
          </v-col>
        </v-row>

      </v-col>
      <v-col class="flex-grow-0 pl-2">
        <v-btn block icon size="small" :height="32">
          <v-icon icon="mdi-account-plus" size="18px" />
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;

  @media(min-width: 960px) {
    border-bottom: var(--plx-border);
  }

  .ig-profile__header__username {
    display: inline;
    font-weight: 800;
    font-size: 20px;
  }

  &__biography {
    word-wrap: break-word;
  }
}
</style>
