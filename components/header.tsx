import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white p-4 border-b-2 border-black flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/images/shiba-inu-logo-blue.png"
          alt="Bifang Logo"
          width={40}
          height={40}
          className="rounded-full border-2 border-black"
        />
        <nav className="hidden md:flex gap-6 text-lg font-bold">
          <Link href="#tokenomics" className="hover:underline hover:text-gray-700 transition-colors">
            Tokenomics
          </Link>
          <Link href="#how-to-buy" className="hover:underline hover:text-gray-700 transition-colors">
            How to buy
          </Link>
        </nav>
      </div>
      <Button className="bg-yellow-400 text-black font-bold border-2 border-black hover:bg-yellow-500 transition-colors px-6 py-3">
        BUY BIFANG
      </Button>
    </header>
  )
}
