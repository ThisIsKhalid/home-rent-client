export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type IUser = {
  id: string;
  name: string;
  email: string;
  emailVerified: null | string;
  image: null | string;
  password: string;
  createdAt: string;
  updatedAt: string;
  favoriteIds: string[];
};
