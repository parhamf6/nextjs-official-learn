import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${inter.className} antialiased`}
      >
        <main className="p-2 m-2 ml-4 mr-4 ">
          {children}
        </main>
      </body>
    </html>
  );
}