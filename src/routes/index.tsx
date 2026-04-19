import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Star, MapPin, Clock, Wifi, Leaf, ArrowRight, Quote, Phone, Sparkles,
  Truck, Infinity as InfinityIcon, Award, Sprout, ShoppingBag,
} from "lucide-react";
import heroDosa from "@/assets/hero-dosa-platter.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishCoffee from "@/assets/dish-coffee.jpg";
import dishIdli from "@/assets/dish-idli.jpg";
import dishVada from "@/assets/dish-vada.jpg";
import dishThali from "@/assets/dish-thali.jpg";
import dishUttapam from "@/assets/dish-uttapam.jpg";
import dishSpringroll from "@/assets/dish-springroll.jpg";
import dishManchurian from "@/assets/dish-manchurian.jpg";
import dishChowmein from "@/assets/dish-chowmein.jpg";
import storyVintage from "@/assets/story-vintage.jpg";
import kolam from "@/assets/kolam-pattern.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chidambaram's New Madras Hotel — Authentic South Indian since 1940, Lodhi Colony Delhi" },
      { name: "description", content: "Delhi's first South Indian kitchen — crisp dosas, fluffy idlis & filter coffee since 1940. ₹200–400 per person. Open daily till 10:30 pm. Order on Zomato, Swiggy or PetPooja." },
      { property: "og:title", content: "Chidambaram's New Madras Hotel — Since 1940" },
      { property: "og:description", content: "Crisp dosas, soft idlis, fragrant filter coffee — and a welcome rasam on the house." },
      { property: "og:image", content: heroDosa },
      { name: "twitter:image", content: heroDosa },
    ],
  }),
  component: Index,
});

const ORDER_URL = "https://newmadrashotel.petpooja.com/";

const bestSellers = [
  { name: "Plain Butter Masala Dosa", tag: "Most Loved", img: dishDosa },
  { name: "Filter Coffee", tag: "Signature", img: dishCoffee },
  { name: "Soft Idli & Sambhar", tag: "Classic", img: dishIdli },
  { name: "Mix Veg Uttapam", tag: "Crowd Pick", img: dishUttapam },
  { name: "Veg Spring Roll", tag: "Indo-Chinese", img: dishSpringroll },
  { name: "Veg Manchurian", tag: "Hot Plate", img: dishManchurian },
  { name: "Paneer Chowmein", tag: "Fusion", img: dishChowmein },
  { name: "Special Thali", tag: "House Special", img: dishThali },
  { name: "Dahi Vada", tag: "Cool & Tangy", img: dishVada },
];

const promises = [
  { icon: Truck, title: "Fast Service", text: "Avg. visit 20–45 min, even on weekend rush." },
  { icon: InfinityIcon, title: "Limitless Sambhar", text: "Refills on the house, always — and rasam too." },
  { icon: Award, title: "Premium Quality", text: "Stone-ground batter, hand-roasted spices, every day." },
  { icon: Sprout, title: "Always Fresh", text: "Batter ground each evening for the next morning." },
];

const reviews = [
  { name: "Rakhi Ray", text: "Superb food. Tastes fresh and flavourful. A very interesting beetroot chutney. Perfect filter coffee. Reasonable pricing. Friendly staff. Fast service. What else does one need?" },
  { name: "Amaan Khan", text: "DO NOT MISS the Chef's Special Rava Dosa — it comes with papadam, dahi chaat, rasam and buttermilk. Every little detail was perfect, even the chutneys." },
  { name: "Fatima Mohsin", text: "South Indian food at its best! Tasty meals, light on the pocket and quick service. Their podi masala is the best in town." },
  { name: "Vishwajeet Dua", text: "Visiting this place for 15 years. Authentic taste at very reasonable prices — much better than Sagar Ratna and Saravana Bhavan. The complimentary rasam is irresistible." },
  { name: "Monica M. Guha", text: "Finally made it on a rainy morning. The mix snacks thali — uttapam, masala idli, vada, sambhar, rasam, halwa — was super delicious. Uttapam was the star." },
  { name: "Srishti Chopra", text: "Great food at reasonable prices, with truly authentic dishes like pesarattu that you don't find at other South Indian joints." },
];

