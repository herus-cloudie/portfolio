
import "./globals.css";
import "./reset.css";

export const metadata = {
  title: "Portfolio",
  description: "herus Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
