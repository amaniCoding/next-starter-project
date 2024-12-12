import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { ToastContainer } from 'react-toastify';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}
        <ToastContainer/>
       </body>
    </html>
  );
}
