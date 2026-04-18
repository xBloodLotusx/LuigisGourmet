import { Phone, MapPin, Clock, Wine, Utensils, Leaf, CalendarCheck, Trees, Car, Star, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReservationDialog } from "@/components/ReservationDialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import heroFront from "@/assets/LuigisFront.jpg";
import dishFilet from "@/assets/LuigisFilet.jpg";
import dishSalmon from "@/assets/LuigisSalmon.jpg";
import galleryLasagna from "@/assets/LuigisLasagna.jpg";
import galleryRoom from "@/assets/LuigisRoom.jpg";

const PHONE = "(540) 989-6277";
const TEL = "tel:+15409896277";
const ADDRESS = "3301 Brambleton Ave, Roanoke, VA 24018";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const dishes = [
  { name: "Filet & Shrimp Caesar", img: dishFilet, desc: "Choice Filet and Jumbo Shrimp wrapped in Veal served with Asparagus and Potatoes." },
  { name: "Loch Duart Salmon", img: dishSalmon, desc: "Loch Duart Salmon served with Asparagus and Potatoes flavored with garlic, green onions, and tomatoes." },
];

const features = [
  { icon: Utensils, title: "Authentic Italian", desc: "Traditional family recipes prepared with care." },
  { icon: Wine, title: "Full Bar", desc: "Curated wine list and classic cocktails." },
  { icon: Leaf, title: "Vegetarian Options", desc: "Thoughtful plates for every preference." },
  { icon: Trees, title: "Outdoor Seating", desc: "Dine al fresco when the weather invites." },
  { icon: CalendarCheck, title: "Reservations Welcome", desc: "Plan your evening with peace of mind." },
  { icon: Car, title: "On-Site Parking", desc: "Easy arrival, easy departure." },
];

const reviews = [
  { quote: "The lasagna was perfection — layers of love. Service felt like family.", author: "Maria R.", source: "MenuPix" },
  { quote: "Best veal piccata in Roanoke. Cozy room, attentive servers, real Italian charm.", author: "Daniel P.", source: "Tripadvisor" },
  { quote: "We've celebrated three anniversaries here. Always warm, always wonderful.", author: "The Bennetts", source: "Local Diner" },
];

