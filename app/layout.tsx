import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Abdam - Full Stack Developer",
  description: "Professional portfolio showcasing full-stack development projects and skills",
      icons: {
    icon: [
      { url: "/favicon.ico" }, // Icone de nevegador 
    ],
    // apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
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
