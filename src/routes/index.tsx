import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Star, MapPin, Clock, Leaf, ArrowRight, Phone, ShoppingBag,
} from "lucide-react";
import heroDosa from "@/assets/hero-dosa-platter.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishCoffee from "@/assets/dish-coffee.jpg";
import dishIdli from "@/assets/dish-idli.jpg";
import dishVada from "@/assets/dish-vada.jpg";
import dishThali from "@/assets/dish-thali.jpg";
import dishUttapam from "@/assets/dish-uttapam.jpg";

const ORDER_URL = "https://newmadrashotel.petpooja.com/";
const ZOMATO_URL = "https://www.zomato.com/ncr/chidambarams-new-madras-hotel-lodhi-colony-new-delhi";
const SWIGGY_URL = "https://www.swiggy.com/restaurants/chidambarams-new-madras-hotel-khanna-market-lodi-colony-south-delhi-39594";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Chidambaram%27s+New+Madras+Hotel+Khanna+Market+Lodhi+Road+New+Delhi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chidambaram's New Madras Hotel — Authentic South Indian since 1940, Lodhi Colony Delhi" },
      { name: "description", content: "Delhi's first South Indian kitchen — crisp dosas, fluffy idlis & filter coffee since 1940. ₹200–400 per person. Open daily till 10:30 pm." },
      { property: "og:title", content: "Chidambaram's New Madras Hotel — Since 1940" },
      { property: "og:description", content: "Crisp dosas, soft idlis, fragrant filter coffee — and a welcome rasam on the house." },
      { property: "og:image", content: heroDosa },
      { name: "twitter:image", content: heroDosa },
    ],
  }),
  component: Index,
});

const dishes = [
  { name: "Masala Dosa", desc: "Crisp golden, potato masala", img: dishDosa },
  { name: "Idli & Sambhar", desc: "Soft, steamed, soulful", img: dishIdli },
  { name: "Filter Coffee", desc: "Frothed in steel, daily ritual", img: dishCoffee },
  { name: "Mix Veg Uttapam", desc: "Thick pancake, fresh veg", img: dishUttapam },
  { name: "Dahi Vada", desc: "Cool yogurt, spiced cumin", img: dishVada },
  { name: "Special Thali", desc: "Six bowls, one banana leaf", img: dishThali },
];

