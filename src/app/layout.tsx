import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";

const poppins = Poppins({
  weight: ["200", "400", "500", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quickee | Azure hosted TODO application",
  description:
    "Manage your time without thinking too much! What can be better to get everything done on time? Another TODO app, but deployed on Azure",
  // TODO: make the actual favicon
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
