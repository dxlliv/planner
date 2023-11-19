import usersConfig from "../../public/users/config.json";
import User from "../core/user/user.class";

export const useConfigStore = defineStore("config", () => {
  const users: Ref<IUsers> = ref({});

  function loadConfig(): boolean {
    loadUsers();

    return true;
  }

  /**
   * Parse profiles from config
   */
  function loadUsers(): boolean {
    // parse local profiles
    usersConfig.map((config: IConfigUser) => {
      const user: User = new User(config)

      // parse profile
      users.value[user.profile.username] = user;
    });

    return true;
  }

  return {
    loadConfig,
    users,
  };
});
