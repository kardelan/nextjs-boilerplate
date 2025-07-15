import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white p-4 border-b-2 border-black flex justify-between items-center">
      <div className="flex items-center gap-4">
        {/* Updated logo to use transparent image and wrapped in a div for circular blue background and border */}
        <div className="relative w-10 h-10 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/bifang-logo-transparent.png"
            alt="Bifang Logo"
            width={32} /* Adjusted size to fit within the 40x40 div */
            height={32} /* Adjusted size to fit within the 40x40 div */
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex gap-6 text-lg font-bold">
          <Link href="#about" className="hover:underline hover:text-gray-700 transition-colors">
            About
          </Link>
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
