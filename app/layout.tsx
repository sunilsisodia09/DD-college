import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export const metadata: Metadata = {
  title: {
    default: "DD College | Admissions Open 2026",
    template: "%s | DD College",
  },

  description:
    "DD College Admissions 2026. Explore programs, discover opportunities and start your journey towards a successful future.",

  keywords: [
    "DD College",
    "DD College Admission",
    "DD College Admission 2026",
    "College Admission 2026",
    "Admissions Open 2026",
    "DD College Courses",
    "DD College Programs",
    "DD College Dehradun",
  ],

  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}