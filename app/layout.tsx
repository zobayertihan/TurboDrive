import "./globals.css";
import { Footer, Navbar } from "@/components";
import AuthProvider from "@/context/AuthProvider";
// import { UserProvider } from "@/context/userContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbo Drive",
  description:
    "Embark on a journey to find the world's most extraordinary automobiles.",
};
interface childrenProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <body className="relative">
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
