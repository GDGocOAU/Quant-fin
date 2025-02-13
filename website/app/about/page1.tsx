import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="container py-12 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About GO-QFC</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Empowering the next generation of quantitative finance professionals through education, mentorship, and
              hands-on experience.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container py-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                GO-QFC strives to bridge the gap between academic theory and industry practice in quantitative finance.
                We provide a platform for students to develop their skills, network with professionals, and prepare for
                careers in the field.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Education First</h3>
                    <p className="text-muted-foreground">Providing quality education in quantitative finance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Community Building</h3>
                    <p className="text-muted-foreground">Creating a supportive network of like-minded individuals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image src="/placeholder.svg" alt="Mission illustration" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-muted/50 py-12 lg:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Our History</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">2021</h3>
                <p className="text-muted-foreground">Founded by a group of passionate students</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">2022</h3>
                <p className="text-muted-foreground">Expanded to include multiple disciplines</p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">2023</h3>
                <p className="text-muted-foreground">Launched industry partnership program</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Reuse the footer from the main page */}
    </div>
  )
}

