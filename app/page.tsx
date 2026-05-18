import Footer from "@/components/layout/Footer";
import Academic from "@/components/sections/Academic";
import BiographySection from "@/components/sections/Biography";
import Hero from "@/components/sections/Hero";
import PublicationsSection from "@/components/sections/Publication";

export default function Home() {
  return (
    <main>
      <Hero />
      <BiographySection />
      {/* <PublicationsSection /> */}
      <Academic />
      <Footer />
    </main>
  );
}
