"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <KindeProvider
          domain={process.env.KINDE_ISSUER_URL}
          clientId={process.env.KINDE_CLIENT_ID}
          redirectUri={process.env.KINDE_POST_LOGIN_REDIRECT_URL}
        >
          <Navbar />
          {children}
          <Footer />
        </KindeProvider>
      </body>
    </html>
  );
}
