import { Linkedin, Twitter } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <motion.footer 
      ref={footerRef}
      className="border-t border-border/40 py-14"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_hsl(350_100%_50%_/_0.15)]">
                <span className="text-primary-foreground font-display font-bold text-sm">B</span>
              </div>
              <span className="font-display font-semibold text-sm">Beyond Cloud</span>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:block">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-xl bg-secondary/60 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6 sm:hidden">
          © {new Date().getFullYear()} Beyond Cloud Advisors. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
