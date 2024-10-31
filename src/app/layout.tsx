"use client";
import Footer from "@/components/Footer";
// import type { Metadata } from "next";
import "./globals.css"; // تأكد من أن استيرادك للخطوط في globals.css موجود هنا.
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  // SignedIn,
  // SignedOut,
  // SignInButton,
  // UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { store } from "./store/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route
  const hideNavbarRoutes = ["/sign-up", "/sign-in"]; // List of routes where the Navbar should be hidden

  return (
    <ClerkProvider>
      <Provider store={store}>
        <html lang="en">
          <body
            className={`font-playwrite ${
              !hideNavbarRoutes.includes(pathname) ? "px-4" : ""
            }   antialiased bg-backgroundPri`}
          >
            {!hideNavbarRoutes.includes(pathname) && (
              <div className=" bg-white w-full h-20">
                <Navbar />
              </div>
            )}
            <div className=" container mx-auto px-4 "> {children}</div>{" "}
            {!hideNavbarRoutes.includes(pathname) && (
              <div
                className={`${
                  !hideNavbarRoutes.includes(pathname) ? "px-4" : ""
                } bg-white w-full h-20`}
              >
                <Footer />
              </div>
            )}
          </body>
        </html>
      </Provider>
    </ClerkProvider>
  );
}
