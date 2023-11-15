import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth/next";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session: any = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const response = await axios.get(
      `http://localhost:5000/api/v1/users/${session.user.email}`
    );

    if (!response.data.data) {
      return null;
    }

    return response.data.data;
  } catch (error) {}
}
