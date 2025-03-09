import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SponsorshipSection() {
  return (
    <section className="sm:container py-12 lg:py-24 bg-[#F4F6F8] bg-[url(/gdgLogo.png)] bg-no-repeat bg-center bg-contain" id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sponsorship and Partnership</h2>
        <p className="mt-4 text-gray-500">
          We are actively looking for sponsorships! If you are interested, kindly email us
        </p>
        <Link href="/contact">
          <Button className="mt-6" variant="outlineBlue" size="lg">
            Contact us
          </Button>
        </Link>
      </div>
    </section>
  )
}

