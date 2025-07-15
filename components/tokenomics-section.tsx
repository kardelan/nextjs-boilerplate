"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-16 px-4 md:px-8 text-center container mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)] font-sans"
      >
        Tokenomics
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-black rounded-full overflow-hidden bg-white flex items-center justify-center mx-auto"
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
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="border-2 border-black bg-white p-6 text-left">
            <CardContent className="p-0 space-y-4 text-lg font-medium">
              <p>
                <span className="font-bold">Total Supply:</span> 1,000,000,000 BIFANG
              </p>
              <p>
                <span className="font-bold">TAX:</span> 0%
              </p>
              <p>
                <span className="font-bold">LP BURNT:</span> LP is burnt to make it Fully Community-owned, project is
                decentralized with no central authority.
              </p>
              <p>
                <span className="font-bold">RENOUNCED:</span> The contract is Renounced to ensure security for holders.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
