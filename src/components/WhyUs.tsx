import { CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    "Deep technical expertise in blockchain protocols and cryptography",
    "Strategic foresight to position your business for long-term success",
    "Transparent communication with honest assessments",
    "Scalable solutions from startup to enterprise",
  ];

  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      {/* Gradient orb */}
      <div 
        className="glow-orb w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-teal-500/10"
        style={{ top: '10%', right: '-15%' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Why Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Innovation meets{" "}
                <span className="gradient-text">experience.</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We go beyond trends to deliver practical strategies and sustainable 
                value in a rapidly changing digital economy.
              </p>

              <div className="space-y-5">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Concentric circles */}
                <div className="absolute inset-0 rounded-full border border-border/30" />
                <div className="absolute inset-8 rounded-full border border-border/40" />
                <div className="absolute inset-16 rounded-full border border-border/50" />
                <div className="absolute inset-24 rounded-full border border-border/60" />
                
                {/* Center glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <span className="text-3xl font-bold gradient-text">BCA</span>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute top-8 right-8 glass-card px-4 py-3 animate-float">
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>

                <div className="absolute bottom-8 left-8 glass-card px-4 py-3 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
