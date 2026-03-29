import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Vision } from "@/components/vision";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Vision />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
