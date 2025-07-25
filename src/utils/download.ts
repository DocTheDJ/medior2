// helper function to put all downloads through this so that they are all failproof
// default value is needed to have something to fall back to
export async function download<T>(url: string, defaultValue: T): Promise<T> {
  try {
    const data = await fetch(url);
    return await data.json() as T;
  } catch (e) {
    return defaultValue;
  }
}
