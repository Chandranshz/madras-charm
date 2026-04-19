import { createFileRoute } from "@tanstack/react-router";
import { Flame, Leaf } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Chidambaram's New Madras Hotel, Lodhi Colony" },
      { name: "description", content: "Authentic South Indian menu — dosas, idlis, vadas, uttapams, thalis, filter coffee and Indo-Chinese. ₹200–400 per person." },
      { property: "og:title", content: "Menu — Chidambaram's New Madras Hotel" },
      { property: "og:description", content: "Crisp dosas, soft idlis, fragrant filter coffee and the famous welcome rasam." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string; tag?: "popular" | "spicy" | "new"; desc?: string };

const sections: { title: string; subtitle: string; items: Item[] }[] = [
  {
    title: "Dosas",
    subtitle: "Crisp on the edges, soft in the middle. Cast on a sizzling tawa.",
    items: [
      { name: "Plain Butter Masala Dosa", price: "₹220", tag: "popular", desc: "House special — buttery crisp, golden potato masala" },
      { name: "Mysore Masala Dosa", price: "₹240", tag: "spicy", desc: "Smeared with fiery red chutney" },
      { name: "Ragi Dosa", price: "₹230", desc: "Wholesome finger millet, nutty flavour" },
      { name: "Ragi Masala Dosa", price: "₹260" },
      { name: "Onion Uttapam", price: "₹210", desc: "Thick pancake, sweet onion topping" },
      { name: "Malabar Paratha with Veg Kurma", price: "₹250", tag: "new" },
    ],
  },
  {
    title: "Idlis & Vadas",
    subtitle: "Steamed pillows and crisp lentil rings — comfort, plated.",
    items: [
      { name: "Soft Idli (3 pcs)", price: "₹140", desc: "Served with sambhar and three chutneys" },
      { name: "Thatte Idli", price: "₹170", desc: "The famous wide Karnataka idli" },
      { name: "Ghee Podi Idli", price: "₹190", tag: "popular", desc: "Tossed in ghee and gunpowder spice" },
      { name: "Fried Idli", price: "₹180" },
      { name: "Dahi Vada", price: "₹160", tag: "popular", desc: "Soft urad vada in chilled yogurt" },
    ],
  },
  {
    title: "Rice & Thalis",
    subtitle: "A complete South Indian feast on a leaf.",
    items: [
      { name: "Special Thali", price: "₹350", tag: "popular", desc: "Rice, sambar, rasam, two veg, papad, curd, sweet" },
      { name: "Curd Rice", price: "₹180", desc: "Tempered with mustard, curry leaves" },
      { name: "Masala Upma", price: "₹160" },
      { name: "Sambhar Rice", price: "₹190" },
    ],
  },
  {
    title: "Indo-Chinese",
    subtitle: "Our other Delhi obsession — wok-tossed, plated hot.",
    items: [
      { name: "Veg Chow Mein", price: "₹220" },
      { name: "Hakka Noodles", price: "₹240" },
      { name: "Veg Manchurian", price: "₹260", tag: "spicy" },
      { name: "Schezwan Fried Rice", price: "₹240", tag: "spicy" },
    ],
  },
  {
    title: "Beverages",
    subtitle: "South Indian filter coffee, the way it's meant to be.",
    items: [
      { name: "Filter Coffee", price: "₹70", tag: "popular", desc: "Decoction + boiled milk, frothed in a davara" },
      { name: "Filter Coffee Take Away", price: "₹80" },
      { name: "Cold Coffee Ice Cream", price: "₹160" },
      { name: "Tender Coconut Shake", price: "₹150" },
      { name: "Fresh Lime Soda", price: "₹90" },
    ],
  },
];

const tagStyles = {
  popular: "bg-gold/15 text-gold-foreground border-gold/30",
  spicy: "bg-spice/15 text-spice border-spice/30",
  new: "bg-leaf/15 text-leaf border-leaf/30",
} as const;

const tagLabel = {
  popular: "Most loved",
  spicy: "Spicy",
  new: "New",
} as const;

function MenuPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <div className="font-script text-2xl text-spice mb-3">Our menu</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
            Six decades of Madrasi flavour, one pure-veg kitchen.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Prices are indicative. ₹200–400 per person. All preparations are
            <span className="inline-flex items-center gap-1 mx-1 text-leaf font-medium">
              <Leaf className="w-3.5 h-3.5" /> 100% vegetarian
            </span>
          </p>
        </div>
      </section>

      {/* Menu sections */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-10 max-w-5xl">
          <div className="space-y-20">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-6 mb-10">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight whitespace-nowrap">
                    {section.title}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-muted-foreground italic mb-10 max-w-2xl">{section.subtitle}</p>

                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {section.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2 flex-wrap">
                          {item.name}
                          {item.tag && (
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-wider font-medium ${tagStyles[item.tag]}`}
                            >
                              {item.tag === "spicy" && <Flame className="w-2.5 h-2.5" />}
                              {tagLabel[item.tag]}
                            </span>
                          )}
                        </h3>
                        <div className="flex-1 border-b border-dashed border-border/70 mb-1.5" />
                        <span className="font-display text-lg font-semibold text-primary whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 lg:p-14 bg-primary text-primary-foreground rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 paisley-divider opacity-10" />
            <div className="relative">
              <div className="font-script text-2xl text-gold mb-2">A small house tradition</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Every guest is welcomed with a complimentary rasam.
              </h3>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Warm, peppery, and grounding — it's how we've started every meal since the 1970s.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
