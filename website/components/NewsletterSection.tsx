import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-12 lg:py-24">
      <div className="sm:container">
        <div className="mx-auto max-w-xl">
          <div className="relative flex items-center">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent pr-16"
            />
            <Button 
              className="absolute right-1 bg-white rounded-full" 
              size="send"
            >
              <Image src="/sendMail.svg" alt="Send icon" width={16} height={16} />
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
