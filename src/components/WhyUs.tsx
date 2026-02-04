import { CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      title: "Deep Technical Expertise",
      description: "Our team brings decades of combined experience in blockchain protocols, cryptography, and distributed systems.",
    },
    {
      title: "Strategic Foresight",
      description: "We anticipate market shifts and technological evolution to position your business for long-term success.",
    },
    {
      title: "Transparent Approach",
      description: "Clear communication and honest assessments ensure you always understand your options and their implications.",
    },
    {
      title: "Scalable Solutions",
      description: "We build architectures designed to grow with your business, from startup to enterprise scale.",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Floating Cards */}
              <div className="absolute top-0 left-0 w-48 glass-card rounded-2xl p-4 glow-box animate-float">
                <div className="text-primary font-display text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-52 glass-card rounded-2xl p-4 glow-box animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-primary font-display text-2xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Expert Support</div>
              </div>

              <div className="absolute top-1/3 right-0 w-44 glass-card rounded-2xl p-4 glow-box animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-primary font-display text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-primary/20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-primary/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center glow-box-strong">
                    <span className="font-display text-3xl font-bold gradient-text">BCA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Innovation Meets Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              We go beyond trends to deliver practical strategies and sustainable value. 
              Our philosophy is simple: innovation with clarity.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
