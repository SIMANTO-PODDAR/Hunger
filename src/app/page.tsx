import Contact from "@/Sections/Contact";
import FAQ from "@/Sections/FAQ";
import Hero from "@/Sections/Hero";
import WhyChooseHunger from "@/Sections/WhyChooseHunger";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseHunger />
      <Contact />
      <FAQ />
    </div>
  );
}
