 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import AnimatedSection from "./AnimatedSection";
 import { Blocks, Shield, TrendingUp, Zap, ArrowRight } from "lucide-react";
 
 const FeatureShowcase = () => {
   const [activeTab, setActiveTab] = useState(0);
 
   const features = [
     {
       id: 0,
       label: "Strategy",
       icon: Blocks,
       title: "Blockchain Strategy & Roadmaps",
       description: "We craft comprehensive blockchain adoption strategies tailored to your unique business objectives, ensuring every step aligns with your long-term vision.",
       mockup: {
         type: "roadmap",
         items: [
           { phase: "Discovery", status: "complete", weeks: "1-2" },
           { phase: "Architecture", status: "complete", weeks: "3-4" },
           { phase: "Development", status: "active", weeks: "5-12" },
           { phase: "Deployment", status: "pending", weeks: "13-16" },
         ]
       }
     },
     {
       id: 1,
       label: "Security",
       icon: Shield,
       title: "Enterprise-Grade Security",
       description: "Rigorous security audits and compliance frameworks protect your digital assets and ensure regulatory alignment across jurisdictions.",
       mockup: {
         type: "security",
         metrics: [
           { label: "Smart Contracts Audited", value: "500+", trend: "+12%" },
           { label: "Vulnerabilities Found", value: "2,847", trend: "Fixed" },
           { label: "Security Score", value: "98.5%", trend: "A+" },
         ]
       }
     },
     {
       id: 2,
       label: "Tokenomics",
       icon: TrendingUp,
       title: "Token Economic Design",
       description: "Data-driven tokenomics modeling that creates sustainable value and aligns incentives across your ecosystem.",
       mockup: {
         type: "tokenomics",
         distribution: [
           { label: "Community", percentage: 40, color: "from-primary to-primary/60" },
           { label: "Team", percentage: 20, color: "from-orange-500 to-orange-500/60" },
           { label: "Treasury", percentage: 25, color: "from-cyan-500 to-cyan-500/60" },
           { label: "Advisors", percentage: 15, color: "from-violet-500 to-violet-500/60" },
         ]
       }
     },
     {
       id: 3,
       label: "Launch",
       icon: Zap,
       title: "Rapid Implementation",
       description: "End-to-end development from prototype to production, with continuous iteration and optimization.",
       mockup: {
         type: "launch",
         stats: [
           { label: "Avg. Time to MVP", value: "8 weeks" },
           { label: "Projects Launched", value: "120+" },
           { label: "Success Rate", value: "99.2%" },
         ]
       }
     },
   ];
 
   const activeFeature = features[activeTab];
 
   return (
     <section id="features" className="py-32 relative overflow-hidden">
       {/* Background glow */}
       <div 
         className="glow-orb w-[600px] h-[600px] bg-primary/15"
         style={{ top: '10%', right: '-15%' }}
       />
 
       <div className="container mx-auto px-6 relative z-10">
         <div className="max-w-6xl mx-auto">
           {/* Section Header */}
           <AnimatedSection>
             <div className="flex items-center gap-3 mb-8">
               <div className="w-8 h-[1px] bg-primary" />
               <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Features</span>
             </div>
           </AnimatedSection>
 
           <AnimatedSection delay={0.1}>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
               Powerful tools for the decentralized future.
             </h2>
             <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
               Our comprehensive suite of services covers every aspect of blockchain transformation.
             </p>
           </AnimatedSection>
 
           {/* Feature Tabs */}
           <AnimatedSection delay={0.2}>
             <div className="flex flex-wrap gap-2 mb-12">
               {features.map((feature, index) => (
                 <button
                   key={feature.id}
                   onClick={() => setActiveTab(index)}
                   className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                     activeTab === index
                       ? "bg-foreground text-background"
                       : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                   }`}
                 >
                   <feature.icon className="w-4 h-4" />
                   {feature.label}
                 </button>
               ))}
             </div>
           </AnimatedSection>
 
           {/* Feature Content */}
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left: Description */}
             <AnimatedSection delay={0.3}>
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.3 }}
                 >
                   <h3 className="text-2xl md:text-3xl font-bold mb-4">
                     {activeFeature.title}
                   </h3>
                   <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                     {activeFeature.description}
                   </p>
                   <button className="flex items-center gap-2 text-foreground font-medium group">
                     Learn more
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </button>
                 </motion.div>
               </AnimatePresence>
             </AnimatedSection>
 
             {/* Right: Interactive Mockup */}
             <AnimatedSection delay={0.4}>
               <div className="glass-card p-6 md:p-8">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.3 }}
                   >
                     {activeFeature.mockup.type === "roadmap" && (
                       <RoadmapMockup items={activeFeature.mockup.items} />
                     )}
                     {activeFeature.mockup.type === "security" && (
                       <SecurityMockup metrics={activeFeature.mockup.metrics} />
                     )}
                     {activeFeature.mockup.type === "tokenomics" && (
                       <TokenomicsMockup distribution={activeFeature.mockup.distribution} />
                     )}
                     {activeFeature.mockup.type === "launch" && (
                       <LaunchMockup stats={activeFeature.mockup.stats} />
                     )}
                   </motion.div>
                 </AnimatePresence>
               </div>
             </AnimatedSection>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 // Roadmap Mockup Component
 const RoadmapMockup = ({ items }: { items: { phase: string; status: string; weeks: string }[] }) => (
   <div className="space-y-4">
     <div className="flex items-center justify-between mb-6">
       <span className="text-sm text-muted-foreground">Project Timeline</span>
       <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">In Progress</span>
     </div>
     {items.map((item, index) => (
       <motion.div
         key={item.phase}
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: index * 0.1 }}
         className="flex items-center gap-4"
       >
         <div className={`w-3 h-3 rounded-full ${
           item.status === "complete" ? "bg-green-500" :
           item.status === "active" ? "bg-primary animate-pulse" : "bg-muted"
         }`} />
         <div className="flex-1 flex items-center justify-between py-3 px-4 rounded-lg bg-secondary/30">
           <span className={item.status === "pending" ? "text-muted-foreground" : "text-foreground"}>
             {item.phase}
           </span>
           <span className="text-xs text-muted-foreground">Week {item.weeks}</span>
         </div>
       </motion.div>
     ))}
   </div>
 );
 
 // Security Mockup Component
 const SecurityMockup = ({ metrics }: { metrics: { label: string; value: string; trend: string }[] }) => (
   <div className="space-y-6">
     <div className="flex items-center justify-between mb-4">
       <span className="text-sm text-muted-foreground">Security Dashboard</span>
       <div className="flex items-center gap-2">
         <div className="w-2 h-2 rounded-full bg-green-500" />
         <span className="text-xs text-green-500">All Systems Secure</span>
       </div>
     </div>
     <div className="grid gap-4">
       {metrics.map((metric, index) => (
         <motion.div
           key={metric.label}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.1 }}
           className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/50"
         >
           <div>
             <p className="text-sm text-muted-foreground">{metric.label}</p>
             <p className="text-2xl font-bold">{metric.value}</p>
           </div>
           <span className="text-sm text-green-500 bg-green-500/10 px-2 py-1 rounded">
             {metric.trend}
           </span>
         </motion.div>
       ))}
     </div>
   </div>
 );
 
 // Tokenomics Mockup Component
 const TokenomicsMockup = ({ distribution }: { distribution: { label: string; percentage: number; color: string }[] }) => (
   <div className="space-y-6">
     <div className="flex items-center justify-between mb-4">
       <span className="text-sm text-muted-foreground">Token Distribution</span>
       <span className="text-xs text-muted-foreground">Total Supply: 100M</span>
     </div>
     <div className="space-y-3">
       {distribution.map((item, index) => (
         <motion.div
           key={item.label}
           initial={{ opacity: 0, width: 0 }}
           animate={{ opacity: 1, width: "100%" }}
           transition={{ delay: index * 0.15, duration: 0.5 }}
         >
           <div className="flex items-center justify-between mb-1">
             <span className="text-sm">{item.label}</span>
             <span className="text-sm text-muted-foreground">{item.percentage}%</span>
           </div>
           <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
             <motion.div
               initial={{ width: 0 }}
               animate={{ width: `${item.percentage}%` }}
               transition={{ delay: index * 0.15 + 0.2, duration: 0.6, ease: "easeOut" }}
               className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
             />
           </div>
         </motion.div>
       ))}
     </div>
     <div className="pt-4 border-t border-border/50">
       <div className="flex items-center justify-between text-sm">
         <span className="text-muted-foreground">Vesting Period</span>
         <span>24 months linear</span>
       </div>
     </div>
   </div>
 );
 
 // Launch Mockup Component
 const LaunchMockup = ({ stats }: { stats: { label: string; value: string }[] }) => (
   <div className="space-y-6">
     <div className="flex items-center justify-between mb-4">
       <span className="text-sm text-muted-foreground">Launch Metrics</span>
       <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">Live</span>
     </div>
     <div className="grid gap-4">
       {stats.map((stat, index) => (
         <motion.div
           key={stat.label}
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: index * 0.1 }}
           className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/50"
         >
           <p className="text-3xl font-bold mb-1">{stat.value}</p>
           <p className="text-sm text-muted-foreground">{stat.label}</p>
         </motion.div>
       ))}
     </div>
     <div className="flex items-center justify-center gap-2 pt-4">
       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
       <span className="text-sm text-muted-foreground">Real-time monitoring active</span>
     </div>
   </div>
 );
 
 export default FeatureShowcase;