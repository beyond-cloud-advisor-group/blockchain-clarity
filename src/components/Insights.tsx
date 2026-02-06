import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
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

const Insights = () => {
  return (
    <section className="py-24 border-t border-border/30">
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
      </div>
    </section>
  );
};

export default Insights;
