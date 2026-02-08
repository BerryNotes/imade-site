import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Screenshots } from "@/components/screenshots";
import { HowItWorks } from "@/components/how-it-works";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Screenshots />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
