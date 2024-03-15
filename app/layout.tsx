import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Roboto_Mono({ subsets: ['latin'] }) // * Like
export const metadata: Metadata = {
    title: 'Jay Vigilla | Software Engineer | San Francisco',
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
        {children}
        <Footer/>
      </body>
    </html>
  )
}
