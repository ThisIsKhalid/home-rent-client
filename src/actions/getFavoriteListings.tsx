import axios from "axios";
import getCurrentUser from "./getCurrentUser";



export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/houses/favorites/${currentUser.id}`;

    const response = await axios.get(url);

    // console.log(response.data.data,"data");
    return response.data.data;

  } catch (error: any) {
    console.log(error.response.data.message);
  }
}
