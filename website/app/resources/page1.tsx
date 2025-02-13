import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="container py-12 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Learning Resources</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Access our curated collection of resources to help you excel in quantitative finance.
            </p>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="container py-12 lg:py-24">
          <Tabs defaultValue="courses" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="courses" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Introduction to Quantitative Finance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Learn the fundamentals of quantitative finance, including mathematical foundations and basic
                      concepts.
                    </p>
                    <Button className="mt-4 rounded-[20px]" variant="outline">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Mathematics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Deep dive into the mathematical theories behind modern finance.
                    </p>
                    <Button className="mt-4 rounded-[20px]" variant="outline">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Python for Finance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Master Python programming for financial analysis and modeling.
                    </p>
                    <Button className="mt-4 rounded-[20px]" variant="outline">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="books" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Image src="/placeholder.svg" alt="Book cover" width={200} height={300} className="mx-auto" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-bold">Options, Futures, and Other Derivatives</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      The classic text for understanding derivatives markets.
                    </p>
                  </CardContent>
                </Card>
                {/* Add more book cards */}
              </div>
            </TabsContent>
            <TabsContent value="tools" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Advanced calculator for financial computations and analysis.
                    </p>
                    <Button className="mt-4 rounded-[20px]" variant="outline">
                      Access Tool
                    </Button>
                  </CardContent>
                </Card>
                {/* Add more tool cards */}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Study Materials */}
        <section className="bg-muted/50 py-12 lg:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Study Materials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Lecture Notes</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Introduction to Stochastic Calculus
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Time Series Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Portfolio Optimization
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Practice Problems</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Options Pricing Exercises
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Risk Management Cases
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary hover:underline">
                      Market Analysis Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Reuse the footer from the main page */}
    </div>
  )
}

