import axios from "axios";

export interface IHousesParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getHouses(params: IHousesParams) {
  try {
    const url = `http://localhost:5000/api/v1/houses`; // replace with your API URL
    const response = await axios.get(url, {
      params: params,
    });

    if (!response?.data?.data) {
      return null;
    }
    // console.log(response.data.data);

    return response.data.data;

  } catch (error: any) {
    return null;
  }
}