const Index = () => {
  useScrollReveal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-primary">Luigi's</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground hidden sm:inline">Gourmet Italian</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href={TEL} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
          <button className="md:hidden p-2" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-1 text-sm font-medium">
                  {l.label}
                </a>
              ))}
              <a href={TEL} className="py-1 text-sm font-medium flex items-center gap-2"><Phone className="h-4 w-4" /> {PHONE}</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroFront}
          alt="Luigi's Gourmet Italian Restaurant exterior in Roanoke"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-20 md:pb-28">
          <p className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 font-medium">Roanoke, Virginia · Since est.</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground max-w-4xl leading-[1.05]">
            Authentic Italian Cuisine in the Heart of Roanoke
          </h1>
          <p className="mt-5 text-base md:text-xl text-primary-foreground/85 max-w-2xl font-light">
            Family-crafted recipes, warm hospitality, and unforgettable flavors.
          </p>
          {/* Removed Reserve and View Menu buttons */}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="fade-in-up">
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Roanoke tradition, plate after plate.
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                For years, Luigi's has been the place Roanoke turns to for the kind of Italian cooking that
                tastes like it was made by someone who loves you. Each sauce, each pasta, each glass poured
                from our full bar comes with the same intent: feed you well, make you stay a while.
              </p>
              <p>
                Our cozy dining rooms — with options for private gatherings — were built for date nights,
                family dinners, and quiet celebrations. The recipes are traditional. The welcome is sincere.
                The wine list is generous.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Family-friendly</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Full Bar</Badge>
              <Badge variant="secondary" className="text-sm py-1.5 px-3">Private Dining</Badge>
            </div>
          </div>
          <div className="fade-in-up relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-2" />
            <img
              src={galleryRoom}
              alt="Inside Luigi's Gourmet Italian Restaurant dining room"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative rounded-xl object-cover w-full aspect-square shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section id="menu" className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Signature Plates</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Dishes</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A taste of what's waiting at your table tonight.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {dishes.map((d) => (
              <Card key={d.name} className="overflow-hidden group fade-in-up border-border/60 hover:shadow-[var(--shadow-elegant)] transition-shadow duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.img}
                    alt={`${d.name} at Luigi's`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-2">{d.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28 container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Why Luigi's</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">More than a meal.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="fade-in-up flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 md:py-28 bg-foreground text-background">
        <div className="container">
          <div className="text-center mb-14 fade-in-up">
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Guests Say</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Loved across Roanoke.</h2>
            <div className="mt-6 flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <span className="text-sm">4.5 on MenuPix</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <span className="text-sm">4.2 on Tripadvisor</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.author} className="fade-in-up p-8 rounded-xl bg-background/5 border border-background/10 backdrop-blur-sm">
                <div className="flex text-gold mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="font-display text-lg italic leading-relaxed mb-5">"{r.quote}"</p>
                <p className="text-sm text-background/70">— {r.author}, <span className="text-gold">{r.source}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28 container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Inside Luigi's</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">A glimpse of the table.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <img src={heroFront} alt="Luigi's exterior" loading="lazy" width={1920} height={1280} className="rounded-lg object-cover aspect-[3/4] md:row-span-2 md:aspect-auto md:h-full w-full fade-in-up" />
          <img src={galleryRoom} alt="Dining room at Luigi's" loading="lazy" width={1280} height={960} className="rounded-lg object-cover aspect-square w-full fade-in-up" />
          <img src={galleryLasagna} alt="House lasagna" loading="lazy" width={1024} height={1024} className="rounded-lg object-cover aspect-square w-full fade-in-up" />
          <img src={dishFilet} alt="Filet & Shrimp Caesar" loading="lazy" width={1024} height={1024} className="rounded-lg object-cover aspect-square md:col-span-2 md:aspect-[2/1] w-full fade-in-up" />
          <img src={dishSalmon} alt="Loch Duart Salmon" loading="lazy" width={1024} height={1024} className="rounded-lg object-cover aspect-square w-full fade-in-up" />
        </div>
      </section>

      {/* HOURS & LOCATION */}
      <section id="contact" className="py-20 md:py-28 bg-secondary/40">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="fade-in-up">
            <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3">Visit Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Hours & Location</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-muted-foreground">Open daily · 4:00 PM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={TEL} className="text-muted-foreground hover:text-primary transition-colors">{PHONE}</a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Parking Available", "Outdoor Seating", "Full Bar", "Reservations Accepted"].map((f) => (
                <Badge key={f} variant="outline" className="py-1.5 px-3">{f}</Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ReservationDialog trigger={<Button size="lg">Reserve a Table</Button>} />
              <a href={TEL}><Button size="lg" variant="outline"><Phone className="h-4 w-4" /> Call Now</Button></a>
            </div>
          </div>
          <div className="fade-in-up rounded-xl overflow-hidden shadow-[var(--shadow-soft)] border border-border min-h-[360px]">
            <iframe
              title="Map to Luigi's Gourmet Italian Restaurant"
              src="https://www.google.com/maps?q=3301+Brambleton+Ave,+Roanoke,+VA+24018&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
        <div className="container text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Experience Authentic Italian Dining Tonight.
          </h2>
          <p className="mt-5 text-primary-foreground/85 max-w-xl mx-auto text-lg">
            Tables fill quickly on weekends — reserve yours now.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <ReservationDialog
              trigger={<Button size="lg" variant="secondary" className="text-base">Reserve a Table</Button>}
            />
            <a href="#menu">
              <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Menu
              </Button>
            </a>
            <a href={TEL}>
              <Button size="lg" variant="ghost" className="text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/80 py-14">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-display text-2xl font-bold text-background">Luigi's</p>
            <p className="text-sm uppercase tracking-[0.2em] text-gold mt-1">Gourmet Italian</p>
            <p className="mt-4 text-sm leading-relaxed">Authentic Italian dining in the heart of Roanoke since opening day.</p>
          </div>
          <div>
            <p className="font-semibold text-background mb-3">Visit</p>
            <p className="text-sm">{ADDRESS}</p>
            <p className="text-sm mt-2">Daily · 4:00 PM – 10:00 PM</p>
            <a href={TEL} className="text-sm hover:text-gold transition-colors mt-2 inline-block">{PHONE}</a>
          </div>
          <div>
            <p className="font-semibold text-background mb-3">Explore</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-background/10 text-xs text-background/50">
          © {new Date().getFullYear()} Luigi's Gourmet Italian Restaurant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
