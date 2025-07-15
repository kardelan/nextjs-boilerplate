import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowToBuySection() {
  return (
    <section id="how-to-buy" className="py-16 px-4 md:px-8 text-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)]"
        style={{ fontFamily: "Creepster, cursive" }}
      >
        How to buy BIFANG
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <Card className="border-2 border-black bg-white p-6 text-left">
          <CardContent className="p-0 space-y-6 text-lg font-medium">
            <div>
              <h3 className="text-xl font-bold mb-2">Setting Up an ETH Wallet:</h3>
              <p>
                First, choose and install a Ethereum-compatible wallet such as Metamask or Trustwallet. Once installed,
                create your wallet and ensure your private key or seed phrase is securely stored.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Acquiring Ethereum (ETH):</h3>
              <p>
                Purchase ETH from a cryptocurrency exchange like Coinbase or Binance. After purchasing, transfer the ETH
                to your Ethereum wallet.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Exchanging for BIFANG on Ape Store:</h3>
              <p>
                Visit Ape Store and connect your Ethereum wallet. Use the swap or trade feature on Ape Store to exchange
                your ETH for BIFANG tokens.
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="border-2 border-black bg-white p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-banner.png"
            alt="Bifang Douyin Shiba Inu Banner"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-12">
        <Button className="bg-yellow-400 text-black font-bold border-2 border-black hover:bg-yellow-500 px-8 py-6 text-lg">
          BUY BIFANG!
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-coin-updated.jpeg"
            alt="Bifang holding coin"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-trader-piano.jpeg"
            alt="Bifang trading piano"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-candlestick-field.jpeg"
            alt="Bifang with candlestick field"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-pool.jpeg"
            alt="Bifang relaxing in pool"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-gym.jpeg"
            alt="Bifang in gym"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image
            src="/images/bifang-money.jpeg"
            alt="Bifang with money background"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
