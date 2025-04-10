import { Nunito } from "next/font/google";
import { Montserrat } from "next/font/google";


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"], // Adjust weights as needed
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"], // Adjust weights as needed
});


export const metadata = {
  title: "John Jovero Portfolio | Katppy E-Commerce Website",
  description: "Project details for Katppy E-Commerce Website",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          className={montserrat.className}
        >
          {children}
        </body>
      </html>
    );
  }
