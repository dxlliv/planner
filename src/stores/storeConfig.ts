import usersDemo from "../config/users.json"
import usersLocal from "../../config/users.json"

export const useConfigStore = defineStore("config", () => {
    const options: Ref<any> = ref({
        rulers: false
    })

    const users: Ref<IUsers> = ref({})

    function loadConfig(): boolean {
        loadUsers()

        return true
    }

    /**
     * Check if profiles config is defined
     */
    function isUsersConfigProvided() {
        return usersLocal && Object.keys(usersLocal).length > 0
    }

    /**
     * Parse profiles from config
     */
    function loadUsers(): boolean {
        let usersConfig: any = {} as IConfig

        if (isUsersConfigProvided()) {
            usersConfig = usersLocal
        } else {
            usersConfig = usersDemo
        }

        // parse local profiles
        Object.keys(usersConfig).map((userKey: string) => {
            const user = usersConfig[userKey]

            // parse profile
            users.value[userKey] = parseProfile(user)
        })

        return true
    }

    return {
        loadConfig,
        options,
        users,
    }
})
