import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Their smart contract auditing saved us from a critical vulnerability before launch. Absolutely world-class expertise in blockchain security.",
    name: "Sarah Chen",
    role: "CTO, NexaFinance",
    avatar: "SC",
  },
  {
    quote:
      "The DeFi protocol they built for us processed over $500M in the first quarter. Exceptional engineering and attention to detail.",
    name: "Marcus Rivera",
    role: "Founder, ChainVault",
    avatar: "MR",
  },
  {
    quote:
      "From tokenomics design to deployment, they delivered a seamless experience. Our token launch was flawless thanks to their team.",
    name: "Elena Kowalski",
    role: "CEO, MetaLedger",
    avatar: "EK",
  },
  {
    quote:
      "We needed a cross-chain bridge built in record time. They delivered ahead of schedule with zero security compromises.",
    name: "James Okonkwo",
    role: "Head of Product, BridgeX",
    avatar: "JO",
  },
  {
    quote:
      "Their DAO governance framework transformed how our community makes decisions. Transparent, efficient, and beautifully crafted.",
    name: "Aisha Patel",
    role: "Community Lead, DecentraGov",
    avatar: "AP",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
        </AnimatedSection>

        {/* Featured testimonial */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-card p-8 md:p-12 relative">
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 left-6 md:top-8 md:left-8" />

              <div className="min-h-[180px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 pt-8 md:pt-4 md:px-8">
                      "{testimonials[active].quote}"
                    </p>

                    <div className="flex items-center gap-4 md:px-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonials[active].avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonials[active].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[active].role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className="group relative p-1"
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === active
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Mini cards row */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {testimonials.slice(0, 3).map((t, index) => (
              <motion.button
                key={t.name}
                onClick={() => setActive(index)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                  index === active
                    ? "bg-card border-primary/30 shadow-[0_0_30px_hsl(350_100%_50%_/_0.1)]"
                    : "bg-card/40 border-border/30 hover:border-border/60 hover:bg-card/60"
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  "{t.quote.slice(0, 80)}..."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-primary">
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
