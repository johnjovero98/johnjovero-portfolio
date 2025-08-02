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
  title: "John Jovero Portfolio | Anthony's Kitchen Design Challenge ",
  description: "Project details for Anthony's Kitchen Design Challenge",
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
