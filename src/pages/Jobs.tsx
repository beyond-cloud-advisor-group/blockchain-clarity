import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Briefcase, Search, Filter } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import JobApplicationModal from "@/components/JobApplicationModal";
import AnimatedSection from "@/components/AnimatedSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const departments = ["All", "Engineering", "Strategy", "Research", "Operations", "Design"] as const;

const jobs = [
  {
    id: 1,
    title: "Senior Blockchain Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    posted: "2 days ago",
    description: "Build and maintain core blockchain infrastructure, smart contracts, and DeFi protocol integrations.",
  },
  {
    id: 2,
    title: "Web3 Strategy Consultant",
    department: "Strategy",
    location: "Remote",
    type: "Full-time",
    posted: "5 days ago",
    description: "Advise enterprise clients on blockchain adoption strategies, tokenomics, and decentralized governance.",
  },
  {
    id: 3,
    title: "Zero-Knowledge Proof Researcher",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
    description: "Advance our ZK research initiatives with novel proof systems and privacy-preserving protocols.",
  },
  {
    id: 4,
    title: "Smart Contract Auditor",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    posted: "1 week ago",
    description: "Perform security audits on Solidity and Rust-based smart contracts for our clients' DeFi projects.",
  },
  {
    id: 5,
    title: "Product Designer — Web3",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    posted: "2 weeks ago",
    description: "Design intuitive interfaces for complex blockchain products, from wallets to DAO dashboards.",
  },
  {
    id: 6,
    title: "DeFi Operations Lead",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    posted: "2 weeks ago",
    description: "Oversee DeFi protocol deployments, liquidity strategies, and cross-chain operational workflows.",
  },
];

const Jobs = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [activeDept, setActiveDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [applyJob, setApplyJob] = useState<{ title: string } | null>(null);

  const filtered = jobs.filter((job) => {
    const matchDept = activeDept === "All" || job.department === activeDept;
    const matchSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollToTop />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `repeating-linear-gradient(-45deg, transparent, transparent 80px, hsl(350 100% 50% / 0.04) 80px, hsl(350 100% 50% / 0.04) 81px)`,
            }}
          />
        </motion.div>

        <div className="glow-orb w-[500px] h-[500px] bg-primary/15" style={{ top: "-10%", right: "10%" }} />

        <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Careers</span>
              <div className="w-8 h-[1px] bg-primary" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Join the team shaping{" "}
              <span className="gradient-text">Web3's future.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              We're looking for passionate people to help enterprises unlock blockchain's full potential.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-sm text-muted-foreground/60">
              {jobs.length} open positions · 100% remote · Competitive equity
            </p>
          </AnimatedSection>
        </motion.div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <AnimatedSection delay={0.1}>
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>
            </AnimatedSection>

            {/* Department tabs */}
            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-2 flex-wrap mb-10">
                <Filter className="w-4 h-4 text-muted-foreground mr-1" />
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                      activeDept === dept
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary/30 text-muted-foreground border-border/50 hover:border-border hover:text-foreground"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Job listings */}
            <div className="space-y-4">
              {filtered.length === 0 && (
                <AnimatedSection>
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No positions found matching your criteria.</p>
                    <Button
                      variant="heroOutline"
                      size="default"
                      className="mt-4"
                      onClick={() => { setActiveDept("All"); setSearchQuery(""); }}
                    >
                      Clear filters
                    </Button>
                  </div>
                </AnimatedSection>
              )}

              {filtered.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:border-border hover:bg-secondary/40 transition-all duration-300 hover-lift"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{job.title}</h3>
                        <Badge variant="secondary" className="text-xs">{job.department}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{job.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <Button variant="heroOutline" size="sm" className="shrink-0 self-start sm:self-center" onClick={() => setApplyJob(job)}>
                      Apply
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <AnimatedSection delay={0.2}>
              <div className="text-center mt-16 pt-12 border-t border-border/50">
                <h3 className="text-2xl font-bold mb-3">Don't see the right role?</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We're always looking for exceptional talent. Send us your resume and we'll keep you in mind.
                </p>
                <Button variant="hero" size="xl">
                  Send Open Application
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
