import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div 
        className="glow-orb w-[600px] h-[600px] bg-primary/12"
        style={{ bottom: '-20%', left: '30%' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-primary/50" />
              <span className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Contact</span>
              <div className="w-8 h-[1px] bg-primary/50" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Ready to transform{" "}
              <span className="gradient-text">your business?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              Let's discuss how blockchain technology can drive meaningful 
              transformation for your organization.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="hero" size="xl">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule a Call
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12 border-t border-border/40">
              <a 
                href="mailto:hello@beyondcloud.io" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-secondary/60 border border-border/40 flex items-center justify-center group-hover:bg-secondary group-hover:border-border transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">hello@beyondcloud.io</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-9 h-9 rounded-xl bg-secondary/60 border border-border/40 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Global / Remote</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
