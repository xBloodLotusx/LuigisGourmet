import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Church, Calendar, Camera, Car, Fish } from "lucide-react";

const regularEvents = [
  { icon: Music, title: "Second Saturday Bluegrass", description: "Live bluegrass music every 2nd Saturday. Bring your instruments and join the jam!", when: "2nd Saturday of each month" },
  { icon: Church, title: "First Saturday Gospel", description: "Uplifting gospel music to start the month right. All are welcome.", when: "1st Saturday of each month" },
  { icon: Car, title: "Third Saturday Hot Rods", description: "Classic car show & cruise-in. Show off your ride or just come admire!", when: "3rd Saturday of each month" },
  { icon: Music, title: "Fourth Saturday Concerts", description: "Special guest musicians and bands. Check our Facebook for lineups!", when: "4th Saturday of each month" },
  { icon: Fish, title: "Friday Night Fish Fry", description: "Fried catfish, hush puppies, and all the fixings. A community favorite!", when: "Select Fridays" },
  { icon: Calendar, title: "Bluegrass Pickin' & Pancakes", description: "Start your weekend with live picking and our famous pancake brunch.", when: "Special events" },
];

const announcements = [
  { title: "November Jeep Rally", description: "Our annual Jeep rally brings off-road enthusiasts from across the region. Food, fun, and fellowship!" },
  { title: "Holiday Gift Baskets", description: "Order custom gift baskets filled with local goods and Carter's favorites. Perfect for Christmas giving!" },
  { title: "Church Partnership Program", description: "We partner with local churches for fundraisers, community meals, and charity drives. Contact us to get involved." },
];

const CommunityPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-secondary text-sm font-body uppercase tracking-widest mb-3">Come Together</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Community & Events</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto font-body">
            Carter's isn't just a store — it's a gathering place for Lynch Station and beyond.
          </p>
        </div>
      </section>

      {/* Regular Events */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-3 text-center">Monthly Events</h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-xl mx-auto">
          There's always something happening at Carter's. Come for the food, stay for the fellowship!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularEvents.map((event) => (
            <Card key={event.title} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-3">
                  <event.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{event.title}</h3>
                <p className="text-xs text-secondary font-body font-semibold mb-2">{event.when}</p>
                <p className="text-sm text-muted-foreground font-body">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Announcements & Partnerships</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {announcements.map((a) => (
              <Card key={a.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{a.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery Placeholder */}
      <section className="container py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted text-muted-foreground mb-4">
          <Camera className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Community Gallery</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto mb-6">
          Follow us on Facebook to see photos from our events, the store, and the Lynch Station community!
        </p>
        <a
          href="https://www.facebook.com/carters.storeva/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
        >
          Visit Our Facebook Page →
        </a>
      </section>
    </Layout>
  );
};

export default CommunityPage;
