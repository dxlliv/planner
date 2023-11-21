import {
    directoryOpen,
} from 'browser-fs-access'

export async function openProfileDirectory() {
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

    const blobs = await directoryOpen(options)

    console.log(blobs)

    return blobs
}

export async function readProfileDirectoryConfig(file: FileSystemFileEntry) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = function() {
            if (typeof reader.result !== 'string') {
                reject('Directory does not contain a valid config.json')
            }

            resolve(JSON.parse(reader.result));
        };

        reader.onerror = reject;
    })
}