import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercepting routes",
  description: "Intercepting routes sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