const reviews = [
  { name: "Rakhi Ray", text: "Superb food. Tastes fresh and flavourful. Perfect filter coffee. Friendly staff and fast service. What else does one need?" },
  { name: "Vishwajeet Dua", text: "Visiting for 15 years. Authentic taste, very reasonable — much better than Sagar Ratna and Saravana Bhavan. The complimentary rasam is irresistible." },
  { name: "Amaan Khan", text: "Don't miss the Chef's Special Rava Dosa — comes with papadam, dahi chaat, rasam and buttermilk. Every detail was perfect." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-turmeric">
        <div className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] bg-cream/60 animate-blob" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 w-[420px] h-[420px] bg-leaf/20 animate-blob" style={{ animationDelay: "-6s" }} />

        <div className="container mx-auto px-5 sm:px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink text-cream text-[11px] font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
              Open · Closes 10:30 pm
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-balance text-ink">
              Delhi's first
              <br />
              <span className="italic text-primary">South Indian</span>
              <br />
              kitchen.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-ink/75 max-w-md leading-relaxed">
              Since 1940 — crisp dosas, soft idlis and that filter coffee, served from a tiny kitchen in Khanna Market.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={ORDER_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Online
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream text-ink rounded-full font-semibold border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                See Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="flex text-spice">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <span className="text-ink/70"><span className="font-bold text-ink">4.2</span> · 5K reviews</span>
              </div>
              <div className="text-ink/70 flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-leaf" /> Pure Veg
              </div>
              <div className="text-ink/70">₹200–400 per person</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-ink shadow-pop max-w-md mx-auto">
              <img
                src={heroDosa}
                alt="Crispy masala dosa with sambhar and chutneys on banana leaf"
                width={1280}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-primary text-primary-foreground rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center border-4 border-ink rotate-12">
              <span className="font-script text-lg sm:text-2xl leading-none">Since</span>
              <span className="font-display text-2xl sm:text-3xl font-black">1940</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISHES */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="font-script text-xl text-spice mb-1">What we serve</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight text-balance">
              Six things to <span className="italic text-primary">try first.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {dishes.map((dish) => (
              <article
                key={dish.name}
                className="group bg-card rounded-2xl overflow-hidden border-2 border-ink shadow-soft hover:shadow-pop hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-ink">{dish.name}</h3>
                  <p className="text-sm text-ink/65 mt-1">{dish.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-cream rounded-full font-semibold hover:bg-primary transition-colors"
            >
              See full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY — simple */}
      <section className="py-20 lg:py-28 bg-turmeric/40">
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 max-w-3xl text-center">
          <div className="font-script text-xl text-spice mb-1">Our story</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-balance text-ink">
            A <span className="italic text-primary">tiny mess</span> from 1940 — still serving Delhi.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-ink/75 leading-relaxed">
            When the British built Lodhi Colony for East India Company workers — many of them Tamilians from Madras — Mr. Chidambaram opened a small mess to feed them. He hand-ground idli and dosa batter every evening to serve the next morning, and was the first to bring South Indian food to Delhi.
          </p>
          <p className="mt-4 text-base sm:text-lg text-ink/75 leading-relaxed">
            Three generations later, the kitchen, the recipes, and the complimentary rasam are exactly the same.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS — three only */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <div className="font-script text-xl text-spice mb-1">Loved by Delhi</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-balance text-ink">
              5,000+ reviews. <span className="italic text-primary">4.2 on Google.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="bg-card border-2 border-ink rounded-2xl p-6 shadow-soft"
              >
                <div className="flex gap-0.5 text-spice mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="font-display text-base leading-relaxed text-foreground italic">
                  "{review.text}"
                </p>
                <div className="mt-5 pt-4 border-t border-dashed border-ink/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-turmeric text-ink font-display font-bold flex items-center justify-center border-2 border-ink text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-ink">{review.name}</div>
                    <div className="text-xs text-muted-foreground">Google Review</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="py-20 lg:py-28 bg-cream border-t-2 border-ink/10">
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="font-script text-xl text-spice mb-1">Come find us</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-balance text-ink">
              In Khanna Market, <span className="italic text-primary">Lodhi Road.</span>
            </h2>

            <div className="mt-8 space-y-4">
              <InfoRow icon={MapPin} title="Address" text="Shop No. 7, Khanna Market, Lodhi Rd, New Delhi 110003" />
              <InfoRow icon={Clock} title="Hours" text="Open daily · 8:00 am — 10:30 pm" />
              <InfoRow icon={Phone} title="Call" text="098113 01534" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919811301534"
                className="inline-flex items-center gap-2 px-5 py-3 bg-cream text-ink rounded-full font-semibold border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <Phone className="w-4 h-4" /> Call us
              </a>
            </div>
          </div>

          <div className="aspect-square rounded-3xl overflow-hidden border-4 border-ink shadow-pop">
            <iframe
              src="https://www.google.com/maps?q=Chidambaram%27s+New+Madras+Hotel+Khanna+Market+Lodhi+Road+New+Delhi&output=embed"
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
      </section>

      {/* ORDER ONLINE — at the end */}
      <section className="py-20 lg:py-28 bg-ink text-cream relative overflow-hidden">
        <div className="container mx-auto px-5 sm:px-6 lg:px-10 relative">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="font-script text-xl text-turmeric mb-1">Order online</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-balance">
              Madras at your <span className="italic text-turmeric">doorstep.</span>
            </h2>
            <p className="mt-3 text-cream/70 text-base">
              Pick your favourite — we deliver hot.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <OrderCard
              href={ORDER_URL}
              tag="Best price · direct"
              name="PetPooja"
              desc="Order direct from our kitchen — no commission."
              tone="turmeric"
            />
            <OrderCard
              href={ZOMATO_URL}
              tag="Delivery"
              name="Zomato"
              desc="5K+ ratings, available across South Delhi."
              tone="coral"
            />
            <OrderCard
              href={SWIGGY_URL}
              tag="Delivery"
              name="Swiggy"
              desc="Hot dosas at your door, ₹400 for two."
              tone="cream"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, text }: { icon: typeof MapPin; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 border-2 border-ink">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="font-semibold text-ink text-sm">{title}</div>
        <div className="text-sm text-ink/70">{text}</div>
      </div>
    </div>
  );
}

function OrderCard({
  href, tag, name, desc, tone,
}: {
  href: string; tag: string; name: string; desc: string; tone: "turmeric" | "coral" | "cream";
}) {
  const styles = {
    turmeric: "bg-turmeric text-turmeric-foreground",
    coral:    "bg-coral text-cream",
    cream:    "bg-cream text-ink",
  }[tone];
  const tagColor = tone === "coral" ? "text-turmeric" : "text-spice";

  return (
    <a
      href={href}
      target="_blank" rel="noreferrer"
      className={`group rounded-2xl p-6 border-2 border-cream hover:-translate-y-1 transition-transform ${styles}`}
    >
      <div className={`font-script text-lg ${tagColor}`}>{tag}</div>
      <div className="font-display text-2xl font-black mt-1">{name}</div>
      <p className="text-sm opacity-75 mt-2 leading-relaxed">{desc}</p>
      <span className="inline-flex items-center gap-1 mt-4 font-semibold text-sm">
        Order now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </a>
  );
}
