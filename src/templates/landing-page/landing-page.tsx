import { CallToAction, CustomerStorySection, FeatureSection, HeroScection, SupportSection } from "@/templates/landing-page/sections"

export const LandingPage = () => {
    return (
        <article className="flex flex-col gap-10 md:gap-20">
            <HeroScection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
            <CallToAction />
        </article>
    )
}