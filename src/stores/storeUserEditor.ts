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

    function generateFields(platformKey: string, user?: any) {
        platform.value = platformKey

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            const fieldInitialValue = user && user.profile.hasOwnProperty(fieldKey) ? user.profile[fieldKey] : ''

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

    function reset() {
        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            fields[fieldKey].value = ''
        }
    }

    function create() {
        const rawUserConfig: any = {
            profile: {},
            media: {}
        }

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            rawUserConfig.profile[fieldKey] = fields[fieldKey].value
        }

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.collections)) {
            rawUserConfig.media[fieldKey] = []
        }

        const id = useUserStore().loadUser(rawUserConfig, platform.value, 'storage')
        useUserStorageStore().addUserToStorageIndex(id)

        setTimeout(() => reset(), 1000)

        return true
    }

    async function update(user: IUser) {
        const rawUserProfile: any = {}

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            rawUserProfile[fieldKey] = fields[fieldKey].value
        }

        await user.profile.update(rawUserProfile)
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