 import { motion } from "framer-motion";
 import AnimatedSection from "./AnimatedSection";
 
 const partners = [
   { name: "Ethereum", logo: "ETH" },
   { name: "Polygon", logo: "MATIC" },
   { name: "Chainlink", logo: "LINK" },
   { name: "Aave", logo: "AAVE" },
   { name: "Uniswap", logo: "UNI" },
   { name: "Compound", logo: "COMP" },
   { name: "MakerDAO", logo: "MKR" },
   { name: "Arbitrum", logo: "ARB" },
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
                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                   <span className="text-xs font-bold text-primary">
                     {partner.logo.slice(0, 2)}
                   </span>
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