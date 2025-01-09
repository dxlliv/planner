<script setup lang="ts">
const plannerConfig = usePlannerConfig()
const homeStore = useHomeStore()

const phoneElement = useTemplateRef("phone")
const shield = ref(true)
const actions = ref(false)

onClickOutside(phoneElement, (event) => {
  shield.value = true
  actions.value = false
})

function onShieldDisable() {
  shield.value = false
  actions.value = false
}
</script>

<template>
  <v-card border flat :aspect-ratio="16/9" class="dx-index">

    <UserSelectorList
      style="height: 76%;"
    />

    <div
      style="height: 24%"
    >
      <AppLogo title="Planner" />
    </div>

    <AppIntroDecoration />

  </v-card>
  <!--
  <v-container :max-width="1800" class="pa-0">
    <div class="dx-index text-center align-content-center">
      <div class="dx-index__corner" />
      <v-row no-gutters>
        <v-col :cols="6" :lg="5" :offset-lg="1" align-self="center">
          <UserSelectorList class="mb-n3" />
        </v-col>
        <v-col :cols="6" :lg="5" :offset-lg="1" class="mt-10 mt-md-0" align-self="center">
          <UserPhone ref="phone" :iframe="!!homeStore.profilePreview">
            <AppIntroduction v-if="!homeStore.profilePreview" />
            <template v-else>
              <UserPhoneSystemBar />

              <iframe
                :src="`/planner/instagram/${homeStore.profilePreview}/#iframe`"
              />
              <div
                v-if="shield"
                class="dx-iframe__shield"
                @click="actions = true"
              />
              <v-fade-transition>
                <div v-if="actions" class="dx-iframe__actions">
                  <div>
                    <p class="text-subtitle-1 mb-6">
                      Choose your favorite<br />
                      planning mode:
                    </p>
                    <v-btn
                      class="mb-3" size="large"
                      :to="`/instagram/${homeStore.profilePreview}`"
                    >
                      Default
                    </v-btn>
                    <br />
                    <v-btn
                      class="mb-3" size="large"
                      :href="plannerConfig.project.links.docs" target="_blank"
                    >
                      Text Editor
                    </v-btn>
                    <br />
                    <v-btn
                      class="mb-3" size="large"
                      @click="onShieldDisable"
                    >
                      In-Phone
                    </v-btn>
                  </div>
                </div>
              </v-fade-transition>
            </template>
          </UserPhone>
        </v-col>
      </v-row>
    </div>
  </v-container>
  -->
</template>

<style scoped lang="scss">
.dx-index {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  aspect-ratio: 16/9;

  :deep(.dx-logo) {
    position: absolute;
    left: 5.5%;
    bottom: 5.5%;
  }

  &__corner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30vw;
    height: 20vh;
    background-image: url('/v-corner.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.dx-iframe {
  &-container {
    display: block;

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      cursor: pointer;
    }
  }

  &__shield {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    content: "";
  }

  &__actions {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    color: black;
    display: grid;
    align-content: center;
    background: rgb(var(--v-theme-background));
    z-index: 1005;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/user/instagram/dxlliv/media/post-6x1.jpg');
      background-size: cover;
      filter: grayscale(0.5) contrast(1.5);
      opacity: 0.2;
      content: '';
    }

    > div {
      margin-top: -20%;
    }
  }
}
</style>
