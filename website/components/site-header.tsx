import Image from "next/image"
import { NavLink } from "@/components/NavLink"
import { MobileNav } from "@/components/mobile-nav"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Resources", href: "/resources" },
  { name: "BootCamp", href: "/bootcamp" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center">
          <NavLink href="/">
            <Image src="/gdgLogoSvg.svg" alt="GDG Logo" width={100} height={40} className="h-10 w-[300px]" />
          </NavLink>
          <nav className="ml-auto flex items-center space-x-6">
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}

