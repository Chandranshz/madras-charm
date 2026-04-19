import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Our Story" },
  { to: "/visit", label: "Visit" },
];

const ORDER_URL = "https://newmadrashotel.petpooja.com/";

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
          ? "bg-cream/95 backdrop-blur-md border-b-2 border-ink shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-black border-2 border-ink shadow-pop-gold group-hover:rotate-6 transition-transform">
              C
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-black text-ink tracking-tight">
                Chidambaram's
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink/60 font-semibold">
                New Madras Hotel · 1940
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-ink/80 hover:text-primary transition-colors relative group"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spice transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <a
            href={ORDER_URL}
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold border-2 border-ink shadow-pop-gold hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            Order Online
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-ink"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t-2 border-ink">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-ink/80 hover:text-primary py-2"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ORDER_URL}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold mt-2 border-2 border-ink"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
