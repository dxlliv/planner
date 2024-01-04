<script setup lang="ts">
const props = defineProps<{
  user?: IUser
}>()

const emit = defineEmits(['close'])

const userEditorStore = useUserEditorStore()

userEditorStore.generateFields('instagram', props.user)

const $v = userEditorStore.$v

function onAvatarUpdate(avatar: File) {
  userEditorStore.fields.avatar = avatar
}

async function onFormSend(e) {
  e.preventDefault()

  if (await $v.value.$validate()) {
    if (!props.user) {
      userEditorStore.create()
    } else {
      await userEditorStore.update(props.user)
    }

    emit('close')
  }
}

onMounted(() => {
  document.querySelector('.ig-user-editor-form [name="username"]')?.focus()
})
</script>

<template>
  <form class="ig-user-editor-form pa-12" @submit="onFormSend">

    <v-row>
      <v-col :cols="12" :md="4" class="text-center pb-14">

        <UserEditorFieldAvatar
          :user="user"
          @update="onAvatarUpdate"
        />

      </v-col>
      <v-col :cols="12" :md="8">

        <v-row>
          <v-col>

            <UserEditorFieldString
                name="username"
                v-model="userEditorStore.fields.username"
                :data="userEditorStore.fieldsData.username"
                :error="$v.username.$invalid"
                variant="outlined"
            />

          </v-col>
        </v-row>
        <v-row>
          <v-col :cols="6">

            <UserEditorFieldString
                v-model="userEditorStore.fields.name"
                :data="userEditorStore.fieldsData.name"
                :error="$v.name.$invalid"
                variant="outlined"
            />

          </v-col>
          <v-col :cols="3">

            <UserEditorFieldString
                v-model="userEditorStore.fields.followers_count"
                :data="userEditorStore.fieldsData.followers_count"
                :error="$v.followers_count.$invalid"
                variant="outlined"
            />

          </v-col>
          <v-col :cols="3">

            <UserEditorFieldString
                v-model="userEditorStore.fields.follows_count"
                :data="userEditorStore.fieldsData.follows_count"
                :error="$v.follows_count.$invalid"
                variant="outlined"
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

        <v-row>
          <v-col>
            <v-btn type="submit" :text="!props.user ? 'Create' : 'Save'" variant="outlined" />
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </form>
</template>

<style lang="scss">
.ig-user-editor-form {
  .v-row {
    & + .v-row {
      margin-top: 4px;
    }

    .v-col {
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  .v-field__input {
    padding-left: 10px;
    padding-right: 10px;
    min-height: 10px;
    font-size: 14px;
  }

  input.v-field__input {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>