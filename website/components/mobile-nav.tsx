"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavLink } from "@/components/NavLink"

const navigation = [
  { name: "About", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Resources", href: "/resources" },
  { name: "BootCamp", href: "/bootcamp" },
  { name: "Contact", href: "/contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white">
        <div className="flex flex-col space-y-4 mt-4">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

