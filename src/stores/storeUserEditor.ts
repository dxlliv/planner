import { required, minLength, maxLength, url } from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"
import slugify from "slugify"
import { usePlatformStructure } from "../composables/composablePlatformStructure";

export const useUserEditorStore = defineStore("user/editor", () => {
  const userStore = useUserStore()
  const platform: Ref<IPlatforms> = ref("" as IPlatforms)

  const fields: any = {}
  const fieldsData: any = {}
  const rules: any = {}

  let $v = ref()

  const platformStructureUser = computed(() => {
    return usePlatformStructure(platform.value).user
  })

  /**
   * Prepare fields for user editor form
   *
   * @param platformKey
   * @param user
   */
  function generateFields(platformKey: IPlatforms, user?: any) {
    platform.value = platformKey

    for (const [fieldKey, field] of Object.entries(
      platformStructureUser.value.profile.fields,
    )) {
      let fieldInitialValue =
        user && user.profile.hasOwnProperty(fieldKey)
          ? user.profile[fieldKey]
          : ""

      // prevent avatar issues
      if (field.type === "file") {
        fieldInitialValue = undefined
      }

      fields[fieldKey] = ref(fieldInitialValue)
      fieldsData[fieldKey] = field
      rules[fieldKey] = {}

      if (field.validation) {
        if (field.validation.required) {
          rules[fieldKey].required = required
        }
        if (field.validation.minLength) {
          rules[fieldKey].minLength = minLength(field.validation.minLength)
        }
        if (field.validation.maxLength) {
          rules[fieldKey].maxLength = maxLength(field.validation.maxLength)
        }
      }
    }

    $v.value = useVuelidate(rules, fields, {
      $lazy: true,
    })
  }

  /**
   * Reset form user fields
   */
  function reset() {
    for (const [fieldKey, field] of Object.entries(
      platformStructureUser.value.profile.fields,
    )) {
      fields[fieldKey].value = ""
    }
  }

  /**
   * Create raw user from user fields
   */
  async function create() {
    const rawUser: any = {
      profile: {},
      media: {},
    }

    for (const [fieldKey, field] of Object.entries(
      platformStructureUser.value.profile.fields,
    )) {
      rawUser.profile[fieldKey] = fields[fieldKey].value
    }

    for (const [fieldKey, field] of Object.entries(
      platformStructureUser.value.collections,
    )) {
      rawUser.media[fieldKey] = []
    }

    // slugify username
    rawUser.profile.username = slugify(rawUser.profile.username, "_")

    rawUser.platform = platform.value

    await userStore.createUser(rawUser, platform.value)

    setTimeout(() => reset(), 1000)

    return true
  }

  /**
   * Update user profile from user fields
   *
   * @param user
   */
  async function update(user: IUser) {
    const rawUserProfile: any = {}

    for (const [fieldKey, field] of Object.entries(
      platformStructureUser.value.profile.fields,
    )) {
      rawUserProfile[fieldKey] = fields[fieldKey].value
    }

    await userStore.updateUser(user, rawUserProfile)
  }

  return {
    $v,
    fields,
    fieldsData,
    rules,
    create,
    update,
    generateFields,
  }
})
