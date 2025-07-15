import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 text-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-black rounded-full overflow-hidden bg-white flex items-center justify-center">
        <Image
          src="/images/shiba-inu-logo-blue.png"
          alt="Douyin Shiba Inu"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>
      <h1
        className="text-5xl md:text-7xl font-extrabold mt-8 mb-2 text-black [text-shadow:_4px_4px_0_rgb(0_0_0_/_100%)]"
        style={{ fontFamily: "Creepster, cursive" }}
      >
        Bifang on Base
      </h1>
      <p className="text-2xl md:text-3xl font-bold mb-8 text-black [text-shadow:_2px_2px_0_rgb(0_0_0_/_100%)]">
        BIFANG
      </p>
      <div className="flex gap-4 mb-8">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/telegram-icon.webp"
            alt="Telegram"
            width={48}
            height={48}
            // Removed border-2 border-black rounded-full as the new icon is already styled
          />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/twitter-icon.png"
            alt="X (Twitter)"
            width={48}
            height={48}
            // Removed border-2 border-black rounded-full as the new icon is already styled
          />
        </Link>
      </div>
      <Button className="bg-yellow-400 text-black font-bold border-2 border-black hover:bg-yellow-500 px-8 py-4 text-xl">
        BUY $BIFANG
      </Button>
    </section>
  )
}
