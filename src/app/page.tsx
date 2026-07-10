import FAQ from "@/Sections/FAQ";
import Hero from "@/Sections/Hero";
import OurOutlets from "@/Sections/OurOutlets";
import PrivacyPolicy from "@/Sections/PrivacyPolicy";
import WhyChooseHunger from "@/Sections/WhyChooseHunger";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseHunger />
      <OurOutlets />
      <FAQ />
      <PrivacyPolicy />
    </div>
  );
}
