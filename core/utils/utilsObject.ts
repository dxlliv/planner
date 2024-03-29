/**
 * Remove undefined properties from object
 *
 * @param obj
 */
export function removeUndefinedFromObject(obj: any) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key]
    }
  })

  return obj
}
