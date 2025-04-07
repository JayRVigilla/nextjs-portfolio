import type { Metadata } from 'next'
import { Chivo as Font } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from './components/Navbar'
config.autoAddCss = false;

const inter = Font({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
    title: 'Jay Vigilla | Software Engineer | San Francisco | ex-Chef',
    description: 'Jay Vigilla is a chef turned Software Engineer based in the San Francisco Bay Area experienced in JavaScript, Typescript, React, Redux, NodeJS, Python, SQL, responsive design, and team management under pressure',
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
