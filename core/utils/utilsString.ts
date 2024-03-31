/**
 * Generate uuid string
 */
export function generateUuidv4() {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  )
}

/**
 * Check if json is valid
 *
 * @param string
 */
export function isValidJson(string: string) {
  try {
    JSON.parse(string)
    return true
  } catch {
    return false
  }
}

// https://byby.dev/js-slugify-string
export function slugify(string: string, replaceSpaceWith: string = '-') {
  return String(string)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, replaceSpaceWith) // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

export function replaceLineBreaksWithBr(str: string) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase()
    + word.slice(1)
}