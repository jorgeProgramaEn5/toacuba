import './globals.css'
import { Inter } from 'next/font/google'
import {NavBar} from '@/components/NavBar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toa Cuba',
  description: 'Discover the Culture and Beauty of Cuba with Our Tours',
  generator: 'Next.js',
  keywords: ['outdoor adventures', 'guided', 'tours', 'vacation', 'cuba', 'habana', 'beach', 'cultural tours','nature excursions', 'authentic tours', 'family tours', 'service tourism'],
  authors: [{ name: 'Jorge', url: 'https://next-my-portfolio-six.vercel.app/' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* <NavBar/> */}
        </header>
        {children}
      </body>
    </html>
  )
}
