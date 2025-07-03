import { Nunito } from "next/font/google";
import { Montserrat } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"], // Adjust weights as needed
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"], // Adjust weights as needed
});




export const metadata = {
  title: "John Jovero Portfolio",
  description: "Showcase of my work and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
