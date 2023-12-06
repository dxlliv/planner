import {
    directoryOpen,
    fileSave,
} from 'browser-fs-access'

/**
 * Open user directory
 */
export async function openUserDirectory() {
    const options: any = {
        // Set to `true` to recursively open files in all subdirectories, defaults to `false`.
        recursive: true,
        // Open the directory with `"read"` or `"readwrite"` permission, defaults to `"read"`.
        mode: 'readwrite',
        // Suggested directory in which the file picker opens. A well-known directory, or a file or directory handle.
        startIn: 'documents',
        // By specifying an ID, the user agent can remember different directories for different IDs.
        id: 'import-profile',
        // Callback to determine whether a directory should be entered, return `true` to skip.
        skipDirectory: (entry: any) => entry.name[0] === '.',
    }

    return directoryOpen(options)
}

/**
 * Parse user profile config in json format
 *
 * @param file
 */
export async function parseUserProfileConfigFromFileDirectory(file: Blob) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function() {
            if (typeof reader.result !== 'string') {
                reject('Directory does not contain a valid config.json')
            } else {
                resolve(JSON.parse(reader.result))
            }
        };

        reader.onerror = reject;
    })
}