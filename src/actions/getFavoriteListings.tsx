import axios from "axios";
import getCurrentUser from "./getCurrentUser";



export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    let url = `http://localhost:5000/api/v1/houses/favorites/${currentUser.id}`;

    const response = await axios.get(url);

    // console.log(response.data.data,"data");
    return response.data.data;

  } catch (error: any) {
    throw new Error(error);
  }
}
