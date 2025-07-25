import { CustomerStorySection } from "../components/customer-story-section";
import { FeatureSection } from "../components/feature-section";
import { HeroScection } from "../components/hero-section";
import { SupportSection } from "../components/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroScection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
      </article>
    </>
  );
}
