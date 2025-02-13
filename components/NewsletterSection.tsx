import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-12 lg:py-24">
      <div className="sm:container">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-transparent" />
            <Button className="rounded-tl-xl rounded-tr-xl rounded-bl-xl" variant="primary" size="lg">
              <Send className="h-4 w-4" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

