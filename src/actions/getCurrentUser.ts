import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session: any = await getSession();

    // console.log(session, "session");

    if (!session?.user?.email) {
      return null;
    }

    const response = await axios.get(
      `https://travel-nest-server-one.vercel.app/api/v1/users/${session.user.email}`
    );

    if (!response.data.data) {
      return null;
    }

    // console.log(response.data.data, "session");

    return response.data.data;
  } catch (error: any) {
    return null;
  }
}
