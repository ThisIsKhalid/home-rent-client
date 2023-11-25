import axios from "axios";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      async profile(profile) {
        const user = {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };

        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/github`,
          user
        );

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile) {
        const user = {
          id: profile.at_hash,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };

        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/users/google`,
          user
        );

        return user;
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        try {
          const response = await axios.post(
            `https://travel-nest-server-one.vercel.app/api/v1/users/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (response.data.data) {
            return response.data.data;
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          throw new Error((error as any).message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
