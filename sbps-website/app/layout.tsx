import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const merriweather = Merriweather({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Social Baluni Public School | Academics • IIT/NDA • Sports',
  description: 'A premier institution offering boarding school education, IIT/NDA preparation, and comprehensive sports programs for 3000+ students.',
  keywords: 'Social Baluni, SBPS, boarding school, IIT preparation, NDA academy, sports, academics',
  authors: [{ name: 'Social Baluni Public School' }],
  openGraph: {
    title: 'Social Baluni Public School - Building Confident Learners',
    description: 'A premier institution for academics, IIT/NDA preparation, and holistic development',
    type: 'website',
    url: 'https://sbpsdoon.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1427504494785-cdec3f50dae0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Social Baluni Public School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Baluni Public School',
    description: 'Building Confident Learners for a Changing World',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <meta name="theme-color" content="#1F5E3B" />
      </head>
      <body className="font-sans text-text bg-bg">
        {children}
      </body>
    </html>
  )
}
