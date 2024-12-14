import UserLoader from "£/models/user/userLoader.class"

export default defineNuxtRouteMiddleware(async (to: any) => {
  /*
  not working with ssr

  const userStore = useUserStore()

  // load users from config
  await callOnce(async () => {
    await UserLoader.loadUsersFromConfig()
  })

  if (to.params && to.params.username && to.params.platform) {
    const user = userStore.getUser(to.params.username, to.params.platform)

    if (user) {

      if (!to.params.collection && !to.params.media) {
        user.media.fetch('config')
      } else {
        to.meta.media = user.media.fetchSingleMedia(to.params.collection, to.params.media)
      }

    }

    to.meta.user = user
  }
  */
})