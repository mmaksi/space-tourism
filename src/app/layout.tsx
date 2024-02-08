import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "../scss/globals.scss";
import StoreProvider from "@/contexts/StoreProvider";

const barlow = Barlow({ weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Tourism - Benevos",
  description: 'This is a solution to the challenge "Space tourism multi-page website" found in "Frontend Mentor"',
  keywords: ['frontend', 'benevos', 'nextjs', 'react', 'tailwind', 'scss', 'swiper', 'mentor', 'space', 'torism', 'challenge'],
  metadataBase: new URL('https://benevos-space-tourism.vercel.app'),
  openGraph: {
    title: "Space tourism by Benevos",
    description: 'This is a solution to the challenge "Space tourism multi-page website" found in "Frontend Mentor"',
    type: "website",
    url: "https://benevos-space-tourism.vercel.app/",
    images: [
      { 
        url: '/icon.png',
        width: '32',
        height: '32',
        alt: 'icon.png'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
    
      <body className={`antialiased ${barlow.className}`}>
        <StoreProvider>
        {children}
        </StoreProvider>
      </body>
     
    </html>
  );
}
