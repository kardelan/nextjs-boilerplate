import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section" // Import the new AboutSection
import TokenomicsSection from "@/components/tokenomics-section"
import HowToBuySection from "@/components/how-to-buy-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen text-black">
      <Header />
      <main>
        <HeroSection />
        <AboutSection /> {/* Add the AboutSection here */}
        <TokenomicsSection />
        <HowToBuySection />
      </main>
      <Footer />
    </div>
  )
}
