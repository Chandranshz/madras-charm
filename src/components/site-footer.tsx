import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/90 mt-24">
      <div className="paisley-divider h-4 opacity-30" />
      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-script text-3xl text-gold mb-2">Since 1970s</div>
            <h3 className="font-display text-3xl font-bold text-cream mb-4">
              Chidambaram's<br />New Madras Hotel
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-md">
              A Lodhi Colony institution serving authentic Madrasi flavours — crisp dosas,
              soft idlis, fragrant filter coffee, and the warmth of a complimentary rasam.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Visit</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <span>Shop No. 7, Khanna Market, Lodhi Rd, New Delhi 110003</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <a href="tel:+919811301534" className="hover:text-gold">098113 01534</a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <span>Open daily · Closes 10:30 pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
              <li><Link to="/about" className="hover:text-gold">Our Story</Link></li>
              <li><Link to="/visit" className="hover:text-gold">Visit Us</Link></li>
              <li><a href="#" className="hover:text-gold">Order Online</a></li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Chidambaram's New Madras Hotel. All rights reserved.</p>
          <p className="font-script text-base text-gold/80">Vanakkam · Welcome</p>
        </div>
      </div>
    </footer>
  );
}
