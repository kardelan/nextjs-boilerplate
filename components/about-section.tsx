"use client"

import { Button } from "@/components/ui/button"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-8 text-center container mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)] font-sans"
      >
        Who is Bifang on Base?
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-2 border-black bg-white p-6 text-left h-full flex flex-col justify-center">
            <CardContent className="p-0 space-y-4 text-lg font-medium">
              <p>
                Bifang on Base is a community-driven project built on the secure and scalable Base network. It aims to
                bring fun and utility to the crypto space with its unique approach.
              </p>
              <p>
                Our mission is to create a vibrant ecosystem where holders can engage, contribute, and grow together. We
                believe in transparency, decentralization, and fostering a strong community spirit.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="border-2 border-black bg-white p-6 text-center h-full flex flex-col items-center justify-center">
            <CardContent className="p-0 space-y-4 text-lg font-medium">
              {/* Updated logo to use transparent image and wrapped in a div for circular blue background and border */}
              <div className="relative w-32 h-32 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center overflow-hidden mx-auto mb-4">
                <Image
                  src="/images/bifang-logo-transparent.png"
                  alt="Bifang Logo"
                  width={100} /* Adjusted size to fit within the 120x120 div */
                  height={100} /* Adjusted size to fit within the 120x120 div */
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Your Bifang Community</h3>
              <p className="text-sm text-gray-600">Join us on our journey!</p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="text-2xl font-bold">100k+</div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-2xl font-bold">10k+</div>
              </div>
              <div className="flex justify-around text-sm text-gray-600">
                <span>Members</span>
                <span>Contributors</span>
                <span>Followers</span>
              </div>
              <Button className="bg-yellow-400 text-black font-bold border-2 border-black hover:bg-yellow-500 transition-colors px-6 py-3 mt-6">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
