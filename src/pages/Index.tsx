import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, Clock, Star, ChevronRight, Coffee, ShoppingBag, Music, Crosshair, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const specials = [
  "🔥 Friday Night Fish Fry — Fried Catfish Plate $10.95!",
  "🧇 Breakfast Served All Day — Try our famous Belgian Waffles!",
  "🎵 Second Saturday Bluegrass — Live Music & Great Food!",
  "🥩 Now Serving Wagyu Beef Burgers — Premium & Delicious!",
];

const features = [
  { icon: Coffee, title: "Fresh Deli", description: "Homemade breakfast & lunch, served with love — all day long." },
  { icon: ShoppingBag, title: "General Store", description: "Groceries, snacks, and everyday essentials for the community." },
  { icon: Crosshair, title: "Sporting Goods", description: "Hunting, fishing, and outdoor supplies for your next adventure." },
  { icon: Landmark, title: "Antiques & Gifts", description: "Unique treasures, vintage finds, and handmade crafts." },
  { icon: Music, title: "Live Bluegrass", description: "Live music events — gospel, bluegrass, and good times every month." },
];

const testimonials = [
  { name: "Vince Martin", text: "They make five-star pancakes, and I've eaten at a lot of restaurants. They're so fluffy and delicious — the best I've ever had." },
  { name: "Local Regular", text: "Eating at Carter's is like eating at a friend's house. The food is incredible and the people make you feel like family." },
  { name: "Weekend Visitor", text: "We stopped for gas and stayed for the waffles. Now we drive an hour just to come back. This place is a hidden gem." },
];

const Index = () => {
  const [currentSpecial, setCurrentSpecial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpecial((prev) => (prev + 1) % specials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9Indvb2QiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMzBINjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3dvb2QpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
        <div className="container relative py-20 md:py-32 text-center">
          <p className="text-secondary text-sm font-body uppercase tracking-widest mb-4">Est. 1879 · Lynch Station, Virginia</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Good food, good neighbors, and God's blessings
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-body">
            Welcome to Carter's General Store & Deli — where every meal is made with love and every visitor is treated like family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body">
              <Link to="/menu">
                View Our Menu
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body">
              <a href="tel:4343091753">
                <Phone className="h-4 w-4 mr-2" />
                Call 434-309-1753
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specials Banner */}
      <section className="bg-accent text-accent-foreground py-3">
        <div className="container text-center">
          <p className="text-sm font-body font-medium animate-fade-in" key={currentSpecial}>
            {specials[currentSpecial]}
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-b border-border py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground font-body">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>6376 Bedford Hwy, Lynch Station, VA</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:4343091753" className="hover:text-primary transition-colors">434-309-1753</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Tue–Sat · Closed Sun & Mon</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-3">More Than Just a Deli</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Since 1879, Carter's has been the heart of Lynch Station — a place for food, fellowship, and everything in between.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body mb-4">
            At Carter's, we believe in serving our community with honest food, warm hospitality, and the values that have guided this store for over 145 years. Every plate we prepare, every neighbor we greet, is an opportunity to share kindness and gratitude.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            We're not just a store — we're a gathering place where families come together, friendships are made, and everyone leaves a little happier than when they came in.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-12">What Folks Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic font-body mb-4">"{t.text}"</p>
                <p className="text-sm font-semibold text-foreground font-body">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container text-center max-w-lg">
          <h2 className="text-2xl font-heading font-bold mb-3">Stay Connected</h2>
          <p className="text-sm text-secondary-foreground/80 mb-6 font-body">
            Sign up for updates on specials, events, and blessings from Carter's.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
