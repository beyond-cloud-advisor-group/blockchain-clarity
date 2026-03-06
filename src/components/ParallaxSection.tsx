import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Array of glow orb configs */
  orbs?: Array<{
    color: string;
    size: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    speed?: number;
  }>;
}

const ParallaxSection = ({ children, className = "", id, orbs = [] }: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      {orbs.map((orb, i) => (
        <ParallaxOrb key={i} orb={orb} scrollYProgress={scrollYProgress} />
      ))}
      {children}
    </section>
  );
};

function ParallaxOrb({
  orb,
  scrollYProgress,
}: {
  orb: ParallaxSectionProps["orbs"][number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const speed = orb.speed ?? 0.3;
  const y = useTransform(scrollYProgress, [0, 1], [speed * -120, speed * 120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);

  return (
    <motion.div
      className="glow-orb pointer-events-none"
      style={{
        y,
        scale,
        width: orb.size,
        height: orb.size,
        top: orb.top,
        left: orb.left,
        right: orb.right,
        bottom: orb.bottom,
        background: orb.color,
      }}
    />
  );
}

export default ParallaxSection;
