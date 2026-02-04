import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We redefine how businesses harness blockchain technology to achieve meaningful transformation.",
    },
    {
      icon: Eye,
      title: "Strategic Foresight",
      description: "We combine deep technical expertise with forward-thinking strategy to navigate the evolving Web3 landscape.",
    },
    {
      icon: Lightbulb,
      title: "Innovation with Clarity",
      description: "We go beyond trends to deliver practical strategies and sustainable value in a rapidly changing digital economy.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Forward-Thinking Advisory & Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Beyond Cloud Advisors, we guide clients through the evolving landscape of 
              Web3, decentralized systems, and digital asset ecosystems. We help enterprises, 
              startups, and investors unlock the full potential of blockchain—from concept 
              and architecture to implementation and growth.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team focuses on creating transparent, secure, and scalable solutions 
              that align with each client's long-term vision.
            </p>
          </div>

          {/* Value Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 hover-glow transition-all duration-500 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
