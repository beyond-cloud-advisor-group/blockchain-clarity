import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag, Mail, Send } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import blogDefi from "@/assets/blog-defi.jpg";
import blogSecurity from "@/assets/blog-security.jpg";
import blogDao from "@/assets/blog-dao.jpg";

const articles = [
  {
    image: blogDefi,
    category: "DeFi",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    title: "The Future of Cross-Chain DeFi: Bridging Liquidity Across Networks",
    excerpt:
      "Explore how emerging interoperability protocols are reshaping decentralized finance and enabling seamless asset transfers across blockchains.",
    featured: true,
  },
  {
    image: blogSecurity,
    category: "Security",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    title: "Smart Contract Auditing: 5 Critical Vulnerabilities We Catch Most Often",
    excerpt:
      "A deep dive into the most common smart contract flaws and how rigorous auditing prevents millions in potential losses.",
    featured: false,
  },
  {
    image: blogDao,
    category: "Governance",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    title: "Building Effective DAO Governance: Lessons from 50+ Implementations",
    excerpt:
      "Key patterns and anti-patterns we've observed across dozens of DAO governance frameworks and what makes them succeed.",
    featured: false,
  },
];

const FeaturedArticle = ({ article }: { article: (typeof articles)[0] }) => (
  <motion.a
    href="#"
    className="group block glass-card overflow-hidden md:col-span-2 lg:col-span-2"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
  >
    <div className="grid md:grid-cols-2 h-full">
      <div className="relative overflow-hidden aspect-video md:aspect-auto">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:bg-gradient-to-r" />
      </div>
      <div className="p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
            <Tag className="w-3 h-3" />
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read more <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  </motion.a>
);

const ArticleCard = ({ article }: { article: (typeof articles)[0] }) => (
  <motion.a
    href="#"
    className="group block glass-card overflow-hidden"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-card/70 backdrop-blur-sm border border-border/40 text-xs font-medium text-primary">
        <Tag className="w-3 h-3" />
        {article.category}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-muted-foreground">{article.date}</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </span>
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {article.excerpt}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Read more <ArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  </motion.a>
);

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="mt-16 glass-card p-8 md:p-10 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
            <Mail className="w-3 h-3" />
            Newsletter
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Stay ahead of the curve
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            Get weekly insights on blockchain trends, DeFi strategies, and smart contract security delivered to your inbox.
          </p>
        </div>

        <div className="flex-1 max-w-md w-full">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">
                You're subscribed! Check your inbox for confirmation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-4 rounded-full bg-secondary/60 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
          <p className="text-xs text-muted-foreground mt-3 ml-1">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <section id="insights" className="py-24 border-t border-border/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">
                Insights
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Latest from Our Blog
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              View all articles
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedSection delay={0.1} className="md:col-span-2 lg:col-span-2">
            <FeaturedArticle article={articles[0]} />
          </AnimatedSection>

          {articles.slice(1).map((article, index) => (
            <AnimatedSection key={article.title} delay={0.2 + index * 0.1}>
              <ArticleCard article={article} />
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter Signup */}
        <AnimatedSection delay={0.4}>
          <NewsletterSignup />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Insights;
