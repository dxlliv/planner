export async function readUserDirectoryConfig(file: FileSystemFileEntry) {
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