import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

export const metadata: Metadata = {
  title: "Sky Music",
  description: "Top albums with infinite scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
