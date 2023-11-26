import {openProfileDirectory, readProfileDirectoryConfig} from "../utils/utilsProfile";

export const useProfileManagerStore = defineStore("profile/manager", () => {
  const configUserStore = useConfigUserStore()
  const directory: Ref<any> = ref(null);

  async function importProfile() {
    directory.value = await openProfileDirectory()

    const config = await readProfileDirectoryConfig(fileConfig.value)

    configUserStore.setUserConfig(config)
    configUserStore.loadUsers()
  }

  const fileConfig = computed(() => {
    return directory.value.find(
        (file: FileSystemFileEntry) => file.name === 'config.json'
    )
  })

  return {
    importProfile,
  };
});
