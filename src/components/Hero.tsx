import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs - Raycast style */}
      <div 
        className="glow-orb w-[800px] h-[800px] bg-gradient-to-br from-primary/60 via-orange-500/40 to-transparent animate-pulse-glow"
        style={{ top: '-20%', left: '10%' }}
      />
      <div 
        className="glow-orb w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 via-teal-500/20 to-transparent animate-pulse-glow"
        style={{ bottom: '-10%', right: '5%', animationDelay: '3s' }}
      />
      <div 
        className="glow-orb w-[400px] h-[400px] bg-gradient-to-br from-primary/40 to-pink-500/30 animate-pulse-glow"
        style={{ top: '30%', right: '20%', animationDelay: '1.5s' }}
      />

      {/* Diagonal gradient lines effect */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-[200%] h-[200%] -left-1/2 -top-1/2"
          style={{
            background: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              hsl(350 100% 50% / 0.03) 80px,
              hsl(350 100% 50% / 0.03) 81px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 animate-fade-up text-balance">
            Building the future,
            <br />
            <span className="gradient-text">beyond the cloud.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-1 text-balance">
            A forward-thinking advisory firm helping enterprises unlock 
            blockchain's full potential. From strategy to implementation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Version/Trust badge */}
          <div className="mt-16 animate-fade-up-delay-3">
            <p className="text-xs text-muted-foreground/60">
              Trusted by 50+ enterprises worldwide · $2B+ in assets advised
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
