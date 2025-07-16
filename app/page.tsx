"use client"

import Image from "next/image"
import { X, TextIcon as Telegram, Youtube, Facebook } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"
import { InteractiveImage } from "@/components/interactive-image"
import { AnimatedText } from "@/components/animated-text"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { useEffect, useState } from "react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const topBuyers = [
    { name: "PENGU", image: "/images/top-buyer-1.avif" },
    { name: "POLLY", image: "/images/top-buyer-2.avif" },
    { name: "RETSBA", image: "/images/top-buyer-3.avif" },
    { name: "ABSTER", image: "/images/top-buyer-4.avif" },
    { name: "CHENGU", image: "/images/top-buyer-5.avif" },
    { name: "SKIP", image: "/images/top-buyer-6.avif" },
    { name: "DPENGU", image: "/images/top-buyer-7.avif" },
    { name: "ALFA", image: "/images/top-buyer-8.avif" },
    { name: "BETA", image: "/images/top-buyer-9.avif" },
  ]

  const varkuArt = [
    "/images/varkus-art1.avif",
    "/images/art2.avif",
    "/images/art3.avif",
    "/images/art4.avif",
    "/images/art5.avif",
    "/images/art6.avif",
    "/images/art7.avif",
    "/images/art8.avif",
  ]

  const socialIcons = [
    { Icon: X, href: "#", label: "X (Twitter)" },
    { Icon: Telegram, href: "#", label: "Telegram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated cursor effect - only on desktop */}
      {!isMobile && (
        <div
          className="fixed w-4 h-4 bg-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
        />
      )}

      {/* Top Yellow Bar */}
      <div className="w-full h-2 md:h-4 bg-yellow-400" />

      <main className="flex-1">
        {/* Don Varku Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-center py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 min-h-[80vh] md:min-h-[60vh] text-center md:text-left">
          <ScrollAnimation className="flex-1 mb-8 md:mb-0 order-2 md:order-1">
            <AnimatedText
              text="DON VARKU"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight"
            />
          </ScrollAnimation>
          <ScrollAnimation
            delay={300}
            className="flex-1 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
          >
            {isMobile ? (
              <InteractiveImage
                src="/images/varkus-new.avif"
                alt="Don Varku"
                width={300}
                height={300}
                className="max-w-full h-auto"
              />
            ) : (
              <ParallaxSection speed={-0.2}>
                <InteractiveImage
                  src="/images/varkus-new.avif"
                  alt="Don Varku"
                  width={600}
                  height={600}
                  className="max-w-full h-auto"
                />
              </ParallaxSection>
            )}
          </ScrollAnimation>
          {!isMobile && <ScrollIndicator />}
        </section>

        {/* Varku Assassin Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-center py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 min-h-[80vh] md:min-h-[60vh] text-center md:text-right">
          <ScrollAnimation className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0 order-1">
            {isMobile ? (
              <InteractiveImage
                src="/images/vavakus-new.avif"
                alt="Varku Assassin"
                width={300}
                height={300}
                className="max-w-full h-auto"
              />
            ) : (
              <ParallaxSection speed={0.1}>
                <InteractiveImage
                  src="/images/vavakus-new.avif"
                  alt="Varku Assassin"
                  width={600}
                  height={600}
                  className="max-w-full h-auto"
                />
              </ParallaxSection>
            )}
          </ScrollAnimation>
          <ScrollAnimation delay={200} className="flex-1 order-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight max-w-2xl mx-auto md:mx-0 hover:text-yellow-400 transition-colors duration-500 px-2 md:px-0">
              VARKU WAS A TOP-TIER ASSASSIN WORKING FOR A COVERT ORGANIZATION. VARKU WAS THE SHADOW BEHIND COUNTLESS
              MISSIONS!! SWIFT, SILENT, AND UNMATCHED. HE HELD THE TITLE OF THE MOST FEARED AND ELITE OPERATIVE IN HIS
              COUNTRY.
            </p>
          </ScrollAnimation>
        </section>

        {/* Story Section */}
        <section className="relative flex flex-col items-center justify-center py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 min-h-[80vh] md:min-h-[60vh] text-center">
          <ScrollAnimation className="mb-8 w-full">
            <InteractiveImage
              src="/images/vavakus-3-new.avif"
              alt="Varku Sniper"
              width={isMobile ? 350 : 1200}
              height={isMobile ? 200 : 675}
              className="max-w-full h-auto mx-auto"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={300} className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight hover:text-yellow-400 transition-colors duration-500 px-2 md:px-0">
              BUT ONE JOB CHANGED EVERYTHING. I WAS SUPPOSED TO TAKE OUT A CARTEL BOSS IN PATAGONIA. INSTEAD, I SHOT HIS
              PET EMPEROR PENGUIN. TWICE. BY ACCIDENT. I WENT UNDERGROUND. WAY UNDERGROUND. LIKE... ANTARCTIC
              UNDERGROUND. COLD, QUIET, FORGOTTEN. UNTIL I MET THEM. THE PENGUINS.
            </p>
          </ScrollAnimation>
        </section>

        {/* Slush Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-center py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 min-h-[80vh] md:min-h-[60vh] text-center md:text-right">
          <ScrollAnimation className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0 order-1">
            {isMobile ? (
              <InteractiveImage
                src="/images/avjavuja-new.avif"
                alt="Slush Can"
                width={250}
                height={250}
                className="max-w-full h-auto"
              />
            ) : (
              <ParallaxSection speed={-0.1}>
                <InteractiveImage
                  src="/images/avjavuja-new.avif"
                  alt="Slush Can"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </ParallaxSection>
            )}
          </ScrollAnimation>
          <ScrollAnimation delay={200} className="flex-1 order-2">
            <AnimatedText
              text="WHEN LIFE RUGS YOU, SIP S.L.U.S.H"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter hover:text-yellow-400 transition-colors duration-500 leading-tight px-2 md:px-0"
            />
          </ScrollAnimation>
        </section>

        {/* Top Buyers Section */}
        <section className="py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 text-center">
          <ScrollAnimation>
            <AnimatedText
              text="S.L.U.S.H TOP BUYERS"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-10 md:mb-14"
            />
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {topBuyers.map((buyer, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="relative overflow-hidden rounded-full mb-3 md:mb-5 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                    <Image
                      src={buyer.image || "/placeholder.svg"}
                      alt={buyer.name}
                      width={isMobile ? 80 : 150}
                      height={isMobile ? 80 : 150}
                      className="object-cover transition-all duration-300 group-hover:brightness-110 w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-sm sm:text-base md:text-xl font-bold group-hover:text-yellow-400 group-active:text-yellow-400 transition-colors duration-300">
                    {buyer.name}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Varku's Art Section */}
        <section className="py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 text-center">
          <ScrollAnimation>
            <AnimatedText
              text="VARKU'S ART"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-10 md:mb-14"
            />
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {varkuArt.map((art, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-active:scale-95 group-hover:rotate-2">
                    <Image
                      src={art || "/placeholder.svg"}
                      alt={`Varku Art ${index + 1}`}
                      width={isMobile ? 120 : 200}
                      height={isMobile ? 120 : 200}
                      className="object-cover transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110 w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Join the Network Section */}
        <section className="relative py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 text-center">
          <ScrollAnimation className="relative w-full max-w-4xl mx-auto mb-8 md:mb-12">
            {isMobile ? (
              <div className="w-full">
                <Image
                  src="/images/varku-netflix.avif"
                  alt="Varku Netflix TV"
                  width={350}
                  height={200}
                  className="w-full h-auto object-contain mx-auto"
                  priority
                />
              </div>
            ) : (
              <ParallaxSection speed={0.2}>
                <InteractiveImage
                  src="/images/varku-netflix.avif"
                  alt="Varku Netflix TV"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </ParallaxSection>
            )}
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <AnimatedText
              text="JOIN THE VARKU'S NETWORK"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 md:mb-8"
            />
          </ScrollAnimation>
          <ScrollAnimation delay={500} className="flex justify-center gap-4 md:gap-8">
            {socialIcons.map(({ Icon, href, label }, index) => (
              <a key={index} href={href} aria-label={label} className="group relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full scale-0 group-hover:scale-100 group-active:scale-100 transition-transform duration-300" />
                <Icon className="relative w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black group-active:text-black transition-colors duration-300 transform group-hover:scale-110 group-active:scale-95 group-hover:rotate-12" />
              </a>
            ))}
          </ScrollAnimation>
        </section>
      </main>

      {/* Bottom Yellow Bar */}
      <div className="w-full h-2 md:h-4 bg-yellow-400" />
    </div>
  )
}
