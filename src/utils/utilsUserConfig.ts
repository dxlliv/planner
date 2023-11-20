/**
 * Fetch user configuration from the provided url
 *
 * @param url
 */
export async function loadRemoteUserConfig(url: string): Promise<IRawUser> {
    return fetch(url)
        .then(response => response.json())
        .catch(e => {
            throw Error(e)
        })
}