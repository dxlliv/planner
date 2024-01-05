import {required, minLength, maxLength, url} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {useUserStore} from "./storeUser";

export const useUserEditorStore = defineStore("user/editor", () => {
    const platform = ref('')

    const fields: any = {}
    const fieldsData: any = {}
    const rules: any = {}

    let $v = ref()

    const platformStructureUser = computed(() => {
        return getPlatformStructureUser(platform.value)
    })

    /**
     * Prepare fields for user editor form
     *
     * @param platformKey
     * @param user
     */
    function generateFields(platformKey: string, user?: any) {
        platform.value = platformKey

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            let fieldInitialValue = user && user.profile.hasOwnProperty(fieldKey) ? user.profile[fieldKey] : ''

            // prevent avatar issues
            if (field.type === 'file') {
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

        $v.value = useVuelidate(
            rules,
            fields,
            {
                $lazy: true
            }
        )
    }

    /**
     * Reset form user fields
     */
    function reset() {
        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            fields[fieldKey].value = ''
        }
    }

    /**
     * Create raw user from user fields
     */
    async function create() {
        const rawUser: any = {
            profile: {},
            media: {}
        }

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            rawUser.profile[fieldKey] = fields[fieldKey].value
        }

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.collections)) {
            rawUser.media[fieldKey] = []
        }

        const user = await useUserStore().loadUser(rawUser, platform.value, 'storage')

        useUserStorageStore().addUserToStorageIndex(user.raw.profile.username)

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

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            rawUserProfile[fieldKey] = fields[fieldKey].value
        }

        await user.profile.update(removeUndefinedFromObject(rawUserProfile))
        await user.save()
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