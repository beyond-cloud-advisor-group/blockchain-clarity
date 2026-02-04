import { Blocks, Shield, TrendingUp, Code, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Blocks,
      title: "Blockchain Strategy",
      description: "Comprehensive roadmaps for blockchain adoption tailored to your business objectives and market positioning.",
    },
    {
      icon: Code,
      title: "Architecture Design",
      description: "Scalable and secure system architecture for decentralized applications and smart contract ecosystems.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Rigorous security audits and regulatory compliance frameworks for digital asset operations.",
    },
    {
      icon: TrendingUp,
      title: "Tokenomics Design",
      description: "Economic modeling and token design strategies that create sustainable value and incentive structures.",
    },
    {
      icon: Users,
      title: "Web3 Consulting",
      description: "Expert guidance on DAO governance, DeFi integration, and decentralized ecosystem development.",
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "End-to-end development support from prototype to production-ready blockchain solutions.",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive Blockchain Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to implementation, we provide end-to-end services that drive meaningful blockchain transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl p-8 hover-glow transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
