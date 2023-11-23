export function getFileName(path: string) {
    return path.replace(/^.*[\\/]/, '')
}

export function getFileExtension(filename: string) {
    return filename.split('.').pop()
}

export async function fetchFileFromUrl(url: string){
    const name = getFileName(url)

    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], name, {
        type: data.type,
    });
}

export async function handleMediaForSrc(media) {
    function isPromise(p) {
        if (typeof p === 'object' && typeof p.then === 'function') {
            return true;
        }

        return false;
    }

    if (!media.data.file) {
        return undefined
    }

    if (media.data.file.blob) {
        if (isPromise(media.data.file.blob)) {
            media.data.file.blob = await media.data.file.blob
        }
    }

    if (media.data.file.blob instanceof Blob) {
        return URL.createObjectURL(media.data.file.blob)
    }

    return media.data.file?.path
}