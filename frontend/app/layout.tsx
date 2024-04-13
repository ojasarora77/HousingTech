
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {AuthContextProvider} from "@/context/AuthContext";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astas',
  description: 'Cheaper Now',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>{children}</body>
      </AuthContextProvider>
      </html>
  )
}
