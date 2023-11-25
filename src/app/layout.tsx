import getCurrentUser from "@/actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import RentModal from "@/components/modals/RentModal";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/lib/Providers";
import ToasterProvider from "@/lib/ToasterProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SearchModal from "@/components/modals/SearchModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reside Rent",
  description: "Reside Rent is a property management company in the worldwide.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();
  // console.log(currentUser);
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <RentModal currentUser={currentUser} />
            <SearchModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className="pb-20 pt-28">{children}</div>
        </body>
      </html>
    </Providers>
  );
}
