<script setup lang="ts">
const props = defineProps<{
  media: IMedia
  user: IUser
}>()

function onDateUpdate(value) {
  props.media.setDate(value)
}
</script>

<template>
  <PostDetailLayoutDesktop :collection="media.collection">
    <template #media>

      <InstagramMedia
        :media="media"
        :user="user.profile"
        is-from-detail
        navigation
      />

    </template>
    <template #detail>

      <InstagramPostHeader :user="user">

        <v-btn icon rounded flat>
          <v-icon icon="mdi-dots-vertical" />
          <InstagramMediaMenuContext
            activator="parent"
            :width="240"
            :offset="[8, 0]"
            location="bottom right"
          >
            <InstagramMediaMenu
              :media="media"
            />
          </InstagramMediaMenuContext>
        </v-btn>

      </InstagramPostHeader>

      <PostCommentList>
        <InstagramPostComment
          v-if="media.caption"
          :user="user"
          :media="media"
        />
      </PostCommentList>

      <InstagramPostFooter>

        <template v-slot:date>
          <InstagramPostDate
            :date="media.date"
            @update="onDateUpdate"
          />
        </template>

        <template v-slot:prepend>
          <InstagramPostDateHeader :media="media" />
        </template>

        <template v-slot:append>
          <v-divider class="ma-0" />
        </template>

      </InstagramPostFooter>

      <InstagramPostCommentInput
        :media="media"
      />

    </template>
  </PostDetailLayoutDesktop>
</template>

<style scoped lang="scss">

</style>
