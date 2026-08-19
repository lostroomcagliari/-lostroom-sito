import { Bodoni_Moda, EB_Garamond, IM_Fell_English_SC } from 'next/font/google'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const imfell = IM_Fell_English_SC({
  subsets: ['latin'],
  variable: '--font-imfell',
  weight: '400',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${bodoni.variable} ${garamond.variable} ${imfell.variable}`}>
      <body>{children}</body>
    </html>
  )
}