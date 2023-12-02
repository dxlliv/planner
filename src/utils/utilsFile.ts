export function getFileName(path: string) {
    return path.replace(/^.*[\\/]/, '')
}

export function getFileExtension(filename: string) {
    return filename.split('.').pop()
}

export function getMediaFilePath(filename: string, username: string, folder: string = '') {
    if (filename.startsWith("http")) {
        return "";
    }

    return `${import.meta.env.BASE_URL}user/${username}${folder}/${filename}`;
}

export function createJsonFileFromObject(json: any) {
    return new Blob(
        [JSON.stringify(json)],
        {type: "application/json"}
    )
}

export async function fetchFileFromUrl(url: string): Promise<File> {
    const name = getFileName(url)

    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], name, {
        type: data.type,
    });
}

export async function handleMediaForSrc(media: { file: IMediaFile }) {
    if (!media.file) {
        throw Error ('File object is not defined')
    }

    if (!media.file.blob) {
        throw Error ('File blob is not defined')
    }

    if (!isPromise(media.file.blob)) {
        throw Error ('File blob is not a promise')
    }

    return URL.createObjectURL(await media.file.blob)
}

export function isPromise(p: any) {
    if (typeof p === 'object' && typeof p.then === 'function') {
        return true;
    }

    return false;
}