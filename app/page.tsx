import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TokenomicsSection from "@/components/tokenomics-section"
import HowToBuySection from "@/components/how-to-buy-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen text-black">
      <Header />
      <main>
        <HeroSection />
        <TokenomicsSection />
        <HowToBuySection />
      </main>
      <Footer />
    </div>
  )
}
