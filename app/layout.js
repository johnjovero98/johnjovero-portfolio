import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});



export const metadata = {
  title: "John Jovero Portfolio",
  description: "Showcase of my work and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={nunito.className}
      >
        {children}
      </body>
    </html>
  );
}
