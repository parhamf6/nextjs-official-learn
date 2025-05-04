import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';



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