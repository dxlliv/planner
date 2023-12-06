/**
 * Fetch user configuration from the provided remote/local url
 *
 * @param url
 */
export async function fetchRemoteUserConfig(url: string): Promise<IRawUser> {
    return fetch(url)
        .then(response => response.json())
        .catch(e => {
            throw Error(e)
        })
}