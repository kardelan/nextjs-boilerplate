import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white p-4 border-b-2 border-black flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/images/shiba-inu-logo-blue.png"
          alt="Douyin Shiba Inu Logo"
          width={40}
          height={40}
          className="rounded-full border-2 border-black"
        />
        <nav className="hidden md:flex gap-6 text-lg font-bold">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#tokenomics" className="hover:underline">
            Tokenomics
          </Link>
          <Link href="#how-to-buy" className="hover:underline">
            How to buy
          </Link>
        </nav>
      </div>
      <Button className="bg-yellow-400 text-black font-bold border-2 border-black hover:bg-yellow-500">
        BUY BIFANG
      </Button>
    </header>
  )
}
