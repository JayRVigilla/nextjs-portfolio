import type { Metadata } from 'next'
// import {useState} from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Jay Vigilla | Software Engineer | San Francisco',
    description: 'Jay Vigilla is a Software Engineer based in the San Francisco Bay Area experienced in JavaScript, Typescript, React (Hooks/Classes), Redux (Sagas/Thunks), NodeJS, Python, SQL, and responsive design',
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
