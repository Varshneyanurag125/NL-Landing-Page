import { Montserrat } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
import ProgressBar from "../components/ProgressBar";
// import { SiteOpeningAnimation } from "../components/SiteOpeningAnimationSimple";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["regular"],
}); 

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "NOETHER LABS",
  description: "Made Physic model Simulation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
            <ProgressBar />
            <NavbarDemo />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
