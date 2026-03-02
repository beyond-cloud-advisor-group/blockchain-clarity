import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeatureShowcase from "@/components/FeatureShowcase";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <FeatureShowcase />
      <Partners />
      <Testimonials />
      <Pricing />
      <Insights />
      <FAQ />
      <WhyUs />
      <Contact />
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
