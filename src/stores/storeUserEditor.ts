import {required, url} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import {getPlatformStructureUser} from "../utils/utilsPlatformStructure";
import {useUserStore} from "./storeUser";

export const useUserEditorStore = defineStore("user/editor", () => {
    const platform = ref('')

    const username = ref('')
    const fields = {}
    const fieldsData = {}
    const rules = {}

    let $v = ref()

    const platformStructureUser = computed(() => {
        return getPlatformStructureUser(platform.value)
    })

    function generateFields(platformKey: string) {
        platform.value = platformKey

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            fields[fieldKey] = ref('')
            fieldsData[fieldKey] = field
            rules[fieldKey] = {
                required
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
        username.value = ''

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            fields[fieldKey].value = ''
        }
    }

    function send() {
        const rawUserConfig: any = {
            username: username.value,
            profile: {},
            media: {}
        }

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.profile.fields)) {
            rawUserConfig.profile[fieldKey] = fields[fieldKey].value
        }

        for (const [fieldKey, field] of Object.entries(platformStructureUser.value.collections)) {
            rawUserConfig.media[fieldKey] = []
        }

        useUserStore().loadUser(rawUserConfig, 'storage')
        useUserStorageStore().addUserToStorageIndex(username.value)

        setTimeout(() => reset(), 1000)

        return true
    }

    return {
        $v,
        username,
        fields,
        fieldsData,
        rules,
        send,
        generateFields,
    }
})