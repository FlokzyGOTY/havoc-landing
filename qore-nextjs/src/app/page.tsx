import HeroSection from "@components/section/HeroSection";
import HeroVideo from "@components/layout/HeroVideo";
import FeatureSection from "@components/section/FeatureSection";
import BenefitSection from "@components/section/BenefitSection";
import HowToUseSection from "@components/section/HowToUseSection";
import PricingSection from "@components/section/PricingSection";
import TestimonialSection from "@components/section/TestimonialSection";
import FaqSection from "@components/section/FaqSection";
import CtaSection from "@components/section/CtaSection";
import Footer from "@components/footer/Footer";
import HackerTextEffect from "@/src/components/common/HackerTextEffect";
import Layout from "@/src/components/layout/Layout";

export default function Home() {
    return (
        <>
            <Layout showFooter={false}>
                <HackerTextEffect />
                <HeroVideo />
                <span className="br-line"></span>
                <HeroSection />
                <FeatureSection />
                <BenefitSection />
                <HowToUseSection />
                <PricingSection />
                <TestimonialSection />
                <FaqSection />
                <CtaSection />
                <Footer />
            </Layout>
        </>
    );
}
