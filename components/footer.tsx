import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 flex flex-col items-center justify-center text-center">
      <Image
        src="/images/shiba-inu-logo-blue.png"
        alt="Douyin Shiba Inu Logo"
        width={80}
        height={80}
        className="rounded-full border-2 border-black mb-4"
      />
      <p
        className="text-3xl md:text-4xl font-extrabold mb-4 text-black [text-shadow:_3px_3px_0_rgb(0_0_0_/_100%)]"
        style={{ fontFamily: "Creepster, cursive" }}
      >
        Bifang on Base
      </p>
      <div className="flex gap-4">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/telegram-icon.webp"
            alt="Telegram"
            width={40}
            height={40}
            // Removed border-2 border-black rounded-full as the new icon is already styled
          />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/twitter-icon.png"
            alt="X (Twitter)"
            width={40}
            height={40}
            // Removed border-2 border-black rounded-full as the new icon is already styled
          />
        </Link>
      </div>
    </footer>
  )
}
