import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import RegisterModal from "@/components/modals/RegisterModal";

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
            <RegisterModal />
            <Navbar />
          </ClientOnly>
          {children}
        </body>
      </html>
    </Providers>
  );
}
