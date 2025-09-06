import Hero from "@/components/hero";
import HowItWorks from "@/components/howitworks";
import ScrollingBanner from "@/components/scrollingbanner";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

const page = () => {
  return (
    <>
      <Hero />
      <ScrollingBanner />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Footer />
    </>
  );
};

export default page;
