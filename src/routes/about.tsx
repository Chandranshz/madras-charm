import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import dishCoffee from "@/assets/dish-coffee.jpg";
import dishIdli from "@/assets/dish-idli.jpg";
import bananaLeaf from "@/assets/banana-leaf.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Chidambaram's New Madras Hotel" },
      { name: "description", content: "Five decades of Madrasi cuisine in Lodhi Colony. The story of a tiny Khanna Market kitchen that became a Delhi institution." },
      { property: "og:title", content: "Our Story — Chidambaram's New Madras Hotel" },
      { property: "og:description", content: "How a small no-frills South Indian eatery became one of Delhi's most-loved kitchens." },
      { property: "og:image", content: dishCoffee },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "1970s", title: "A small kitchen opens", text: "Chidambaram sets up shop in Khanna Market, Lodhi Colony — bringing authentic Madrasi flavours to Delhi." },
  { year: "1990s", title: "The regulars arrive", text: "Diplomats, journalists, civil servants and students from across South Delhi adopt us as their second canteen." },
  { year: "2010s", title: "5,000+ reviews", text: "Word-of-mouth becomes word-of-Google. We never advertise, but the queue keeps growing." },
  { year: "Today", title: "Same recipes, same soul", text: "Three generations later, the dosa batter still ferments overnight. The filter coffee still froths between two steel tumblers." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="font-script text-2xl text-spice mb-3">Our story</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-balance">
              A tiny kitchen.<br />
              <span className="italic text-primary">A loud reputation.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              For more than fifty years, Chidambaram's has done one thing — serve honest,
              uncomplicated South Indian food cooked the way it would be at home in
              Tamil Nadu. No frills. No fuss. Just the kind of meal you remember.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-warm">
              <img src={dishCoffee} alt="Filter coffee being poured" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Story body */}
      <section className="py-20 lg:py-28 relative">
        <div
          className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
          style={{ backgroundImage: `url(${bananaLeaf})` }}
        />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="max-w-3xl mx-auto space-y-8 font-display text-xl md:text-2xl leading-relaxed text-foreground/90">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
              Walk past Khanna Market on a Sunday morning and you'll see them — the regulars,
              the families, the curious tourists, all queuing patiently for a table that seats four.
            </p>
            <p>
              Inside, the space is small. There's no menu card art-directed by a designer, no
              candlelight, no ambient playlist. What there is, instead, is the unmistakable
              perfume of mustard seeds hitting hot ghee, the rhythmic hiss of dosa batter on the tawa,
              and the soft clatter of steel tumblers carrying coffee from the kitchen to your hand.
            </p>
            <p className="italic text-primary">
              "The space can be congested," people sometimes say. We agree. That's also why the food
              tastes the way it does — a kitchen this small can't cut corners.
            </p>
            <p>
              Every batter is fermented overnight. The chutneys are ground fresh each morning.
              The sambhar's tamarind base is reduced for hours. And the filter coffee — the one
              you'll remember on the way home — is made with a decoction that's been brewing since
              before you parked the car.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="font-script text-2xl text-spice mb-2">Five decades</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              A short history, told in flavours.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <article
                key={m.year}
                className="bg-card border border-border rounded-2xl p-7 shadow-soft relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gold/10" />
                <div className="font-display text-3xl font-bold text-primary mb-3 relative">{m.year}</div>
                <h3 className="font-display text-lg font-semibold mb-2 relative">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{m.text}</p>
                <div className="absolute bottom-3 right-4 font-script text-2xl text-gold/30">
                  0{i + 1}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-warm order-2 lg:order-1">
            <img src={dishIdli} alt="Soft idli served with sambhar" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="font-script text-2xl text-spice mb-3">An invitation</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Come hungry. Leave a regular.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Whether it's your first dosa or your fiftieth, we'll start your meal the same way —
              with a small steel tumbler of warm rasam. On the house, always.
            </p>
            <Link
              to="/visit"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-gradient-warm text-primary-foreground rounded-full font-medium shadow-soft hover:scale-105 transition-transform"
            >
              Plan your visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
