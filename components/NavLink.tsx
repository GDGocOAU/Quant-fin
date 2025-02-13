"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react" // Added import for React

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-mainBlue ${isActive ? "text-mainBlue" : ""}`}
    >
      {children}
    </Link>
  )
}

