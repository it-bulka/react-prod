export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([key, value]) => {
    if(value === undefined) return
    searchParams.set(key, value)
  })

  return `?${searchParams.toString()}`
}

/**
 * Function to add query string parameters to a URL
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params))
}
