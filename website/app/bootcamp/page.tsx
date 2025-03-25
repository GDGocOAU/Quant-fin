"use client"

import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { FooterSection } from "@/components/FooterSection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SponsorshipSection } from "@/components/SponsorshipSection"
import Link from "next/link"
import { JackInTheBox, Slide } from "react-awesome-reveal"

export default function BootcampPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#74a5ff] overflow-hidden">
          {/* Decorative Squares */}
          <div className="absolute left-0 bottom-0 opacity-20">
            <Image src="/squaresWhite.png" alt="White squares" width={32} height={32} />
          </div>
          <div className="absolute right-0 top-0 opacity-20">
            <div className="w-16 h-16 bg-white"></div>
            <div className="w-8 h-8 bg-white mt-4 ml-8"></div>
            <div className="w-12 h-12 bg-white mt-4"></div>
          </div>

          {/* Text Content */}
          <JackInTheBox className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">NATIONAL BOOTCAMP</h1>
                <div className="space-y-4 text-lg sm:text-xl">
                  <p>
                    GO-QFC will be starting its inaugural annual 70-day learning bootcamp for ALL students studying in
                    Nigeria, starting in March 2025.
                  </p>
                  <p>
                    If you are not a "fast autodidactic" student, this opportunity might not be for you. You are
                    expected to commit roughly 5-10 hours per week depending on your knowledge background.
                  </p>
                  <p>Kindly fill this form to express your interest:</p>
                </div>
                <div className="pt-4">
                  <Button
                    className="bg-red-600 hover:bg-red-300"
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://gdg.community.dev/j/dcrz8m7vx5fbp/", "_blank")}
                  >
                    Join Us Today
                  </Button>
                </div>
              </div>
            </div>
          </JackInTheBox>
          <Slide direction="right" className="hidden absolute top-0 right-0 bottom-0 left-1/2 lg:block">
            <Image
              src="/manTyping2.png"
              alt="Student working on laptop"
              fill
              className="object-cover"
              priority
            />
          </Slide>
        </section>

        <SponsorshipSection />
      </main>

      <FooterSection variant="light" />
    </div>
  )
}

