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
                    GDG OAU Quantitative Finance Club (GO-QFC) is presenting its  inaugural annual 60-day bootcamp for ALL students studying in Nigeria, starting in late March 2025.
                  </p>
                  <p>
                    If you are not a fast autodidact with strong quantitative background, this opportunity might not be suitable for you. You are expected to commit roughly 14-20 hours per week depending on your knowledge background.
                  </p>

                  <p>
                    <span className="text-black font-bold">Selection Process</span>
                    <br/>
                    <span className="text-gray-900">First Stage:</span> 20 mental math quiz in 2 minutes (similar to "Optiver 80 in 8 Assessment") and 
                    30 questions in 15 minutes. The latter is modeled after A-level mathematics and statistics syllabus. 
                    Not more than 80 applicants will proceed to the next stage.
                    <br/>
                    <span className="text-gray-900">Second Stage:</span> Two-hour live proctoring examination. The questions are modeled after the 
                    University of Cambridge <Link href="https://www.maths.cam.ac.uk/undergrad/admissions/step" className="text-slate-700 underline">STEP 3 Examination</Link>. 
                    Not more than 40 applicants will proceed to the next stage.
                    <br/>
                    <span className="text-gray-900">Third Stage:</span> One-hour programming test via live proctoring. 
                    The difficulty will  be similar to LeetCode Easy Problems. 
                    Not more than 30 applicants will be ultimately selected for the bootcamp.
                  </p>
                  <p>Register before April 6th (11:59pm)</p>
                  <p>More information, including the bootcamp timeline and detailed schedules will be released soon. 
                    Kindly fill this form to express your interest:
                  </p>
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

