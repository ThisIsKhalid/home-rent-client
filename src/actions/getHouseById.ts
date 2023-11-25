import axios from "axios";

interface IParams {
  houseId?: string;
}

export default async function getHouseById(params: IParams) {
  try {
    const { houseId } = params;

    if (!houseId) {
      return null;
    }

    const url = `http://localhost:5000/api/v1/houses/${houseId}`;

    const response = await axios.get(url);

    return response.data.data;
  } catch (error: any) {
    console.log(error);
  }
}
