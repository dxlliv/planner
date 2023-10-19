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
        let usersConfig: IConfigUsers = [] as IConfigUsers

        if (isUsersConfigProvided()) {
            // @ts-ignore
            usersConfig = usersLocal
        } else {
            // @ts-ignore
            usersConfig = usersDemo
        }

        // parse local profiles
        usersConfig.map((user: IConfigUser) => {

            // parse profile
            users.value[user.profile.username] = parseProfile(user)
        })

        return true
    }

    return {
        loadConfig,
        options,
        users,
    }
})
