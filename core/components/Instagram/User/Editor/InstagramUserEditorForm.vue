<script setup lang="ts">
const props = defineProps<{
  user?: IUser
  autosave?: boolean
}>()

const emit = defineEmits(["close"])

const userEditorStore = useUserEditorStore()

userEditorStore.generateFields("instagram", props.user)

const $v = userEditorStore.$v

function onAvatarUpdate(avatar: File) {
  userEditorStore.fields.avatar = avatar
}

async function onFormSend(e?: Event) {
  if (e) {
    e.preventDefault()
  }

  if (await $v.value.$validate()) {
    if (!props.user) {
      await userEditorStore.create()
    } else {
      await userEditorStore.update(props.user)
    }

    if (!props.autosave) {
      emit("close")
    }
  }
}

onMounted(() => {
  document.querySelector('.dx-user-editor-form [name="username"]')?.focus()
})

watch(() => userEditorStore.fields, value => {
  if (props.autosave) {
    onFormSend()
  }
}, {deep: true})
</script>

<template>
  <form class="dx-user-editor-form py-7 py-md-12 px-md-12" @submit="onFormSend">
    <v-row>
      <v-col :cols="12" :md="4" class="text-center pt-0 pb-6 pb-sm-12">
        <UserEditorFieldAvatar :user="user" @update="onAvatarUpdate" />
      </v-col>
      <v-col :cols="12" :md="8">
        <v-row>
          <v-col>
            <UserEditorFieldString
              v-model="userEditorStore.fields.username"
              :data="userEditorStore.fieldsData.username"
              :error="$v.username.$invalid"
              variant="outlined"
              class="mb-3"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col :sm="6">
            <UserEditorFieldString
              v-model="userEditorStore.fields.name"
              :data="userEditorStore.fieldsData.name"
              :error="$v.name.$invalid"
              variant="outlined"
              class="mb-3"
            />
          </v-col>
          <v-col :cols="3" class="hidden-xs">
            <UserEditorFieldString
              v-model="userEditorStore.fields.followers_count"
              :data="userEditorStore.fieldsData.followers_count"
              :error="$v.followers_count.$invalid"
              variant="outlined"
              class="mb-3"
            />
          </v-col>
          <v-col :cols="3" class="hidden-xs">
            <UserEditorFieldString
              v-model="userEditorStore.fields.follows_count"
              :data="userEditorStore.fieldsData.follows_count"
              :error="$v.follows_count.$invalid"
              variant="outlined"
              class="mb-3"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <UserEditorFieldUrl
              v-model="userEditorStore.fields.website"
              :data="userEditorStore.fieldsData.website"
              :error="$v.website.$invalid"
              variant="outlined"
              class="mb-3"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <UserEditorFieldTextarea
              v-model="userEditorStore.fields.biography"
              :data="userEditorStore.fieldsData.biography"
              :error="$v.biography.$invalid"
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-row class="mt-2" v-if="!autosave">
          <v-col>
            <v-btn
              type="submit"
              :text="!props.user ? $t('common.actions.create') : $t('common.actions.submit')"
              color="primary"
            />
            <v-btn
              class="ml-3"
              :text="$t('common.actions.close')"
              @click="emit('close')"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </form>
</template>

<style lang="scss">
.dx-user-editor-form {
  .v-row {
    & + .v-row {
      margin-top: 4px;
    }

    .v-col {
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  .v-field {
    border-radius: 10px;
    margin-bottom: -2px;

    &__input {
      padding: 10px 12px;
      min-height: 10px;
      font-size: 14px;
    }
  }

  .v-btn {
    min-height: 46px;
  }
}
</style>
