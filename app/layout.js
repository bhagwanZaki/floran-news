import Navbar from "@/components/Navbar";
import "../css/globals.css";

export const metadata = {
  title: "Floran News",
  description: "News App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
