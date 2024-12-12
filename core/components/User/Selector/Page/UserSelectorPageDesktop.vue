<script setup lang="ts">
const homeStore = useHomeStore()

const shield = ref(true)
const actions = ref(false)

function onShieldDisable() {
  shield.value = false
  actions.value = false
}
</script>

<template>
  <div class="dx-index text-center align-content-center">
    <v-row no-gutters>
      <v-col :cols="7" align-self="center">
        <UserSelectorList class="mb-n3" />
      </v-col>
      <v-col :cols="4" :offset="1" class="mt-10 mt-md-0" align-self="center">
        <UserPhone :iframe="!!homeStore.profilePreview">
          <AppIntroduction
            v-if="!homeStore.profilePreview"
          />
          <template v-else>
            <userPhoneSystemBar />

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
                  <p class="mb-5">
                    Choose your planning mode
                  </p>
                  <v-btn
                    class="mb-3" color="primary"
                    :to="`/instagram/${homeStore.profilePreview}`"
                  >
                    Full-screen
                  </v-btn>
                  <v-btn
                    class="mb-3 ml-3"  color="primary"
                    @click="onShieldDisable"
                  >
                    Phone
                  </v-btn>
                </div>
              </div>
            </v-fade-transition>

          </template>
        </UserPhone>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.dx-index {
  display: grid;
  height: 100dvh;
  overflow: hidden;

  .dx-phone {
    right: 8vw;
  }

  :deep(.dx-user-selector-list) {
    max-width: calc(100vw - 48px);
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
    background: rgba(var(--v-theme-background), 0.5);
    backdrop-filter: blur(72px);
    z-index: 1005;

    > div {
      margin-top: -20%;
    }
  }
}
</style>