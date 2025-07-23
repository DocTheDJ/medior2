interface IUrlParams {
  [key: string]: string | number;
}
// function designed to take the .env variables, which have placeholders and replace them
export function interpolateUrl(url: string, params: IUrlParams): string {
  let result = url;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(`{${key}}`, value.toString());
  }
  return result;
}
