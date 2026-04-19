import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/visit", label: "Visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-display text-lg font-bold shadow-soft">
              C
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-primary tracking-tight">
                Chidambaram's
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                New Madras Hotel
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <a
            href="tel:+919811301534"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-warm text-primary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-soft"
          >
            <Phone className="w-4 h-4" />
            Call to Order
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary py-2"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919811301534"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-warm text-primary-foreground rounded-full text-sm font-medium mt-2"
            >
              <Phone className="w-4 h-4" />
              098113 01534
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
