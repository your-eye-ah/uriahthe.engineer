"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail, Globe, ChevronDown, Linkedin } from "lucide-react"
import BlogPost from "@/components/blog-post"
import Image from "next/image"

export default function Component() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Fixed background content */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated diagonal stripes background */}
        <div className="absolute inset-0 opacity-30">
          <div className="animated-stripes" />
          {/* Fallback animation */}
          <div className={`animated-stripes-alt`} />
        </div>

        {/* Color gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1c27] to-[#c0a59d] opacity-70 z-5"></div>

        {/* Main content section - Fixed */}
        <div className="relative z-10 container mx-auto px-4 py-8 h-full flex items-center justify-center">
          <div className="flex items-center justify-center max-w-6xl w-full">
            {/* Left side - Profile Photo */}
            <div className="flex-1 flex items-center justify-center">
              {/* Koi fish placeholder - hidden for now */}
              <div className="w-80 h-80 bg-gray-800/30 rounded-full flex items-center justify-center border-2 border-gray-700/50 hidden">
                <div className="text-6xl">🐟</div>
                <div className="absolute mt-20 text-gray-400 text-sm">Koi Fish Animation</div>
              </div>

              {/* Profile Photo */}
              <div className="w-80 h-80 bg-gray-800/30 rounded-full flex items-center justify-center border-2 border-gray-700/50 overflow-hidden">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Professional headshot"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 flex justify-center">
              {/* Content */}
              <div className="text-white max-w-lg text-left">
                <h1 className="text-3xl font-bold mb-6">
                  <div className="text-5xl inline-block">Engineer</div>,
                  <br />
                  Developer, Designer,
                  <br />
                  Creator, Problem Solver
                </h1>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4 text-yellow-400">Currently Building:</h2>
                  <div className="grid grid-cols-4 gap-3 mb-3 ml-4">
                    <div className="group relative">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">⚛️</span>
                      </div>
                      <div className="absolute w-full bg-blue-600 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center z-10">
                        React
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">🌱</span>
                      </div>
                      <div className="absolute w-full bg-green-700 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center z-10">
                        Node.js
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">🔥</span>
                      </div>
                      <div className="absolute w-full bg-orange-600 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center z-10">
                        Firebase
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">⚡</span>
                      </div>
                      <div className="absolute w-full bg-purple-700 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center z-10">
                        Vercel
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 mb-6 ml-4">
                    <div className="group relative">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">🎨</span>
                      </div>
                      <div className="absolute w-full bg-red-600 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center z-10">
                        Figma
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">📱</span>
                      </div>
                      <div className="absolute w-full bg-indigo-600 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center z-10">
                        Mobile
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-3">
                        <span className="text-white text-xs font-bold">🚀</span>
                      </div>
                      <div className="absolute w-full bg-teal-600 text-white text-xs py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 top-1/2 -translate-y-1/2 group-hover:-translate-y-16 text-center ">
                        API
                      </div>
                    </div>
                    <div className="opacity-0 w-12 h-12">{/* Empty placeholder for alignment */}</div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 ml-4">
                    + Projects featured in various publications and loved by users worldwide.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4 text-yellow-400">Experience:</h2>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>
                      <span className="text-blue-400">Engineering Conultation</span>
                    </div>
                    <div>
                      <span className="text-green-400">Amplify Garage</span>
                    </div>
                    <div>
                      <span className="text-purple-400">Alien Rides Head of Engineering</span>
                    </div>
                    <div>
                      <span className="text-orange-400">USMC RADAR Technician</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mt-4 italic">Always learning, always building.</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-start">
                  <Button variant="ghost" size="icon" className="rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Mail className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full bg-gray-800/50 hover:bg-gray-700/50">
                    <Globe className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button
              variant="ghost"
              className="bg-gray-800/50 hover:bg-gray-700/50 rounded-full px-6"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }}
            >
              My Blog
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>

      {/* Blog section that scrolls over the fixed background */}
      <div className="relative z-30 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="mr-2">My Blog</span>
              <div className="h-px flex-1 bg-gray-700 ml-4"></div>
            </h2>

            <div className="space-y-8">
              <BlogPost
                title="Building a Modern Portfolio with Next.js"
                date="June 4, 2025"
                excerpt="Learn how I created this portfolio site using Next.js, Tailwind CSS, and deployed it to Vercel for free."
                tags={["Next.js", "React", "Tailwind"]}
                imageUrl="/placeholder.svg?height=200&width=400"
              />

              <BlogPost
                title="The Power of Custom Domains"
                date="May 28, 2025"
                excerpt="Why having a custom domain matters for your personal brand and how to set one up with Vercel."
                tags={["Domains", "Branding", "Vercel"]}
                imageUrl="/placeholder.svg?height=200&width=400"
              />

              <BlogPost
                title="Creating Scroll Animations with React"
                date="May 15, 2025"
                excerpt="A deep dive into creating smooth scroll animations and transitions using React hooks and CSS."
                tags={["React", "Animation", "CSS"]}
                imageUrl="/placeholder.svg?height=200&width=400"
              />

              <BlogPost
                title="My Development Journey"
                date="May 3, 2025"
                excerpt="How I started coding and the path that led me to where I am today. Lessons learned and advice for beginners."
                tags={["Career", "Learning", "Development"]}
                imageUrl="/placeholder.svg?height=200&width=400"
              />

              <BlogPost
                title="Design Principles for Developers"
                date="April 22, 2025"
                excerpt="Key design principles every developer should know to create beautiful and functional interfaces."
                tags={["Design", "UI/UX", "Principles"]}
                imageUrl="/placeholder.svg?height=200&width=400"
              />

              <BlogPost
                title="The Future of Web Development"
                date="April 10, 2025"
                excerpt="Exploring emerging trends and technologies that will shape the future of web development."
                tags={["Future", "Trends", "Web Dev"]}
                imageUrl="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
