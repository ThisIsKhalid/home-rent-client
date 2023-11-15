import ClientOnly from "@/components/ClientOnly";
import RegisterModal from "@/components/modals/RegisterModal";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/lib/Providers";
import ToasterProvider from "@/lib/ToasterProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import LoginModal from "@/components/modals/LoginModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reside Rent",
  description: "Reside Rent is a property management company in the worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar />
          </ClientOnly>
          {children}
        </body>
      </html>
    </Providers>
  );
}
