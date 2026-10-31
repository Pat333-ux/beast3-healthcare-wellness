import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Wellness Division",
  description: "Beast 3.0 Healthcare Division",
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
