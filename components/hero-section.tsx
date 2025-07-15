"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 text-center container mx-auto max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-black rounded-full overflow-hidden bg-white flex items-center justify-center mb-8"
      >
        {/* Updated logo to use transparent image */}
        <Image
          src="/images/bifang-logo-transparent.png"
          alt="Bifang Logo"
          width={250}
          height={250}
          className="object-contain"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold mb-2 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)] font-sans"
      >
        Bifang on Base
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl md:text-3xl font-bold mb-8 text-black [text-shadow:_2px_2px_0_rgb(0_0_0_/_100%)] font-sans"
      >
        BIFANG
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-4 mb-8"
      >
        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Image src="/images/telegram-icon.webp" alt="Telegram" width={48} height={48} />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <Image src="/images/twitter-icon.png" alt="X (Twitter)" width={48} height={48} />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Button className="bg-yellow-400 text-black font-bold border-2 border-black hover:bg-yellow-500 transition-colors px-8 py-4 text-xl">
          BUY $BIFANG
        </Button>
      </motion.div>
    </section>
  )
}
