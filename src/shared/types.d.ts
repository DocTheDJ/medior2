export type Geo = {
  lat?: string,
  lng?: string
};

export type User = {
  id: number,
  name?: string,
  username: string,
  email: string,
  address?: {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: Geo
  },
  phone?: string,
  website?: string,
  company?: {
    name?: string,
    catchPhrase?: string,
    bs?: string
  }
};

export type Article = {
  id: number,
  userId: number,
  title: string,
  body: string
};
