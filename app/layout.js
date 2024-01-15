import { Inter, Kanit, Cabin } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const kanit = Kanit({
  subsets: ["latin"],
  weight: "300",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Liam Woodall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
