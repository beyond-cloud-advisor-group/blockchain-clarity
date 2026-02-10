import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import sarahImg from "@/assets/testimonial-sarah.jpg";
import marcusImg from "@/assets/testimonial-marcus.jpg";
import elenaImg from "@/assets/testimonial-elena.jpg";
import jamesImg from "@/assets/testimonial-james.jpg";
import aishaImg from "@/assets/testimonial-aisha.jpg";

const testimonials = [
  {
    quote:
      "Their smart contract auditing saved us from a critical vulnerability before launch. Absolutely world-class expertise in blockchain security.",
    name: "Sarah Chen",
    role: "CTO, NexaFinance",
    photo: sarahImg,
  },
  {
    quote:
      "The DeFi protocol they built for us processed over $500M in the first quarter. Exceptional engineering and attention to detail.",
    name: "Marcus Rivera",
    role: "Founder, ChainVault",
    photo: marcusImg,
  },
  {
    quote:
      "From tokenomics design to deployment, they delivered a seamless experience. Our token launch was flawless thanks to their team.",
    name: "Elena Kowalski",
    role: "CEO, MetaLedger",
    photo: elenaImg,
  },
  {
    quote:
      "We needed a cross-chain bridge built in record time. They delivered ahead of schedule with zero security compromises.",
    name: "James Okonkwo",
    role: "Head of Product, BridgeX",
    photo: jamesImg,
  },
  {
    quote:
      "Their DAO governance framework transformed how our community makes decisions. Transparent, efficient, and beautifully crafted.",
    name: "Aisha Patel",
    role: "Community Lead, DecentraGov",
    photo: aishaImg,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useCallback((newIndex: number) => {
    setDirection(newIndex > active ? 1 : -1);
    setActive(newIndex);
  }, [active]);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
  };

  return (
    <section className="py-24 relative overflow-hidden">
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

        {/* Featured testimonial with arrows */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 relative">
            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 w-10 h-10 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 w-10 h-10 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 left-6 md:top-8 md:left-8" />

              <div className="min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 pt-8 md:pt-4 md:px-8">
                      "{testimonials[active].quote}"
                    </p>

                    <div className="flex items-center gap-4 md:px-8">
                      <img
                        src={testimonials[active].photo}
                        alt={testimonials[active].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-lg"
                      />
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
                    onClick={() => navigate(index)}
                    className="group relative p-1"
                    aria-label={`View testimonial ${index + 1}`}
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === active
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 w-2 group-hover:bg-muted-foreground/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Client photo strip */}
        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
            {testimonials.map((t, index) => (
              <motion.button
                key={t.name}
                onClick={() => navigate(index)}
                className="group relative"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    index === active
                      ? "border-primary shadow-[0_0_20px_hsl(350_100%_50%_/_0.25)] scale-110"
                      : "border-border/40 opacity-60 group-hover:opacity-90 group-hover:border-border"
                  }`}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <AnimatePresence>
                  {index === active && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center font-medium whitespace-nowrap"
                    >
                      {t.name.split(" ")[0]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
