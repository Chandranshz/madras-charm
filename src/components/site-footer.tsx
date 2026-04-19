import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook, ShoppingBag } from "lucide-react";

const ORDER_URL = "https://newmadrashotel.petpooja.com/";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/90 mt-0">
      <div className="paisley-divider h-4 opacity-30" />
      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-script text-3xl text-turmeric mb-2">Since 1940</div>
            <h3 className="font-display text-3xl font-black text-cream mb-4 leading-tight">
              Chidambaram's<br />New Madras Hotel
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-md">
              Delhi's first South Indian kitchen — three generations of crisp dosas,
              soft idlis, fragrant filter coffee, and the warmth of a complimentary rasam.
            </p>
            <div className="font-tamil text-xl text-turmeric mt-5">வணக்கம் · Vanakkam</div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-lg font-bold text-turmeric mb-4">Visit</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-turmeric" />
                <span>Shop No. 7, Khanna Market, Lodhi Rd, New Delhi 110003</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-turmeric" />
                <a href="tel:+919811301534" className="hover:text-turmeric">098113 01534</a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-turmeric" />
                <span>Open daily · 8:00 am — 10:30 pm</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg font-bold text-turmeric mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/menu" className="hover:text-turmeric">Menu</Link></li>
              <li><Link to="/about" className="hover:text-turmeric">Our Story</Link></li>
              <li><Link to="/visit" className="hover:text-turmeric">Visit Us</Link></li>
              <li><a href={ORDER_URL} target="_blank" rel="noreferrer" className="hover:text-turmeric">Order Online</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display text-lg font-bold text-turmeric mb-4">Order</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href={ORDER_URL} target="_blank" rel="noreferrer" className="hover:text-turmeric">PetPooja (direct)</a></li>
              <li><a href="https://www.zomato.com/ncr/chidambarams-new-madras-hotel-lodhi-colony-new-delhi" target="_blank" rel="noreferrer" className="hover:text-turmeric">Zomato</a></li>
              <li><a href="https://www.swiggy.com/restaurants/chidambarams-new-madras-hotel" target="_blank" rel="noreferrer" className="hover:text-turmeric">Swiggy</a></li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-turmeric hover:text-ink hover:border-turmeric transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-turmeric hover:text-ink hover:border-turmeric transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <a
          href={ORDER_URL}
          target="_blank" rel="noreferrer"
          className="mt-12 flex items-center justify-between gap-4 bg-primary text-primary-foreground rounded-3xl p-6 md:p-8 border-2 border-cream hover:bg-turmeric hover:text-ink transition-colors"
        >
          <div>
            <div className="font-script text-xl">Hungry?</div>
            <div className="font-display text-2xl md:text-3xl font-black">Order Madras to your door — in 30 min.</div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 font-semibold">
            <ShoppingBag className="w-5 h-5" /> Order now
          </span>
        </a>

        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Chidambaram's New Madras Hotel. All rights reserved.</p>
          <p className="font-script text-base text-turmeric/80">Made with ghee, gratitude & filter coffee.</p>
        </div>
      </div>
    </footer>
  );
}
