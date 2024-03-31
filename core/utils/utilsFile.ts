/**
 * Get file name
 *
 * @param path
 */
export function getFileName(path: string) {
  return path.replace(/^.*[\\/]/, "")
}

/**
 * Get file extension
 *
 * @param filename
 */
export function getFileExtension(filename: string) {
  return filename.split(".").pop()
}


export function exportWithDesiredName(
  file: File,
  desiredName: string,
): string {
  if (file) {
    return `${desiredName}.${getFileExtension(file.name)}`
  }

  return 'undefined'
}

/**
 * Fetch media and transform it into blob file
 * @param url
 */
export async function fetchFileFromUrl(url: string): Promise<File> {
  const name = getFileName(url)

  const response = await fetch(url)
  const data = await response.blob()

  return Promise.resolve(new File([data], name, {
    type: data.type,
  }))
}

/**
 * Transform blob file into image for src property
 *
 * @param media
 */
export async function handleMediaForSrc(media: IMediaImage | IMediaVideo) {
  if (!media.file) {
    throw Error("File is not defined")
  }

  if (!media.file) {
    throw Error("File blob is not defined")
  }

  if (!isPromise(media.file)) {
    throw Error("File blob is not a promise")
  }

  // @ts-expect-error
  return URL.createObjectURL(await media.file)
}

/**
 * Download a zip file
 *
 * @param filename
 * @param userZip
 */
export function downloadZip(filename: string, userZip: any) {
  const url = URL.createObjectURL(new Blob([userZip]))
  const fakeLink = document.createElement("a")

  fakeLink.href = url
  fakeLink.download = filename

  // Download the ZIP file automatically
  fakeLink.click()

  URL.revokeObjectURL(url)
}

/**
 * Check if arg is a promise
 *
 * @param p
 */
export function isPromise(p: any) {
  return typeof p === "object" && typeof p.then === "function"
}
