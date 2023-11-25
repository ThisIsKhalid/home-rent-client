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

type House = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  userId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type SafeListing = Omit<House, "createdAt"> & {
  createdAt: string;
};

type Reservation = {
  id: string;
  userId: string;
  houseId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  house?: House
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  IUser,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
