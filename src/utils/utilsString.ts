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
