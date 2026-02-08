import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Showcase } from "@/components/sections/Showcase";
import { Work } from "@/components/sections/Work";
import { Marquee } from "@/components/sections/Marquee";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-dark text-white selection:bg-brand-gold selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <Showcase />
      <Marquee />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
