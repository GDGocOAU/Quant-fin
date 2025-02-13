import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="sm:container relative py-12 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Raising the Next Generation of Quantitative Finance Experts at OAU
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            GDG OAU Quantitative Finance Club (GO-QFC) is the premier quantitative finance community on Obafemi Awolowo
            University campus. It is under the leadership of Google Developer Group (GDG) OAU.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button className="rounded-t-[30px] rounded-bl-[30px]" variant="primary" size="lg">
              <Link href="#learn-more">Learn more</Link>
            </Button>
            <Button className="bg-[#E82E2E]" variant="outline" size="lg">
              <Link href="#contact">Contact us</Link>
            </Button>
          </div>
        </div>
        <div className="hidden sm:block relative w-full h-[300px] lg:h-full">
          <Image src="/heroImg.svg" alt="Hero image" fill className="object-cover rounded-lg" priority />
        </div>
      </div>
    </section>
  )
}

