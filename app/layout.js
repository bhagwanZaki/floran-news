import Navbar from "@/components/Navbar";
import "../css/globals.css";

export const metadata = {
  title: "Floran News",
  description: "News App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
