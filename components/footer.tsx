"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 md:px-8 flex flex-col items-center justify-center text-center container mx-auto max-w-7xl"
    >
      <div className="relative w-20 h-20 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center overflow-hidden mb-4">
        <Image
          src="/images/bifang-logo-transparent.png"
          alt="Bifang Logo"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <p className="text-3xl md:text-4xl font-medium mb-4 text-black [text-shadow:_3px_3px_0_rgb(0_0_0_/_100%)] font-sans">
        {" "}
        {/* Changed font-extrabold to font-medium */}
        Bifang on Base
      </p>
      <div className="flex gap-4">
        <Link
          href="https://t.me/bifangonbase"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image src="/images/telegram-icon.webp" alt="Telegram" width={40} height={40} />
        </Link>
        <Link
          href="https://x.com/bifangonbase_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image src="/images/twitter-icon.png" alt="X (Twitter)" width={40} height={40} />
        </Link>
      </div>
    </motion.footer>
  )
}
