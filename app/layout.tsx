import "../styles/globals.css"; // This imports your current globals.css

export const metadata = {
  title: "Fresh Studio",
  description: "Luxury Real Estate Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
