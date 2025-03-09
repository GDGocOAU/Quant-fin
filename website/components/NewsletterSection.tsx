import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type VariantType = {
  variant: "default" | "light" | undefined;
}

export function NewsletterSection({variant}: VariantType) {
  return (
    <section className="py-12 lg:py-24">
      <div className="sm:container">
        <div className="mx-auto max-w-xl">
          <div className="relative flex items-center">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className={`pr-16 `}
              variant={variant}
            />
            <Button 
              className={`absolute right-1 rounded-full ${variant === "default" ? "bg-white " : "bg-black "}`} 
              size="send"
              variant="light"
            >
              <Image src="/sendMail.svg" alt="Send icon" width={16} height={16} color="white" />
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
