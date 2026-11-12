import type { Metadata } from "next";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

export const metadata: Metadata = {
  title: "Dhawal Jhaveri | Unity Game Developer & Systems Engineer",
  description:
    "Portfolio of Dhawal Jhaveri — Unity Game Developer specializing in C#, 2D & mobile games, real-time multiplayer systems, client-server architecture, and mobile optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
