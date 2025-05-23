import Link from "next/link"
import Image from "next/image"
import { NewsletterSection } from "@/components/NewsletterSection"

interface FooterSectionProps {
  variant?: "default" | "light"
}

export function FooterSection({ variant = "default" }: FooterSectionProps) {
  const bgColor = variant === "light" ? "bg-white" : "bg-[#74A5FF]"
  const textColor = variant === "light" ? "text-gray-800" : "text-white"
  const hoverColor = variant === "light" ? "hover:text-gray-600" : "hover:text-gray-200"
  const borderColor = variant === "light" ? "border-gray-200" : "border-white border-opacity-20"

  return (
    <footer className={`border-t ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-8 md:py-12">
          <div className="flex sm:flex-row md:justify-between items-end">
            <div className=""></div>
            <NewsletterSection variant={variant} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image src="/gdgLogoSvg.svg" alt="GDG Logo" width={200} height={40} className="h-10 w-[300px]" />
              </Link>
            </div>
            <div className="flex flex-col justify-end gap-8 sm:gap-12 sm:flex-row">
              <div>
                <h3 className="mb-2 text-sm font-bold">Navigation</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/" className={`text-sm ${textColor} ${hoverColor}`}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className={`text-sm ${textColor} ${hoverColor}`}>
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className={`text-sm ${textColor} ${hoverColor}`}>
                      Team
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/bootcamp" className={`text-sm ${textColor} ${hoverColor}`}>
                      BootCamp
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold">Resources</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/bootcamp" className={`text-sm ${textColor} ${hoverColor}`}>
                      Bootcamp
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/user-guides" className={`text-sm ${textColor} ${hoverColor}`}>
                      User guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/webinars" className={`text-sm ${textColor} ${hoverColor}`}>
                      Webinars
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`border-t ${borderColor}`}>
          <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
            {/* <div className={`flex gap-4 text-sm ${textColor}`}>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/legal">Legal</Link>
            </div> */}
            <div className="flex items-center gap-4">
              <Link href="https://x.com/GDGOAU" className={`${textColor} ${hoverColor}`}>
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/gdgoc-oau" className={`${textColor} ${hoverColor}`}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/gdgoau?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" className={`${textColor} ${hoverColor}`}>
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              {/* <Link href="#" className={`${textColor} ${hoverColor}`}>
                <span className="sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

