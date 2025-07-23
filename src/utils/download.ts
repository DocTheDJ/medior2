export async function download<T>(url: string, defaultValue: T): Promise<T> {
  try {
    const data = await fetch(url);
    return await data.json() as T;
  } catch (e) {
    return defaultValue;
  }
}
