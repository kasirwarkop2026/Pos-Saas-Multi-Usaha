import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Super Admin | POS SaaS", description: "Platform administration for POS SaaS Multi-Usaha" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
