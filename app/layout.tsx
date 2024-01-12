// import type { Metadata } from 'next'
// import {useState} from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
// export const metadata: Metadata = {
  //   title: 'Jay Vigilla | Software Engineer',
  //   description: 'Jay Vigilla Software Engineer in San Francisco Bay Area',
  // }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation navIn={false} />
        <div id="not-nav" >

        {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
