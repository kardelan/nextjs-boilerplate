"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowUp, Twitter, Copy } from "lucide-react"
import Image from "next/image"

export default function DobbieWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard.")
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-blue-900/95 backdrop-blur-sm border-b border-blue-600/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/dobbie-logo.webp"
                alt="Dobbie Logo"
                width={56}
                height={56}
                className="rounded-full border-2 border-white/20 hover:border-white/40 transition-all"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              <button
                onClick={() => scrollToSection("banner")}
                className="text-white hover:text-blue-300 transition-colors font-semibold text-lg tracking-wide"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-300 transition-colors font-semibold text-lg tracking-wide"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="text-white hover:text-blue-300 transition-colors font-semibold text-lg tracking-wide"
              >
                TOKENOMICS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                JOIN US
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-blue-600/30">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("banner")}
                  className="text-left text-white hover:text-blue-300 transition-colors font-semibold py-2"
                >
                  HOME
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-white hover:text-blue-300 transition-colors font-semibold py-2"
                >
                  ABOUT US
                </button>
                <button
                  onClick={() => scrollToSection("tokenomics")}
                  className="text-left text-white hover:text-blue-300 transition-colors font-semibold py-2"
                >
                  TOKENOMICS
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold w-fit"
                >
                  JOIN US
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => scrollToSection("banner")}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-all z-50 shadow-lg hover:shadow-xl"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Hero Section */}
      <section id="banner" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">DOBBIE</h1>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <p className="text-xl lg:text-2xl font-semibold leading-relaxed text-blue-100">
                    LISTEN UP, INTERNET! I'M DOBBIE - THE DUGGO WHOSE HOOMAN BUILT BASE NETWORK FROM SCRATCH. THAT'S
                    RIGHT, I'M MORE THAN JUST A GOOD BOY - I'M THE GOOD BOY OF BASE!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-sm lg:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <Link
                    href="https://www.datadex.me/#/swap?outputCurrency=0x37E14058582594FEB08824b81c7E5810576b5306"
                    target="_blank"
                  >
                    BUY NOW
                  </Link>
                </Button>
                <Button
                  onClick={() => copyToClipboard("0x37E14058582594FEB08824b81c7E5810576b5306")}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-xl font-mono text-xs lg:text-sm transition-all shadow-lg hover:shadow-xl"
                >
                  <Copy size={16} className="mr-2" />
                  0x37...306
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-110"></div>
                <Image
                  src="/images/dobbie-cool.webp"
                  alt="Dobbie Character"
                  width={400}
                  height={400}
                  className="relative z-10 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-2xl"></div>
                <Image
                  src="/images/dobbie-sitting.jpeg"
                  alt="Dobbie Sitting"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-3xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-5xl lg:text-6xl font-black text-center lg:text-left">DOBBIE ORIGINS</h2>
              <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-blue-100">
                <p>
                  YO, HUMANS! WHILE OTHER DOGS ARE BUSY BEING JUST "PETS", I'M THE CO-PILOT OF BASE NETWORK'S VISION. MY
                  HUMAN? THE FOUNDER. MY MISSION? DISRUPTING THE CRYPTO WORLD.
                </p>
                <p>MY ORIGIN STORY? PICTURE THIS: DOBBIE. A TECH VISIONARY'S BEST FRIEND. ABSOLUTE LEGEND.</p>
                <p>
                  I'VE WATCHED MY HUMAN BUILD BASE NETWORK FROM THE GROUND UP, AND LET ME TELL YOU - WE'RE NOT HERE TO
                  PLAY. WE'RE HERE TO REVOLUTIONIZE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black mb-4">TOKENOMICS</h2>
              <p className="text-xl text-blue-200">Simple, Fair, and Transparent</p>
            </div>

            {/* Supply Card */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <Image
                        src="/images/dobbie-logo.webp"
                        alt="Dobbie Logo"
                        width={80}
                        height={80}
                        className="rounded-full border-2 border-white/30"
                      />
                      <span className="text-blue-300 font-bold text-2xl">SUPPLY</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                      1 BILLION TOKENS, NO CAP!
                    </h3>
                    <div className="text-blue-100 space-y-3 text-lg">
                      <p className="font-bold text-xl">MATH FOR NORMIES:</p>
                      <p>• TOTAL SUPPLY: 1,000,000,000</p>
                      <p>• VIBE LEVEL: MAXIMUM</p>
                      <p>• DOUBT LEVEL: ZERO</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl"></div>
                      <Image
                        src="/images/doebby-gift.gif"
                        alt="Dobbie Sitting"
                        width={300}
                        height={300}
                        className="relative z-10 mx-auto hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Taxes Card */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center order-2 lg:order-1">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl"></div>
                      <Image
                        src="/images/dobbie-diamond.webp"
                        alt="Dobbie with Diamond"
                        width={300}
                        height={300}
                        className="relative z-10 mx-auto hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <span className="text-blue-300 font-bold text-2xl">TAXES</span>
                    <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">TAXES? NAH.</h3>
                    <div className="text-blue-100 space-y-3 text-lg">
                      <p className="font-bold text-xl">0% TAXES = 100% INNOVATION</p>
                      <p>DID OTHER CRYPTO PROJECTS TELL YOU TAXES ARE COOL? THEY LIED.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black mb-4">JOIN ME AND MY HOOMAN</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  DOBBIE IS READY TO GO TO MOON!! LEGGOOO.....
                </h3>
                <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-blue-100">
                  <p>BASE NETWORK ISN'T JUST A BLOCKCHAIN. IT'S OUR KINGDOM.</p>
                  <p>YOU'RE NOT JUST BUYING A TOKEN. YOU'RE JOINING THE VISION OF A FOUNDER AND HIS LEGENDARY DOG.</p>
                  <p>ARE YOU BRAVE ENOUGH TO RIDE WITH THE MOST INNOVATIVE DUO IN CRYPTO HISTORY?</p>
                  <div className="pt-4">
                    <p className="text-blue-200">BARK WITH PURPOSE,</p>
                    <p className="font-bold text-blue-300 text-2xl">-DOBBIE</p>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start space-x-8 pt-8">
                  <Link
                    href="https://twitter.com/"
                    target="_blank"
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Twitter size={32} className="text-white" />
                  </Link>
                  <Link
                    href="https://t.me/DobbieVana"
                    target="_blank"
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.507-1.114 1.771-1.114 1.771-.633.302-1.507-.169-1.507-.169l-3.173-2.345-1.507-1.114-.633-.302c-.896-.633-.896-1.507 0-1.771l7.842-3.173c.633-.302 1.204 0 1.507.633.169.302.169.633 0 .896l-1.114 6.728s-.169.896-.633.896c-.302 0-.633-.302-.633-.302l-2.345-1.771-1.204-.896c-.302-.302-.302-.633 0-.896l4.287-3.173c.302-.302.633-.302.896 0 .302.302.302.633 0 .896z" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="text-center order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl"></div>
                  <Image
                    src="/images/rocket.webp"
                    alt="Rocket to Moon"
                    width={400}
                    height={400}
                    className="relative z-10 mx-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-blue-950">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/images/dobbie-peace.webp"
              alt="Dobbie Peace"
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-white/20 hover:border-white/40 transition-all"
            />
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white/80 mb-8">DOBBIE</h1>
          <p className="text-blue-300 text-lg">© 2024 Dobbie Token. Built on Base Network with ❤️</p>
        </div>
      </footer>
    </div>
  )
}
