import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const stats = [
    { value: "50+", label: "Projects delivered" },
    { value: "$2B+", label: "Assets advised" },
    { value: "100%", label: "Client retention" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">About</span>
            </div>
          </AnimatedSection>

          {/* Main Content */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                We redefine how businesses harness{" "}
                <span className="gradient-text">blockchain technology.</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <AnimatedSection delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Beyond Cloud Advisors, we guide clients through the evolving 
                  landscape of Web3, decentralized systems, and digital asset ecosystems. 
                  We combine deep technical expertise with strategic foresight.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our philosophy is simple: innovation with clarity. We go beyond 
                  trends to deliver practical strategies and sustainable value in 
                  a rapidly changing digital economy.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Stats Grid */}
          <div 
            ref={statsRef}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
