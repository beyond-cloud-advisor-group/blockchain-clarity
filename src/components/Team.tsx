import AnimatedSection from "./AnimatedSection";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

import teamSofia from "@/assets/team-sofia.jpg";
import teamDavid from "@/assets/team-david.jpg";
import teamKevin from "@/assets/team-kevin.jpg";
import teamRachel from "@/assets/team-rachel.jpg";

const team = [
  {
    name: "Sofia Chen",
    role: "CEO & Founder",
    bio: "Former VP at Goldman Sachs. 15+ years in fintech and blockchain strategy.",
    image: teamSofia,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Okafor",
    role: "CTO",
    bio: "Ex-Google engineer. Architect of scalable DeFi protocols and smart contract systems.",
    image: teamDavid,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Kevin Tran",
    role: "Head of Research",
    bio: "PhD in Cryptography. Published 30+ papers on zero-knowledge proofs and consensus.",
    image: teamKevin,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rachel Moreno",
    role: "Head of Compliance",
    bio: "Former SEC advisor. Expert in digital asset regulation across global markets.",
    image: teamRachel,
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="team" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Our Team</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
              The minds behind the mission.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-16">
              Industry veterans united by a shared passion for decentralized innovation.
            </p>
          </AnimatedSection>

          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group relative rounded-2xl overflow-hidden bg-secondary/30 border border-border/50 hover:border-border transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex gap-3 mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <a href={member.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
