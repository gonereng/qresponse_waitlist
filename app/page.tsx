import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
