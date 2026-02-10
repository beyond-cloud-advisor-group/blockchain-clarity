import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const tiers = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: "$2,500",
    annualPrice: "$2,000",
    description: "Perfect for early-stage projects looking to build a solid blockchain foundation.",
    features: [
      "Smart contract development",
      "Basic security audit",
      "Testnet deployment",
      "Email support",
      "1 blockchain network",
      "Monthly progress reports",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Professional",
    icon: Shield,
    monthlyPrice: "$7,500",
    annualPrice: "$6,000",
    description: "For growing protocols that need robust infrastructure and multi-chain reach.",
    features: [
      "Everything in Starter",
      "Advanced security auditing",
      "Multi-chain deployment",
      "DeFi protocol integration",
      "Priority support (48h SLA)",
      "Up to 5 blockchain networks",
      "Weekly strategy calls",
      "Performance optimization",
    ],
    cta: "Start Building",
    variant: "glow" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    description: "Tailored solutions for large-scale operations with dedicated infrastructure.",
    features: [
      "Everything in Professional",
      "Custom protocol architecture",
      "Unlimited blockchain networks",
      "24/7 dedicated support",
      "On-call incident response",
      "Governance framework design",
      "Compliance & regulatory guidance",
      "Dedicated engineering team",
    ],
    cta: "Contact Us",
    variant: "outline" as const,
    popular: false,
  },
];

const PricingCard = ({
  tier,
  index,
  isAnnual,
}: {
  tier: (typeof tiers)[0];
  index: number;
  isAnnual: boolean;
}) => {
  const Icon = tier.icon;

  return (
    <AnimatedSection delay={0.1 + index * 0.15}>
      <motion.div
        className={`relative h-full glass-card p-8 flex flex-col ${
          tier.popular
            ? "border-primary/40 shadow-[0_0_40px_hsl(350_100%_50%_/_0.1)]"
            : ""
        }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {tier.popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
              Most Popular
            </span>
          </div>
        )}

        <div className="mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {tier.description}
          </p>
        </div>

        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={isAnnual ? "annual" : "monthly"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold text-foreground inline-block"
            >
              {isAnnual ? tier.annualPrice : tier.monthlyPrice}
            </motion.span>
          </AnimatePresence>
          <span className="text-muted-foreground text-sm">
            {tier.monthlyPrice === "Custom" ? "" : isAnnual ? "/mo, billed yearly" : "/month"}
          </span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={tier.variant === "glow" ? "glow" : "heroOutline"}
          size="lg"
          className="w-full"
        >
          {tier.cta}
        </Button>
      </motion.div>
    </AnimatedSection>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 border-t border-border/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plans that scale with you
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From early-stage startups to enterprise protocols — choose the plan
              that fits your project's needs and ambitions.
            </p>

            <div className="inline-flex items-center gap-3 glass-card px-2 py-2 rounded-full">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isAnnual
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="absolute -top-2.5 -right-4 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold leading-none">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
