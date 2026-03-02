import { Blocks, Shield, TrendingUp, Code, Users, Zap, ArrowUpRight } from "lucide-react";
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
      <div 
        className="glow-orb w-[500px] h-[500px] bg-primary/15"
        style={{ top: '20%', left: '-10%' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-[0.15em] font-medium">Services</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 max-w-2xl leading-tight">
              Everything you need to transform your business.
            </h2>
          </AnimatedSection>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="group relative p-7 rounded-2xl bg-card/40 border border-border/40 hover:border-primary/20 hover:bg-card/70 transition-all duration-500 hover-lift cursor-pointer"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-500">
                      <service.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary transition-all duration-300 translate-y-1 group-hover:translate-y-0" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
