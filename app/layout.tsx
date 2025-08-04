import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Abdam - Full Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects and skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="c:\projeto\portfolio\Portfolio\public\favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
