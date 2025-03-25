"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { FooterSection } from "@/components/FooterSection"
import { Button } from "@/components/ui/button"
import { Map, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget);

    const formURL = process.env.NEXT_PUBLIC_FORM_URL;
    if (!formURL) {
      throw new Error("NEXT_PUBLIC_FORM_URL is missing. Please add it to your .env.local file.");
    }

    try {
      const response = await fetch(formURL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
        // Reset the form
        event.currentTarget.reset()
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <JackInTheBox className="bg-[#4285F4] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl">
                Have questions about GO-QFC? We'd love to hear from you. Send us a message and we'll respond as soon as
                possible.
              </p>
            </div>
          </div>
        </JackInTheBox>

        <Slide
          direction="left" 
          className="py-16 md:py-24"
        >
          <div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
          >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800">
                    <h3 className="font-bold text-xl mb-2">Thank you for reaching out!</h3>
                    <p>We've received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-[#4285F4]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <Link className="mt-1 text-gray-600" href="mailto:quantfinance.goqfc@gmail.com">quantfinance.goqfc@gmail.com</Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-[#4285F4]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <Link href="tel:+2348145442460" className="mt-1 text-gray-600">+2348145442460</Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Map className="h-6 w-6 text-[#4285F4]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Location</h3>
                      
                      <p className="text-gray-600">Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="mt-10 h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.6718363087395!2d4.517627574424308!3d7.5177644102321425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039da5eaab3a39f%3A0xc84c9bd19d5b8a53!2sObafemi%20Awolowo%20University!5e0!3m2!1sen!2sng!4v1687972162391!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* FAQ Section */}
        <Fade className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How can I join GO-QFC?</h3>
                  <p className="text-gray-600">
                    Only the students of Obafemi Awolowo University are allowed to join by filling this 
                    <Link href="https://forms.gle/dhV5vryHATQr7dBe9" className="text-blue-500"> form
                    </Link>. 
                    Nevertheless, our virtual events are open to all students regardless of their institutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Do I need prior knowledge of finance to join?</h3>
                  <p className="text-gray-600">
                    No, we welcome members from all backgrounds. However, a basic understanding of mathematics and
                    programming is helpful as quantitative finance involves both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </main>

      <FooterSection />
    </div>
  )
}
