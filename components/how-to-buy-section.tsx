"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HowToBuySection() {
  return (
    <section id="how-to-buy" className="py-16 px-4 md:px-8 text-center container mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-medium mb-12 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)] font-sans" /* Changed font-extrabold to font-medium */
      >
        How to buy BIFANG
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-2 border-black bg-white p-6 text-left">
            <CardContent className="p-0 space-y-6 text-lg font-normal">
              {" "}
              {/* Changed font-medium to font-normal */}
              <div>
                <h3 className="text-xl font-medium mb-2">Setting Up an ETH Wallet:</h3>{" "}
                {/* Changed font-bold to font-medium */}
                <p>
                  First, choose and install a Ethereum-compatible wallet such as Metamask or Trustwallet. Once
                  installed, create your wallet and ensure your private key or seed phrase is securely stored.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Acquiring Ethereum (ETH):</h3>{" "}
                {/* Changed font-bold to font-medium */}
                <p>
                  Purchase ETH from a cryptocurrency exchange like Coinbase or Binance. After purchasing, transfer the
                  ETH to your Ethereum wallet.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Exchanging for BIFANG on Ape Store:</h3>{" "}
                {/* Changed font-bold to font-medium */}
                <p>
                  Visit Ape Store and connect your Ethereum wallet. Use the swap or trade feature on Ape Store to
                  exchange your ETH for BIFANG tokens.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-2 border-black bg-white p-4 flex items-center justify-center"
        >
          <Image
            src="/images/bifang-banner.jpeg"
            alt="Bifang Banner"
            width={600}
            height={300}
            className="object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-4 mt-12"
      >
        <Button className="bg-yellow-400 text-black font-medium border-2 border-black hover:bg-yellow-500 transition-colors px-8 py-6 text-lg">
          {" "}
          {/* Changed font-bold to font-medium */}
          BUY BIFANG!
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
      >
        <Image
          src="/images/bifang-coin-updated.jpeg"
          alt="Bifang holding coin"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
        <Image
          src="/images/bifang-trader-piano.jpeg"
          alt="Bifang trading piano"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
        <Image
          src="/images/bifang-candlestick-field.jpeg"
          alt="Bifang with candlestick field"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
        <Image
          src="/images/bifang-pool.jpeg"
          alt="Bifang relaxing in pool"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
        <Image
          src="/images/bifang-gym.jpeg"
          alt="Bifang in gym"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
        <Image
          src="/images/bifang-money.jpeg"
          alt="Bifang with money background"
          width={200}
          height={200}
          className="object-contain mx-auto"
        />
      </motion.div>
    </section>
  )
}
