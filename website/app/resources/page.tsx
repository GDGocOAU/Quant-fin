import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { FooterSection } from "@/components/FooterSection"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SponsorshipSection } from "@/components/SponsorshipSection"

const resourcesHead = [
  {
    title: "Resource1",
    image: "/chess2.jpeg",
    link: "",
  },
  {
    title: "Resource2",
    image: "/maths.jpg",
    link: "",
  },
  {
    title: "Resource3",
    image: "/laptop.jpeg",
    link: "",
  },
]

const studyResources = [
  {
    category: "Study Material",
    title: "Study Resources for Quantitative Finance",
    image: "/laptop.jpeg",
    action: "Open",
    link: "https://github.com/SohamDutta2002/Finance",
  },
  {
    category: "Study Material",
    title: "Quantopian Lectures",
    image: "/laptop.jpeg",
    action: "Open",
    link: "https://gist.github.com/ih2502mk/50d8f7feb614c8676383431b056f4291",
  },
  {
    category: "Resources",
    title: "Awesome libraries and packages for Quantitative Finance",
    image: "/laptop.jpeg",
    action: "Open",
    link: "https://github.com/wilsonfreitas/awesome-quant",
  },
]

const mentalMathApps = [
  {
    category: "Math Game",
    title: "Arithmetic Game",
    image: "/brainNums.jpeg",
    action: "Open",
    bgColor: "bg-gray-800",
    link: "https://arithmetic.zetamac.com/",
  },
  {
    category: "Web App",
    title: "Interview Practice Questions",
    image: "/peopleSearch.jpeg",
    action: "Open",
    bgColor: "bg-yellow-600",
    link: "https://tradinginterview.com",
  },
  {
    category: "Application",
    title: "Math Tricks",
    image: "/maths1.jpeg",
    action: "Open",
    bgColor: "bg-gray-600",
    link: "https://play.google.com/store/apps/details?id=example.matharithmetics",
  },
]

const games = [
  {
    category: "Chess",
    title: "Play and Develop Strategies in Chess",
    image: "/chess2.jpeg",
    action: "Play Now",
    link: "https://chess.com",
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Resource Center */}
          <section className="py-12 lg:py-16">
            <h1 className="text-4xl font-bold mb-6">Resource Center</h1>
            <p className="text-gray-600 mb-8">
              These are the recommended books we recommend for members to deeply get involved with Quantitative Finance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesHead.map((resource) => (
                <div key={resource.title} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Study Resources */}
          <section className="py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Study Resources</h2>
              <Link href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                See all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyResources.map((resource) => (
                <div key={resource.title} className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40">
                      <div className="p-6 flex flex-col h-full text-white">
                        <span className="text-sm mb-2">{resource.category}</span>
                        <h3 className="text-xl font-semibold mb-auto">{resource.title}</h3>
                        <Button variant="outlineBlue" size="lg" className="w-fit mt-4">
                          <Link href={resource.link}>{resource.action}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mental Math Apps */}
          <section className="py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Mental Math Apps</h2>
              <Link href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                See all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentalMathApps.map((app) => (
                <div key={app.title} className={`relative group overflow-hidden rounded-lg ${app.bgColor}`}>
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={app.image || "/placeholder.svg"}
                      alt={app.title}
                      fill
                      className="object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0">
                      <div className="p-6 flex flex-col h-full text-white">
                        <span className="text-sm mb-2">{app.category}</span>
                        <h3 className="text-xl font-semibold mb-auto">{app.title}</h3>
                        <Button variant="outlineBlue" size="lg" className="w-fit mt-4">
                          <Link href={app.link}>{app.action}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Games */}
          <section className="py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Games</h2>
              <Link href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                See all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <div key={game.title} className="relative group overflow-hidden rounded-lg bg-gray-900">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      fill
                      className="object-cover mix-blend-overlay"
                    />
                    <div className="absolute inset-0">
                      <div className="p-6 flex flex-col h-full text-white">
                        <span className="text-sm mb-2">{game.category}</span>
                        <h3 className="text-xl font-semibold mb-auto">{game.title}</h3>
                        <Button variant="outlineBlue" size="lg" className="w-fit mt-4">
                          <Link href={game.link}>{game.action}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SponsorshipSection />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
