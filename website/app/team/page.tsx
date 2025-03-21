import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { FooterSection } from "@/components/FooterSection"

const teamMembers = [
  {
    name: "Isangedigh Gabriel",
    role: "Product Design Lead",
    image: "/gabriel.png",
    bgColor: "bg-[#2e6fe8]",
    size: "normal"
  },
  {
    name: "Agbor Blessing",
    role: "GDG OAU Technical Lead",
    image: "/blessing.png",
    bgColor: "bg-[#e82e2e]",
    size: "small"
  },
  {
    name: "Adegbite Godwin",
    role: "GDG OAU Campus Lead",
    image: "/godwin.png",
    bgColor: "bg-[#007c00]",
    size: "normal"
  },
  {
    name: "Adesina Lekan Samuel",
    role: "Quantitative Finance Lead",
    image: "/limitless.png",
    bgColor: "bg-[#2e6fe8]",
    size: "small"
  },
  {
    name: "Anuoluwapo Kaye",
    role: "Graphic Design Lead",
    image: "/ehrie.png",
    bgColor: "bg-[#DADE00]",
    size: "normal"
  },
  {
    name: "Mighty Odewumi (Gr1ntch)",
    role: "Web Development Lead",
    image: "/mighty.png",
    bgColor: "bg-[#8f9eba]",
    size: "small"
  },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Hero */}
          <section className="py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Meet the GDG OAU Quantitative Finance Team
                </h1>
              </div>
              <div>
                <p className="text-xl text-gray-600">
                  GDG OAU Quantitative Finance Club (GO-QFC) is the premier quantitative finance community on Obafemi
                  Awolowo University campus. It is under the leadership of Google Developer Group (GDG) OAU.
                </p>
              </div>
            </div>
          </section>

          {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 */}
          {/* Teams*/}
          <section className="py-12 lg:py-24 overflow-x-auto">
            <div className="flex space-x-6 min-w-max">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`${member.bgColor} rounded-t-[120px] text-white flex flex-col overflow-hidden group transition-all duration-300  hover:scale-[1.02] w-64 ${
                    member.size === "small" ? "h-[400px] mt-[80px]" : "h-[480px]"
                  }`}
                >
                  <div className="text-center pt-10 px-4 flex-shrink-0">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                  <div className="relative flex-grow mt-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-center hover:mix-blend-overlay"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
