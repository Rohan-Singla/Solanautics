import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToasterWrapper } from "@/components/ToastWrapper";

const geistSans = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  preload: true,
});


export const metadata: Metadata = {
  title: "Solanautics",
  description: "Get alerts and notifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ToasterWrapper />
        {children}
      </body>
    </html>
  );
}
