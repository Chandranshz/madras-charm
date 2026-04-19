import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, Clock, Wifi, Leaf, ArrowRight, Quote } from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishCoffee from "@/assets/dish-coffee.jpg";
import dishIdli from "@/assets/dish-idli.jpg";
import dishVada from "@/assets/dish-vada.jpg";
import dishThali from "@/assets/dish-thali.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chidambaram's New Madras Hotel — Authentic South Indian, Lodhi Colony Delhi" },
      { name: "description", content: "Since the 1970s, serving Delhi's most-loved dosas, idlis, vadas and filter coffee. ₹200–400 per person. Open daily till 10:30 pm." },
      { property: "og:title", content: "Chidambaram's New Madras Hotel" },
      { property: "og:description", content: "Crisp dosas, soft idlis, fragrant filter coffee — and a welcome rasam on the house." },
      { property: "og:image", content: heroThali },
      { name: "twitter:image", content: heroThali },
    ],
  }),
  component: Index,
});

const highlights = [
  { name: "Plain Butter Masala Dosa", tag: "Most Loved", img: dishDosa },
  { name: "Filter Coffee", tag: "Signature", img: dishCoffee },
  { name: "Soft Idli & Sambhar", tag: "Classic", img: dishIdli },
  { name: "Dahi Vada", tag: "Popular", img: dishVada },
  { name: "Special Thali", tag: "House Special", img: dishThali },
  { name: "Ragi Dosa", tag: "Healthy Pick", img: dishDosa },
];

const reviews = [
  {
    text: "Good place to have a South Indian meal. Their menu has variety and the food is delicious. Worth the wait on weekends.",
    author: "Manish S.",
    source: "Google Review",
  },
  {
    text: "Day 1: we tried their masala idly, masala upma, masala dosa, plain dosa, filter coffee, and sapota milkshake. A truly unique menu.",
    author: "Subodh P.",
    source: "Google Review",
  },
  {
    text: "Authentic flavours, quick service, and the complimentary rasam as a welcome drink is such a lovely touch.",
    author: "Nidhi P.",
    source: "Google Review",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />

        <div className="container mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wider uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
              Open · Closes 10:30 pm
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-balance">
              <span className="text-foreground">Madras on a</span>
              <br />
              <span className="italic text-primary">banana leaf,</span>
              <br />
              <span className="text-foreground">in the heart of Delhi.</span>
            </h1>

            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              For over five decades, Chidambaram's has served crisp dosas, fluffy idlis,
              and that unmistakable filter coffee — straight from a tiny Khanna Market
              kitchen with an outsized heart.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-warm text-primary-foreground rounded-full font-medium shadow-warm hover:scale-105 transition-transform"
              >
                Explore the Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-primary/20 text-foreground rounded-full font-medium hover:border-primary hover:bg-primary/5 transition-all"
              >
                Find Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 pt-8 border-t border-border">
              <div>
                <div className="flex items-center gap-1.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">4.2</span> · 5,023 Google reviews
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                <div className="font-semibold text-foreground text-sm">₹200–400</div>
                <div>per person</div>
              </div>
              <div className="text-xs text-muted-foreground">
                <div className="font-semibold text-foreground text-sm flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-leaf" /> Pure Veg
                </div>
                <div>Wi-Fi available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-warm">
              <img
                src={heroThali}
                alt="South Indian thali with idlis, dosa, sambhar and filter coffee on banana leaf"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-gold text-gold-foreground rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-soft rotate-12">
              <span className="font-script text-2xl md:text-3xl leading-none">Since</span>
              <span className="font-display text-3xl md:text-4xl font-bold">1970s</span>
              <span className="text-[10px] uppercase tracking-widest mt-1">Lodhi Colony</span>
            </div>

            <div className="hidden md:block absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-5 shadow-soft max-w-[240px]">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">A house tradition</div>
              <p className="font-display text-base text-foreground italic">
                "Welcome rasam, on the house — every single visit."
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 paisley-divider h-3 opacity-40" />
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="font-script text-2xl text-spice mb-2">Menu highlights</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
              The dishes Delhi has come back for, again and again.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((dish) => (
              <article
                key={dish.name}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-soft"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold/90 text-gold-foreground text-[10px] uppercase tracking-widest font-semibold">
                    {dish.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-semibold text-cream tracking-tight">
                    {dish.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View the full menu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 paisley-divider opacity-10" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-10 h-10 text-gold mx-auto mb-6" />
            <p className="font-display text-2xl md:text-4xl font-medium leading-tight italic text-balance">
              "A small, no-frills space serving familiar South Indian eats —
              idlis, vadas and dosas — with the kind of soul you can't fake."
            </p>
            <div className="mt-8 font-script text-xl text-gold">— A regular, for 20 years</div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <div className="font-script text-2xl text-spice mb-2">Loved by Delhi</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                5,000+ reviews. One honest kitchen.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-5xl font-display font-bold text-primary">4.2</div>
              <div>
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-1">on Google</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <article
                key={i}
                className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-warm transition-shadow"
              >
                <div className="flex gap-0.5 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-display text-lg leading-relaxed text-foreground italic">
                  "{review.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-medium text-sm text-foreground">{review.author}</div>
                  <div className="text-xs text-muted-foreground">{review.source}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="font-script text-2xl text-spice mb-2">Come find us</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Tucked into Khanna Market, easy to miss — impossible to forget.
              </h2>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div className="text-sm text-muted-foreground">
                      Shop No. 7, Khanna Market, Lodhi Rd, New Delhi 110003
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Hours</div>
                    <div className="text-sm text-muted-foreground">Open daily · Closes 10:30 pm</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Amenities</div>
                    <div className="text-sm text-muted-foreground">
                      Wi-Fi · Vegetarian · Quick service · Avg. visit 20–45 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/visit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-warm text-primary-foreground rounded-full font-medium shadow-soft hover:scale-105 transition-transform"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919811301534"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-primary/20 rounded-full font-medium hover:border-primary hover:bg-primary/5 transition-all"
                >
                  098113 01534
                </a>
              </div>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden shadow-warm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.043!2d77.2298!3d28.5891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzIxLjAiTiA3N8KwMTMnNDcuMyJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chidambaram's New Madras Hotel location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
