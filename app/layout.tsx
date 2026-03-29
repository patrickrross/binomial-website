import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binomial — Organisational Intelligence",
  description:
    "Binomial connects to your existing tools and shares the right context with the right people; before they know they need it.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
