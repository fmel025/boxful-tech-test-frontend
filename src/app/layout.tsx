import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const albert = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boxful app",
  description: "Boxful frontend app made for the tech assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={albert.className}>
        <Toaster position="bottom-left" reverseOrder={false} />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
