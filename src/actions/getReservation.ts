import axios from "axios";

interface IParams {
  houseId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { houseId, userId, authorId } = params;
    let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/reservations`;

    if (houseId) url += `?houseId=${houseId}`;
    if (userId) url += `${url.includes("?") ? "&" : "?"}userId=${userId}`;
    if (authorId) url += `${url.includes("?") ? "&" : "?"}authorId=${authorId}`;

    const response = await axios.get(url);

    // console.log(response.data,"data");
    return response.data.data;
  } catch (error: any) {
    console.log(error);
  }
}
