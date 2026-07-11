import FAQ from "@/Sections/FAQ";
import Hero from "@/Sections/Hero";
import Analytics from "@/Sections/Analytics";
import OurOutlets from "@/Sections/OurOutlets";
import PrivacyPolicy from "@/Sections/PrivacyPolicy";
import WhyChooseHunger from "@/Sections/WhyChooseHunger";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurOutlets />
      <WhyChooseHunger />
      <Analytics />
      <FAQ />
      <PrivacyPolicy />
    </div>
  );
}
