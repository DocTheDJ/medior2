// definition of types that are used through the application
// they can all be classes but that would mean mapping from any to instances

export type Geo = {
  lat?: string,
  lng?: string
};

// user type could be broken down to other types
// like address and company, but they are not needed separately
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
