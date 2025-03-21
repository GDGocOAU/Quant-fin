import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/HeroSection"
import { CommunitySection } from "@/components/CommunitySection"
import { SponsorshipSection } from "@/components/SponsorshipSection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { FooterSection } from "@/components/FooterSection"
import { Slide, Zoom } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
          <HeroSection />
          <CommunitySection />
          <SponsorshipSection />
        </div>
      </main>

      <FooterSection />
    </div>
  )
}

