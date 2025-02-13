import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Faculty Advisor",
    image: "/placeholder.svg",
    description: "Professor of Financial Mathematics with 15 years of industry experience",
  },
  {
    name: "Michael Chen",
    role: "President",
    image: "/placeholder.svg",
    description: "Final year Computer Science student with a focus on ML in Finance",
  },
  {
    name: "Amanda Williams",
    role: "Vice President",
    image: "/placeholder.svg",
    description: "Mathematics major specializing in Stochastic Calculus",
  },
  {
    name: "David Kumar",
    role: "Technical Lead",
    image: "/placeholder.svg",
    description: "Physics graduate student researching quantum computing applications in finance",
  },
  {
    name: "Lisa Rodriguez",
    role: "Events Coordinator",
    image: "/placeholder.svg",
    description: "Economics student with experience in event management",
  },
  {
    name: "James Wilson",
    role: "Research Lead",
    image: "/placeholder.svg",
    description: "Statistics PhD candidate focusing on time series analysis",
  },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="container py-12 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              A diverse group of passionate individuals working together to advance quantitative finance education at
              OAU.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="container py-12 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardHeader className="relative h-48">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="pt-4">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join the Team Section */}
        <section className="bg-muted/50 py-12 lg:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Team</h2>
              <p className="mt-4 text-muted-foreground">
                We're always looking for passionate individuals to join our community. If you're interested in
                quantitative finance and want to make a difference, we'd love to hear from you.
              </p>
              <Button className="mt-6 rounded-[20px]" variant="primary" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Reuse the footer from the main page */}
    </div>
  )
}

