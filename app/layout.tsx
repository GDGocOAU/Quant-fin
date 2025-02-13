import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GDG Quant Finance Club",
  description: "Raising the Next Generation of Quantitative Finance Experts at OAU",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-sans">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}



import './globals.css'