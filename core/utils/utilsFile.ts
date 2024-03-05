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

/**
 * Resolve media file path
 *
 * @param filename
 * @param folder
 */
export function getMediaFilePath(filename: string, folder: string = "") {
  const baseURL = useNuxtApp().$config.app.baseURL

  if (filename.startsWith("http")) {
    return ""
  }

  return `${baseURL}user/${folder}/${filename}`
}

/**
 * Fetch media and transform it into blob file
 * @param url
 */
export async function fetchFileFromUrl(url: string): Promise<File> {
  const name = getFileName(url)

  const response = await fetch(url)
  const data = await response.blob()

  return new File([data], name, {
    type: data.type,
  })
}

/**
 * Transform blob file into image for src property
 *
 * @param media
 */
export async function handleMediaForSrc(media: { file: IMediaFile }) {
  if (!media.file) {
    throw Error("File object is not defined")
  }

  if (!media.file.blob) {
    throw Error("File blob is not defined")
  }

  if (!isPromise(media.file.blob)) {
    throw Error("File blob is not a promise")
  }

  return URL.createObjectURL(await media.file.blob)
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
