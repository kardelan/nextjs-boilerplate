import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-16 px-4 md:px-8 text-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)]"
        style={{ fontFamily: "Creepster, cursive" }}
      >
        Tokenomics
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-black rounded-full overflow-hidden bg-white flex items-center justify-center mx-auto">
          <Image
            src="/images/shiba-inu-logo-blue.png"
            alt="Douyin Shiba Inu"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
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
      </div>
    </section>
  )
}
