import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs - Raycast style */}
      <motion.div 
        className="glow-orb w-[800px] h-[800px] bg-gradient-to-br from-primary/60 via-orange-500/40 to-transparent"
        style={{ top: '-20%', left: '10%' }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="glow-orb w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 via-teal-500/20 to-transparent"
        style={{ bottom: '-10%', right: '5%' }}
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      />
      <motion.div 
        className="glow-orb w-[400px] h-[400px] bg-gradient-to-br from-primary/40 to-pink-500/30"
        style={{ top: '30%', right: '20%' }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
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
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Building the future,
            <br />
            <span className="gradient-text">beyond the cloud.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            A forward-thinking advisory firm helping enterprises unlock 
            blockchain's full potential. From strategy to implementation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </motion.div>

          {/* Version/Trust badge */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-xs text-muted-foreground/60">
              Trusted by 50+ enterprises worldwide · $2B+ in assets advised
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
