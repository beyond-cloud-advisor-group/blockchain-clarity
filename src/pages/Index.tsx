import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeatureShowcase from "@/components/FeatureShowcase";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      <Insights />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