const milestones = [
  { year: "1940s", title: "The Chidambaram Mess", text: "Mr. Chidambaram grinds idli batter by hand each evening for the Tamil workers of newly built Lodhi Colony — the first South Indian food in Delhi." },
  { year: "1970s", title: "A New Madras Hotel", text: "The mess re-opens as 'Chidambaram's New Madras Hotel' in Khanna Market — a tiny shop with an outsized heart." },
  { year: "1990s", title: "Delhi falls in love", text: "Office crowds, families, students — the rasam glass becomes a Lodhi Road ritual." },
  { year: "Today", title: "Three generations on", text: "Same kitchen, same recipes, the same complimentary rasam — and 5,000+ Google reviews to prove it." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-turmeric grain">
        {/* organic blobs */}
        <div className="pointer-events-none absolute -top-32 -left-24 w-[480px] h-[480px] bg-cream/70 animate-blob" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[420px] h-[420px] bg-coral/30 animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 w-[520px] h-[520px] bg-leaf/25 animate-blob" style={{ animationDelay: "-8s" }} />

        {/* floating leaves */}
        <Leaf className="hidden md:block absolute top-32 right-1/3 w-10 h-10 text-leaf/70 -rotate-12 animate-wobble" />
        <Leaf className="hidden md:block absolute bottom-20 left-12 w-14 h-14 text-leaf/60 rotate-45 animate-wobble" style={{ animationDelay: "-2s" }} />

        <div className="container mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-12 gap-10 items-center py-12">
          <div className="lg:col-span-7 animate-float-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink text-cream text-xs font-semibold tracking-wider uppercase mb-8 sticker">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
              Open · Closes 10:30 pm · Lodhi Colony
            </div>

            <div className="font-tamil text-2xl text-primary mb-2">வணக்கம் · Vanakkam</div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight text-balance text-ink">
              Delhi's <span className="italic text-primary">first</span>
              <br />
              <span className="squiggle">South Indian</span>
              <br />
              kitchen — <span className="text-spice italic">since 1940.</span>
            </h1>

            <p className="mt-8 text-lg text-ink/75 max-w-xl leading-relaxed">
              Three generations. One stone grinder. Crisp dosas, pillowy idlis,
              ghee-soaked podi, and that filter coffee — straight from a tiny
              Khanna Market kitchen with an outsized heart.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={ORDER_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Online
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-4 bg-cream text-ink rounded-full font-semibold border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                See the Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/visit"
                className="inline-flex items-center gap-2 px-5 py-4 text-ink font-semibold underline underline-offset-4 decoration-2 decoration-spice"
              >
                Find Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t-2 border-dashed border-ink/20">
              <div>
                <div className="flex items-center gap-1.5 text-spice">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-xs text-ink/70">
                  <span className="font-bold text-ink">4.2</span> · 5,023 Google reviews
                </div>
              </div>
              <div className="text-xs text-ink/70">
                <div className="font-bold text-ink text-sm">₹200–400</div>
                <div>per person</div>
              </div>
              <div className="text-xs text-ink/70">
                <div className="font-bold text-ink text-sm flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-leaf" /> 100% Pure Veg
                </div>
                <div>Wi-Fi · Quick service</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src={kolam} alt="" aria-hidden
              className="absolute -top-10 -left-10 w-48 h-48 opacity-40 animate-spin-slow pointer-events-none"
            />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-ink shadow-pop">
              <img
                src={heroDosa}
                alt="Crispy masala dosa with sambhar and chutneys on banana leaf"
                width={1280}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-4 md:-top-8 md:-right-8 bg-primary text-primary-foreground rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-pop-gold rotate-12 border-4 border-ink">
              <span className="font-script text-2xl md:text-3xl leading-none">Since</span>
              <span className="font-display text-3xl md:text-4xl font-black">1940</span>
              <span className="text-[10px] uppercase tracking-widest mt-1">Lodhi Colony</span>
            </div>

            <div className="hidden md:block absolute -bottom-8 -left-8 bg-leaf text-leaf-foreground rounded-2xl p-5 shadow-pop max-w-[260px] border-2 border-ink rotate-[-3deg]">
              <div className="text-[10px] uppercase tracking-widest text-leaf-foreground/80 mb-1">A house tradition</div>
              <p className="font-display text-base italic leading-snug">
                "Welcome rasam, on the house — every single visit."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-ink text-cream py-5 overflow-hidden border-y-4 border-primary">
        <div className="flex marquee-track whitespace-nowrap gap-12 font-display text-2xl md:text-3xl">
          {[...Array(2)].flatMap((_, k) =>
            ["Crispy Dosa", "Soft Idli", "Filter Coffee", "Free Rasam", "Stone-Ground Batter", "Since 1940", "Pure Veg", "Khanna Market"].map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-12 shrink-0">
                <Sparkles className="w-5 h-5 text-turmeric" />
                <span>{w}</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="font-script text-2xl text-spice mb-2">Best of the kitchen</div>
              <h2 className="font-display text-4xl md:text-6xl font-black text-ink tracking-tight text-balance">
                The dishes Delhi keeps <span className="italic text-primary">coming back</span> for.
              </h2>
            </div>
            <Link to="/menu" className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-cream font-semibold hover:bg-primary transition-colors">
              Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((dish, i) => (
              <a
                key={dish.name}
                href={ORDER_URL}
                target="_blank" rel="noreferrer"
                className={`group relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-ink shadow-soft hover:shadow-pop transition-all hover:-translate-y-1 ${
                  i % 5 === 0 ? "lg:col-span-2 lg:aspect-[8/5]" : ""
                }`}
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-turmeric text-turmeric-foreground text-[10px] uppercase tracking-widest font-bold border-2 border-ink">
                    {dish.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-cream tracking-tight">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 w-11 h-11 rounded-full bg-cream text-ink flex items-center justify-center group-hover:bg-turmeric transition-colors">
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 md:hidden text-center">
            <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-semibold">
              View the full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-cream py-24 lg:py-32 relative overflow-hidden">
        <img src={kolam} alt="" aria-hidden className="absolute -right-32 top-12 w-96 h-96 opacity-20 pointer-events-none animate-spin-slow" />
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-ink shadow-pop">
              <img src={storyVintage} alt="A 1940s Madrasi mess kitchen in Delhi" loading="lazy" width={1280} height={1600} className="w-full h-full object-cover sepia-[0.3]" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-turmeric text-turmeric-foreground p-5 rounded-2xl border-2 border-ink shadow-pop max-w-[220px] rotate-[4deg]">
              <div className="font-script text-xl">Since</div>
              <div className="font-display text-4xl font-black leading-none">1940</div>
              <div className="text-xs mt-1">85+ years of stone-ground batter</div>
            </div>
          </div>

          <div>
            <div className="font-script text-2xl text-spice mb-2">Our story</div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-balance text-ink">
              From a <span className="italic text-primary">tiny mess</span> to a Delhi institution.
            </h2>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">
              In the 1940s, the British built Lodhi Colony for East India Company workers
              — many of them Tamilians from Madras. Mr. Chidambaram opened a small mess to
              feed them, grinding idli and dosa batter by hand each evening to serve the
              next morning. He was the first to bring South Indian food to Delhi.
            </p>

            <ol className="mt-10 space-y-5">
              {milestones.map((m) => (
                <li key={m.year} className="flex gap-5">
                  <div className="shrink-0 w-20 font-display font-black text-2xl text-primary">{m.year}</div>
                  <div>
                    <div className="font-display font-bold text-ink text-lg">{m.title}</div>
                    <div className="text-sm text-ink/70 leading-relaxed">{m.text}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-cream rounded-full font-semibold hover:bg-primary transition-colors">
                Read the full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="py-24 lg:py-32 bg-turmeric relative overflow-hidden grain">
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-script text-2xl text-spice mb-2">Our promise</div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-ink tracking-tight text-balance">
              Four things we <span className="italic text-primary">never</span> compromise on.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((p, i) => (
              <div
                key={p.title}
                className={`bg-cream border-2 border-ink rounded-3xl p-7 shadow-pop hover:-translate-y-1 transition-transform ${i % 2 ? "rotate-[1deg]" : "rotate-[-1deg]"}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-5 border-2 border-ink">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 paisley-divider opacity-10" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-10 h-10 text-turmeric mx-auto mb-6" />
            <p className="font-display text-2xl md:text-4xl font-medium leading-tight italic text-balance">
              "Authentic South Indian taste at very reasonable prices.
              Much better than Sagar Ratna and Saravana Bhavan.
              The complimentary rasam is irresistible."
            </p>
            <div className="mt-8 font-script text-xl text-turmeric">— Vishwajeet, regular for 15 years</div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <div className="font-script text-2xl text-spice mb-2">Loved by Delhi</div>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-balance text-ink">
                5,000+ reviews. <span className="italic text-primary">One honest kitchen.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-ink text-cream px-5 py-3 rounded-2xl border-2 border-ink shadow-pop-gold">
              <div className="text-5xl font-display font-black text-turmeric">4.2</div>
              <div>
                <div className="flex gap-0.5 text-turmeric">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-cream/70 mt-1">5,023 Google reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <article
                key={review.name}
                className={`bg-card border-2 border-ink rounded-3xl p-7 shadow-soft hover:shadow-pop transition-all hover:-translate-y-1 ${i % 3 === 1 ? "lg:translate-y-6" : ""}`}
              >
                <div className="flex gap-0.5 text-spice mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-display text-lg leading-relaxed text-foreground italic">
                  "{review.text}"
                </p>
                <div className="mt-6 pt-5 border-t border-dashed border-ink/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-sun text-ink font-display font-bold flex items-center justify-center border-2 border-ink">
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

      {/* ORDER ONLINE */}
      <section className="py-24 lg:py-32 bg-ink text-cream relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/40 animate-blob" />
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-turmeric/20 animate-blob" style={{ animationDelay: "-6s" }} />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="font-script text-2xl text-turmeric mb-2">Order online</div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-balance">
              Madras at your <span className="italic text-turmeric">doorstep.</span>
            </h2>
            <p className="mt-4 text-cream/70">
              Order direct from our kitchen, or pick your favourite delivery app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <a
              href={ORDER_URL}
              target="_blank" rel="noreferrer"
              className="group bg-turmeric text-turmeric-foreground rounded-3xl p-7 border-2 border-cream shadow-pop-gold hover:-translate-y-1 transition-transform"
            >
              <div className="font-script text-xl text-spice">Direct & best price</div>
              <div className="font-display text-3xl font-black mt-1">PetPooja</div>
              <p className="text-sm text-ink/70 mt-2">Order straight from our own kitchen — no middlemen.</p>
              <span className="inline-flex items-center gap-1 mt-4 font-semibold">Order now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
            </a>
            <a
              href="https://www.zomato.com/ncr/chidambarams-new-madras-hotel-lodhi-colony-new-delhi"
              target="_blank" rel="noreferrer"
              className="group bg-cream text-ink rounded-3xl p-7 border-2 border-cream hover:-translate-y-1 transition-transform"
            >
              <div className="font-script text-xl text-spice">Delivery</div>
              <div className="font-display text-3xl font-black mt-1">Zomato</div>
              <p className="text-sm text-ink/70 mt-2">5K+ Google ratings, available across South Delhi.</p>
              <span className="inline-flex items-center gap-1 mt-4 font-semibold">Open Zomato <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
            </a>
            <a
              href="https://www.swiggy.com/restaurants/chidambarams-new-madras-hotel"
              target="_blank" rel="noreferrer"
              className="group bg-coral text-cream rounded-3xl p-7 border-2 border-cream hover:-translate-y-1 transition-transform"
            >
              <div className="font-script text-xl text-turmeric">Delivery</div>
              <div className="font-display text-3xl font-black mt-1">Swiggy</div>
              <p className="text-sm text-cream/80 mt-2">Hot dosas at your door, ₹400 for two.</p>
              <span className="inline-flex items-center gap-1 mt-4 font-semibold">Open Swiggy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="py-24 lg:py-32 bg-turmeric/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="font-script text-2xl text-spice mb-2">Come find us</div>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-balance text-ink">
                Tucked into Khanna Market — easy to miss, <span className="italic text-primary">impossible to forget.</span>
              </h2>

              <div className="mt-10 space-y-5">
                <InfoRow icon={MapPin} title="Address" text="Shop No. 7, Khanna Market, Lodhi Rd, New Delhi 110003" />
                <InfoRow icon={Clock} title="Hours" text="Open daily · 8:00 am — 10:30 pm" />
                <InfoRow icon={Wifi} title="Amenities" text="Free Wi-Fi · 100% Vegetarian · Quick service · Avg. visit 20–45 min" />
                <InfoRow icon={Phone} title="Call to reserve" text="098113 01534" />
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/visit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919811301534"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream text-ink rounded-full font-semibold border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
                >
                  <Phone className="w-4 h-4" /> 098113 01534
                </a>
              </div>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-ink shadow-pop">
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

function InfoRow({ icon: Icon, title, text }: { icon: typeof MapPin; title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 border-2 border-ink">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="font-semibold text-ink">{title}</div>
        <div className="text-sm text-ink/70">{text}</div>
      </div>
    </div>
  );
}
