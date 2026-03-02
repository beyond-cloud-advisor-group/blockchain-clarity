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
      <div 
        className="glow-orb w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 to-teal-500/8"
        style={{ top: '10%', right: '-15%' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-primary" />
                  <span className="text-sm text-muted-foreground uppercase tracking-[0.15em] font-medium">Why Us</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
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

              <div ref={listRef} className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/30 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={listInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                  >
                    <div className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
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
                {/* Concentric circles with refined styling */}
                {[0, 8, 16, 24].map((inset, i) => (
                  <motion.div 
                    key={i}
                    className="absolute rounded-full border border-border/30"
                    style={{ inset: `${inset * 4}px` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  />
                ))}
                
                {/* Center glow */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visualInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-[0_0_60px_hsl(350_100%_50%_/_0.15)]">
                    <span className="text-3xl font-display font-bold gradient-text">BCA</span>
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
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-xl font-display font-bold">24/7</div>
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
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="text-xl font-display font-bold">100%</div>
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
