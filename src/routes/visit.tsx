import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Wifi, Leaf, Car, Users, Navigation } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Chidambaram's New Madras Hotel, Khanna Market, Lodhi Colony" },
      { name: "description", content: "Find us at Shop No. 7, Khanna Market, Lodhi Rd, New Delhi. Open daily till 10:30 pm. Call 098113 01534." },
      { property: "og:title", content: "Visit Chidambaram's New Madras Hotel" },
      { property: "og:description", content: "Khanna Market, Lodhi Road, New Delhi. Open daily till 10:30 pm." },
    ],
  }),
  component: VisitPage,
});

const days = [
  { d: "Monday", h: "8:00 am – 10:30 pm" },
  { d: "Tuesday", h: "8:00 am – 10:30 pm" },
  { d: "Wednesday", h: "8:00 am – 10:30 pm" },
  { d: "Thursday", h: "8:00 am – 10:30 pm" },
  { d: "Friday", h: "8:00 am – 10:30 pm" },
  { d: "Saturday", h: "8:00 am – 10:30 pm" },
  { d: "Sunday", h: "8:00 am – 10:30 pm" },
];

function VisitPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-10 text-center">
          <div className="font-script text-2xl text-spice mb-3">Find us</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
            Khanna Market, Lodhi Colony.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            A short walk from Khan Market, JLN Stadium and India Habitat Centre.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          {/* Left: details */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-5 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Address
              </h2>
              <p className="text-foreground leading-relaxed">
                Shop No. 7, Khanna Market<br />
                Lodhi Road, New Delhi<br />
                Delhi 110003
              </p>
              <a
                href="https://maps.google.com/?q=Chidambaram's+New+Madras+Hotel+Khanna+Market+Lodhi+Road"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
              >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-5 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Reservations & Orders
              </h2>
              <a href="tel:+919811301534" className="font-display text-3xl font-bold hover:text-primary transition-colors">
                098113 01534
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                We don't take table reservations — but call ahead for take-away orders.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Hours
              </h2>
              <ul className="space-y-2.5">
                {days.map((d) => (
                  <li key={d.d} className="flex justify-between text-sm border-b border-dashed border-border pb-2.5">
                    <span className="font-medium text-foreground">{d.d}</span>
                    <span className="text-muted-foreground">{d.h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Leaf, label: "Pure Vegetarian" },
                { icon: Wifi, label: "Free Wi-Fi" },
                { icon: Users, label: "Avg. visit 20–45 min" },
                { icon: Car, label: "Street parking" },
              ].map((a) => (
                <div key={a.label} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                  <a.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: map */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-warm aspect-square lg:aspect-auto lg:h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Chidambaram%27s+New+Madras+Hotel+Khanna+Market+Lodhi+Road+New+Delhi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Chidambaram's New Madras Hotel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="font-script text-2xl text-spice mb-2">Insider tips</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
              A little advice from the regulars.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Beat the rush", d: "Weekday breakfasts are blissfully calm. Sundays after 11 am can mean a 20-minute wait." },
              { n: "02", t: "Order the coffee first", d: "It takes a few minutes to froth properly. Order it the moment you sit down." },
              { n: "03", t: "Try the ghee podi idli", d: "Not on most South Indian menus. Soft idli, tossed in ghee and gunpowder. Trust us." },
            ].map((tip) => (
              <div key={tip.n} className="bg-card border border-border rounded-2xl p-8 shadow-soft">
                <div className="font-display text-5xl font-bold text-gold mb-4">{tip.n}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{tip.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
