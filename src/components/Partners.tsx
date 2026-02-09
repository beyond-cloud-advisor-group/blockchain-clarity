 import { motion } from "framer-motion";
 
 // SVG icons for each blockchain partner
 const EthereumIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <path d="M16 0l-0.5 1.7v21.2l0.5 0.5 9.5-5.6z" opacity="0.6"/>
     <path d="M16 0l-9.5 17.8 9.5 5.6v-10.1z" opacity="0.45"/>
     <path d="M16 25.5l-0.3 0.3v7.3l0.3 0.9 9.5-13.4z" opacity="0.8"/>
     <path d="M16 34v-8.5l-9.5-5.3z" opacity="0.45"/>
     <path d="M16 23.4l9.5-5.6-9.5-4.3z" opacity="0.8"/>
     <path d="M6.5 17.8l9.5 5.6v-9.9z" opacity="0.6"/>
   </svg>
 );
 
 const PolygonIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <path d="M23.5 19.5l4.5-2.6v-5.2l-4.5-2.6-4.5 2.6v5.2l4.5 2.6zm-7.5-4.3l4.5-2.6v-5.2l-4.5-2.6-4.5 2.6v5.2l4.5 2.6zm-7.5 4.3l4.5-2.6v-5.2l-4.5-2.6-4.5 2.6v5.2l4.5 2.6zm7.5 4.3l4.5-2.6v-5.2l-4.5-2.6-4.5 2.6v5.2l4.5 2.6z"/>
   </svg>
 );
 
 const ChainlinkIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <path d="M16 0l-4 2.3v5.4l4 2.3 4-2.3v-5.4l-4-2.3zm-8 6.9l-4 2.3v5.4l4 2.3 4-2.3v-5.4l-4-2.3zm16 0l-4 2.3v5.4l4 2.3 4-2.3v-5.4l-4-2.3zm-16 9.2l-4 2.3v5.4l4 2.3 4-2.3v-5.4l-4-2.3zm16 0l-4 2.3v5.4l4 2.3 4-2.3v-5.4l-4-2.3zm-8 6.9l-4 2.3v5.4l4 2.3 4-2.3v-5.4l-4-2.3z"/>
   </svg>
 );
 
 const AaveIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <path d="M22.8 24h-3.6l-1.6-4.4h-3.2l-1.6 4.4h-3.6l7.2-16h0.8l5.6 16zm-6.4-7.2l-0.8-2.4-0.8 2.4h1.6z"/>
     <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2"/>
   </svg>
 );
 
 const UniswapIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <path d="M11.2 8.8c0.4-0.2 0.6-0.2 1 0.1 0.2 0.2 0.3 0.4 0.3 0.8-0.1 0.5-0.3 0.8-0.7 1-0.3 0.1-0.4 0.3-0.4 0.6 0 0.4 0.3 0.7 0.7 0.6 0.9-0.1 1.6-0.8 1.7-1.7 0.1-1.1-0.6-2-1.6-2.2-0.8-0.2-1.7 0.1-2.2 0.8s-0.5 1.6-0.1 2.3c0.6 1 1.5 1.6 2.6 1.8 0.7 0.1 1.3 0 2-0.2 1.2-0.4 2.2-1.4 2.6-2.6 0.6-1.8 0-3.8-1.5-5-0.6-0.5-1.3-0.8-2.1-0.9-1.6-0.3-3.2 0.2-4.3 1.4-1.3 1.3-1.7 3.2-1.2 5 0.5 1.6 1.6 2.9 3.1 3.6 1.1 0.5 2.3 0.7 3.5 0.5 2.4-0.3 4.3-2 5-4.3 0.7-2.4-0.1-5-2-6.7-1.4-1.2-3.2-1.8-5-1.6-2.6 0.3-4.8 2-5.7 4.4-0.9 2.5-0.4 5.3 1.4 7.3 1.3 1.4 3 2.2 4.9 2.4 2.1 0.2 4.2-0.4 5.8-1.7 2-1.5 3.1-3.9 3-6.4-0.1-2.7-1.5-5.1-3.8-6.5-1.7-1-3.7-1.3-5.6-0.8-2.4 0.6-4.4 2.2-5.4 4.5-1.2 2.6-0.9 5.7 0.8 8 1.3 1.8 3.3 3 5.5 3.3"/>
   </svg>
 );
 
 const CompoundIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
     <circle cx="16" cy="11" r="3"/>
     <circle cx="11" cy="19" r="3"/>
     <circle cx="21" cy="19" r="3"/>
   </svg>
 );
 
 const MakerDAOIcon = () => (
   <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
     <path d="M4 24v-12l8 6v6h-2v-4.5l-4-3v7.5h-2zm24 0v-12l-8 6v6h2v-4.5l4-3v7.5h2zm-12-16l-8 6h4v10h8v-10h4l-8-6z"/>
   </svg>
 );
 
const ArbitrumIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
    <path d="M16 4l-10 6v12l10 6 10-6v-12l-10-6zm0 3l7 4.2v8.4l-7 4.2-7-4.2v-8.4l7-4.2z"/>
    <path d="M16 10l-4 2.4v4.8l4 2.4 4-2.4v-4.8l-4-2.4z"/>
  </svg>
);

const SolanaIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
    <path d="M6.5 22.5l3.2-3.2h16.8l-3.2 3.2H6.5zm0-6.5h16.8l3.2-3.2H9.7L6.5 16zm20 0l-3.2 3.2H6.5l3.2-3.2h16.8zM6.5 9.5l3.2 3.2h16.8l-3.2-3.2H6.5z"/>
  </svg>
);

const AvalancheIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
    <path d="M16 4L4 26h8l4-8 4 8h8L16 4zm0 8l3.5 7h-7l3.5-7z"/>
  </svg>
);

const OptimismIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
    <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 19.5c-2.2 0-3.5-1.5-3.5-3.5s1.3-3.5 3.5-3.5 3.5 1.5 3.5 3.5-1.3 3.5-3.5 3.5zm0-5.2c-1 0-1.7 0.8-1.7 1.7s0.7 1.7 1.7 1.7 1.7-0.8 1.7-1.7-0.7-1.7-1.7-1.7z"/>
    <path d="M18.5 12.8h2.8c1.8 0 3 1 3 2.6s-1.2 2.6-3 2.6h-1v1.5h-1.8v-6.7zm2.6 3.6c0.7 0 1.2-0.4 1.2-1s-0.5-1-1.2-1h-0.8v2h0.8z"/>
  </svg>
);

const BaseIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
    <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c2.2 0 4.2-0.9 5.7-2.3h-5.7v-2h7.4c0.4-1.1 0.6-2.3 0.6-3.5 0-0.2 0-0.3 0-0.5h-8v-2h7.7c-0.8-3.4-3.9-5.7-7.7-5.7z"/>
  </svg>
);

const ZkSyncIcon = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor">
    <path d="M16 4L6 16l10 12 10-12L16 4zm0 4l6 8-6 7.2L10 16l6-8z"/>
    <path d="M16 12l-3 4h6l-3-4z"/>
  </svg>
);

const partnerIcons: Record<string, React.FC> = {
  ETH: EthereumIcon,
  MATIC: PolygonIcon,
  LINK: ChainlinkIcon,
  AAVE: AaveIcon,
  UNI: UniswapIcon,
  COMP: CompoundIcon,
  MKR: MakerDAOIcon,
  ARB: ArbitrumIcon,
  SOL: SolanaIcon,
  AVAX: AvalancheIcon,
  OP: OptimismIcon,
  BASE: BaseIcon,
  ZK: ZkSyncIcon,
};
import AnimatedSection from "./AnimatedSection";

const partners = [
  { name: "Ethereum", logo: "ETH" },
  { name: "Polygon", logo: "MATIC" },
  { name: "Chainlink", logo: "LINK" },
  { name: "Solana", logo: "SOL" },
  { name: "Aave", logo: "AAVE" },
  { name: "Uniswap", logo: "UNI" },
  { name: "Avalanche", logo: "AVAX" },
  { name: "Compound", logo: "COMP" },
  { name: "MakerDAO", logo: "MKR" },
  { name: "Arbitrum", logo: "ARB" },
  { name: "Optimism", logo: "OP" },
  { name: "Base", logo: "BASE" },
  { name: "zkSync", logo: "ZK" },
];
 
 const Partners = () => {
   // Double the partners array for seamless infinite scroll
   const duplicatedPartners = [...partners, ...partners];
 
   return (
     <section className="py-20 overflow-hidden border-t border-border/30">
       <div className="container mx-auto px-6 mb-12">
         <AnimatedSection>
           <div className="text-center">
             <p className="text-sm font-medium text-primary tracking-wider uppercase mb-3">
               Trusted By Industry Leaders
             </p>
             <h2 className="text-2xl md:text-3xl font-bold text-foreground">
               Our Partners & Clients
             </h2>
           </div>
         </AnimatedSection>
       </div>
 
       {/* Infinite scroll carousel */}
       <div className="relative">
         {/* Gradient fade edges */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
 
         <motion.div
           className="flex gap-8 py-8"
           animate={{
             x: ["0%", "-50%"],
           }}
           transition={{
             x: {
               duration: 30,
               repeat: Infinity,
               ease: "linear",
             },
           }}
         >
           {duplicatedPartners.map((partner, index) => (
             <div
               key={`${partner.name}-${index}`}
               className="flex-shrink-0 group"
             >
               <div className="w-40 h-20 glass-card flex items-center justify-center gap-3 px-6 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 text-primary">
                    {(() => {
                      const IconComponent = partnerIcons[partner.logo];
                      return IconComponent ? <IconComponent /> : null;
                    })()}
                  </div>
                 <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                   {partner.name}
                 </span>
               </div>
             </div>
           ))}
         </motion.div>
       </div>
 
       {/* Stats row */}
       <AnimatedSection delay={0.2}>
         <div className="container mx-auto px-6 mt-16">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { value: "50+", label: "Projects Delivered" },
               { value: "$2B+", label: "Value Secured" },
               { value: "100%", label: "Client Retention" },
               { value: "24/7", label: "Support Available" },
             ].map((stat, index) => (
               <motion.div
                 key={stat.label}
                 className="text-center"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
               >
                 <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                   {stat.value}
                 </p>
                 <p className="text-sm text-muted-foreground">{stat.label}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </AnimatedSection>
     </section>
   );
 };
 
 export default Partners;