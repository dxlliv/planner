<script setup lang="ts">
defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="ig-profile-page__header px-2 px-sm-0">
    <div class="ig-profile-page__header__top py-2">
      <v-row>
        <v-col class="flex-grow-1" align-self="center">

          <router-link to="/" class="hidden-xs">
            <v-icon
              v-if="$vuetify.display.smAndDown"
              icon="mdi-arrow-left" class="ml-3 mr-2"
              style="vertical-align: 0"
            />
          </router-link>

          <InstagramUserProfileUsername
              editable
              :user="user"
              size="large"
              class="mb-5"
          />

          <v-icon icon="mdi-chevron-down" class="mt-n1" :size="21" />

        </v-col>
        <v-col class="flex-grow-0 px-1 text-right" align-self="center" style="min-width: 120px;">

          <v-btn
              v-if="user.hasUnsavedChanges" class="mx-n2"
              flat icon variant="plain" color="primary"
              @click="user.save()"
          >
            <IconSave :size="24" />
          </v-btn>

          <v-btn flat icon variant="plain">

            <v-icon icon="mdi-menu" :size="27" />

            <InstagramUserMenu
              :user="user"
            />

          </v-btn>

        </v-col>
      </v-row>
    </div>

    <div class="mb-5 pa-sm-2">
      <v-row>
        <v-col cols="3" class="ig-profile-page__header__avatar text-left">
          <InstagramUserProfileAvatarEditor :size="72" :user="user" />
        </v-col>
        <v-col cols="9" align-self="center">
          <InstagramUserProfileStats mobile :user="user" />
        </v-col>
      </v-row>
    </div>

    <div class="mt-4 mb-2 mt-n6 pa-sm-2">
      <InstagramUserProfileInner
        :user="user"
      />
    </div>

    <InstagramUserProfileMobileActions
      :user="user" class="mb-5"
    />
  </div>
</template>

<style scoped lang="scss">
.ig-profile-page__header {
  text-align: left;

  @media(min-width: 960px) {
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .ig-profile__header__username {
    display: inline;
    vertical-align: 1px;
  }

  &__biography {
    word-wrap: break-word;
  }
}
</style>
