export function toQueryString(params: { [key: string]: string | number | undefined }): string {
  const queryParams = Object.entries(params)
    .filter(([key, value]) => (key === 'page' || key === 'search') && value != null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join('&');
  return queryParams ? `?${queryParams}` : '';
}
