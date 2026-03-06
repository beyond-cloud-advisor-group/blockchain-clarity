import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What blockchain platforms do you support?",
    answer:
      "We work across all major EVM-compatible chains including Ethereum, Polygon, Arbitrum, and Optimism, as well as non-EVM networks like Solana and Cosmos. Our team adapts to whatever technology best fits your project's requirements.",
  },
  {
    question: "How long does a typical smart contract audit take?",
    answer:
      "A standard audit takes 2–4 weeks depending on complexity. Simple token contracts can be completed in under a week, while complex DeFi protocols with multiple interacting contracts may require 4–6 weeks for a thorough review.",
  },
  {
    question: "What's included in your DeFi protocol development?",
    answer:
      "Our full-cycle DeFi development covers protocol architecture, smart contract engineering, front-end integration, tokenomics modeling, security auditing, testnet deployment, and mainnet launch support. We also provide post-launch monitoring and maintenance.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. Every project includes 30 days of post-launch support. We also offer extended maintenance plans with 24/7 monitoring, incident response, upgrade management, and priority access to our engineering team.",
  },
  {
    question: "How do you handle security and confidentiality?",
    answer:
      "All engagements begin with a mutual NDA. We follow industry-leading security practices including encrypted communications, access-controlled repositories, and secure key management. Our team has never had a security breach across 50+ delivered projects.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price and time-and-materials engagements. Fixed-price works best for well-defined scopes like audits and token launches. For ongoing development or exploratory projects, T&M provides more flexibility. Contact us for a custom quote.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 border-t border-border/30 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary/6 top-0 right-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left column */}
          <AnimatedSection>
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Everything you need to know about our blockchain services. Can't
                find what you're looking for?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                Get in touch with our team →
              </a>
            </div>
          </AnimatedSection>

          {/* Right column — Accordion */}
          <AnimatedSection delay={0.15}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-card px-6 border-border/40 data-[state=open]:border-primary/20 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
