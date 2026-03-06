import { Blocks, Shield, TrendingUp, Code, Users, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  const services = [
    {
      icon: Blocks,
      title: "Blockchain Strategy",
      description: "Comprehensive roadmaps for blockchain adoption tailored to your business objectives.",
    },
    {
      icon: Code,
      title: "Architecture Design",
      description: "Scalable and secure system architecture for decentralized applications.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Rigorous security audits and regulatory compliance frameworks.",
    },
    {
      icon: TrendingUp,
      title: "Tokenomics Design",
      description: "Economic modeling and token design for sustainable value creation.",
    },
    {
      icon: Users,
      title: "Web3 Consulting",
      description: "Expert guidance on DAO governance and DeFi integration.",
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "End-to-end development from prototype to production.",
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      {/* Subtle glow */}
      <div 
        className="glow-orb w-[500px] h-[500px] bg-primary/20"
        style={{ top: '20%', left: '-10%' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Services</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
              Everything you need to transform your business.
            </h2>
          </AnimatedSection>

          {/* Services Grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.08 * index,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="group p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-border hover:bg-secondary/50 transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
