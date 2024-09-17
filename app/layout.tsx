import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";

import { getCouncilName } from "@/utils/name";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: getCouncilName(),
  description: `The Aphelion Council Website, done by The 26th Aphelion Council ExCo`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-black`}>{children}</body>
    </html>
  );
}
