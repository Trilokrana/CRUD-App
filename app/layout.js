import { AuthProvider } from "./Providers";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stock Inventory ',
  description: 'Created By Trilok Rana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-5'>
          <div className='mt-8'>
            <AuthProvider>{children}</AuthProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
