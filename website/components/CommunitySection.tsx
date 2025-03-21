import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export function CommunitySection() {
  return (
    <Slide direction="left">
      <section className="sm:container py-12 lg:py-24" id="learn-more">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="/communityImg.png"
              alt="Students collaborating"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              A Community for Learning, Networking and Opportunities in the Quantitative Finance Industry
            </h2>
            <p className="text-gray-500">
              GO-QFC aims at bridging the gap between most talented OAU students and the quantitative finance industry. It
              is open to both undergraduates and graduates primarily studying Computer Science, Mathematics, Statistics,
              Computer Engineering, Physics, Chemistry, Economics and other quantitative fields.
            </p>
            <p className="text-gray-500">
              We offer a lot of activities such as professional development (e.g resume advice), reading groups and fun
              activities like Chess, Poker, Estimathon, etc.
            </p>
            <Button className="w-fit" variant="outlineBlue" size="lg">
              <Link href="https://forms.gle/nvzLPZ4koPHpvUBdA">Join Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Slide>
  )
}

