import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-50px" });
  const visualRef = useRef(null);
  const visualInView = useInView(visualRef, { once: true, margin: "-100px" });

  const reasons = [
    "Deep technical expertise in blockchain protocols and cryptography",
    "Strategic foresight to position your business for long-term success",
    "Transparent communication with honest assessments",
    "Scalable solutions from startup to enterprise",
  ];

  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      {/* Gradient orb */}
      <div 
        className="glow-orb w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-teal-500/10"
        style={{ top: '10%', right: '-15%' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              {/* Section Label */}
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-primary" />
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Why Us</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Innovation meets{" "}
                  <span className="gradient-text">experience.</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We go beyond trends to deliver practical strategies and sustainable 
                  value in a rapidly changing digital economy.
                </p>
              </AnimatedSection>

              <div ref={listRef} className="space-y-5">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={listInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <motion.div 
              ref={visualRef}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={visualInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Concentric circles */}
                <motion.div 
                  className="absolute inset-0 rounded-full border border-border/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.div 
                  className="absolute inset-8 rounded-full border border-border/40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-16 rounded-full border border-border/50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-24 rounded-full border border-border/60"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                
                {/* Center glow */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <span className="text-3xl font-bold gradient-text">BCA</span>
                  </div>
                </motion.div>

                {/* Floating stats */}
                <motion.div 
                  className="absolute top-8 right-8 glass-card px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={visualInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="absolute bottom-8 left-8 glass-card px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={visualInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
