<script setup lang="ts">
const emit = defineEmits(['close'])

const userEditorStore = useUserEditorStore()

userEditorStore.generateFields('instagram')

const $v = userEditorStore.$v

function onAvatarUpdate(avatar: File) {
  userEditorStore.fields.avatar = avatar
}

async function onFormSend(e) {
  e.preventDefault()

  if (await $v.value.$validate()) {
    if (userEditorStore.send()) {
      emit('close')
    }
  }
}
</script>

<template>
  <form class="ig-user-editor-form pa-12" @submit="onFormSend">

    <v-row>
      <v-col :cols="12" :md="4" class="text-center pb-14">

        <UserEditorFieldAvatar
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
          <v-col>

            <UserEditorFieldString
                v-model="userEditorStore.fields.name"
                :data="userEditorStore.fieldsData.name"
                :error="$v.name.$invalid"
                variant="outlined"
            />

          </v-col>
        </v-row>
        <v-row>
          <v-col>

            <v-text-field
                v-model="userEditorStore.fields.website"
                name="website"
                placeholder="Website" type="url"
                hide-details
                :error="$v.website.$invalid"
                variant="outlined"
            />

          </v-col>
        </v-row>
        <v-row>
          <v-col>

            <v-textarea
                v-model="userEditorStore.fields.biography"
                name="biography"
                placeholder="Biography"
                hide-details
                :error="$v.biography.$invalid"
                variant="outlined"
            />

          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn type="submit" text="Create" variant="outlined" />
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
      margin-top: 8px;
    }

    .v-col {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  .v-field__input {
    padding-left: 12px;
    padding-right: 12px;
    min-height: 10px;
  }
  input.v-field__input {
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>