const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">About</span>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              We redefine how businesses harness{" "}
              <span className="gradient-text">blockchain technology.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Beyond Cloud Advisors, we guide clients through the evolving 
                landscape of Web3, decentralized systems, and digital asset ecosystems. 
                We combine deep technical expertise with strategic foresight.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our philosophy is simple: innovation with clarity. We go beyond 
                trends to deliver practical strategies and sustainable value in 
                a rapidly changing digital economy.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$2B+</div>
              <div className="text-sm text-muted-foreground">Assets advised</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
