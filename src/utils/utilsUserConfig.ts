/**
 * Fetch user configuration from the provided remote/local url
 *
 * @param url
 */
export async function fetchRemoteUserConfig(url: string): Promise<IRawUser> {
    return fetch(url)
        .then(async response => {
            const rawUser: IRawUser = await response.json()

            // sets where this config comes from
            rawUser.path = url.replace('/config.json', '')

            return rawUser
        })
        .catch(e => {
            throw Error(e)
        })
}