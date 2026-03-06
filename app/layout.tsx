import "../styles/globals.css"; // Import Tailwind

export const metadata = {
  title: "Fresh Studio",
  description: "Luxury Real Estate Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
