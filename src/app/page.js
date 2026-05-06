import Image from "next/image";
// import Loader from "../../components/page";
// import Menu from "../../components/Menu";

// import Hero from "../../components/Hero";
// import DemoList from "../../components/DemoList";

import ParallaxDivider from "../../components/ParallaxDivider";
import AboutSection from "../../components/AboutSection";
import StatsCards from "../../components/StatsCards";
import MarqueeOneLine from "../../components/MarqueeOneLine";
import FeaturedProjects from "../../components/FeaturedProjects";
import ServicesStack from "../../components/ServicesStack";
import ApproachPhilosophy from "../../components/ApproachPhilosophy";
import MarqueeImages from "../../components/MarqueeImages";
import AwardsPublications from "../../components/AwardsPublications";
import TestimonialsSlider from "../../components/TestimonialsSlider";
import PartnersMarquee from "../../components/PartnersMarquee";
import PartnersCards from "../../components/PartnersCards";

import CTASection from "../../components/CTASection";

import BackToTop from "../../components/BackToTop";
import HeroSection from "../../components/Herosection";
import BlogPreview from "../../components/BlogPreview";

export default function Home() {
  return (
    <>
      {/* <Loader /> */}
      {/* <Menu /> */}

      {/* <Hero /> */}
      <HeroSection />
      <ParallaxDivider />
      <AboutSection />
      <StatsCards />
      <MarqueeOneLine />
      <FeaturedProjects />
      <ServicesStack />
      <ApproachPhilosophy />
      <MarqueeImages />
      <AwardsPublications />
      <TestimonialsSlider />

      <PartnersCards />
      <BlogPreview />
      <CTASection />

      <BackToTop />
    </>
  );
}
