import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "B+", prefix: "$", label: "Assets Advised" },
  { value: 100, suffix: "%", label: "Client Retention" },
  { value: 15, suffix: "+", label: "Countries Served" },
];

const CountUp = ({ value, suffix, prefix = "", inView }: { value: number; suffix: string; prefix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-8 h-[1px] bg-primary/50" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">By the Numbers</span>
            <div className="w-8 h-[1px] bg-primary/50" />
          </div>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-card py-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} inView={inView} />
              </div>
              <div className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
