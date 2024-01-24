import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Simple Dashboard",
  description: "Manage Tasks with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <aside className="flex-shrink-0">
            <Sidebar />
          </aside>
          <div className="flex-1 bg-[#fafafb] pt-[45px]  px-[30px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
