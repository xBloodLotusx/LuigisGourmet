import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Handshake, Star } from "lucide-react";

const values = [
  { icon: Heart, title: "Kindness", description: "We treat every person who walks through our door like family." },
  { icon: Handshake, title: "Honesty", description: "Fair prices, honest portions, and genuine hospitality — always." },
  { icon: Users, title: "Community", description: "We're here to serve our neighbors and strengthen our community." },
  { icon: Star, title: "Gratitude", description: "Every day is a blessing, and we're grateful for the opportunity to serve." },
];

const timeline = [
  { year: "1879", event: "Lewis 'Big Daddy' Crawford Carter opens the original general store in Lynch Station." },
  { year: "Early 1900s", event: "C.L. Carter carries on the family tradition, expanding the store's offerings." },
  { year: "Mid 1900s", event: "C.P. Carter continues the legacy, becoming a cornerstone of the community." },
  { year: "2019", event: "Kyle & Cheri Goldsmith return to Campbell County to breathe new life into the historic store." },
  { year: "Today", event: "Carter's serves as a deli, general store, sporting goods shop, antique store, and live music venue." },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-secondary text-sm font-body uppercase tracking-widest mb-3">Since 1879</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Story</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto font-body">
            Over 145 years of faith, food, and fellowship in Lynch Station, Virginia.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container py-16 max-w-3xl">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">A Legacy of Service</h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>
            Carter's General Store & Deli has been a fixture of Lynch Station, Virginia since 1879, when Lewis "Big Daddy" Crawford Carter first opened the doors to serve his community. What started as a simple country store has grown into something truly special — a place where good food, warm fellowship, and small-town values come together.
          </p>
          <p>
            In 2019, Kyle and Cheri Goldsmith returned to Campbell County with a dream of carrying on this incredible legacy. Both with roots deep in the local community, they saw an opportunity to honor the past while building something new — a place where families could gather, neighbors could catch up, and visitors could experience genuine Virginia hospitality.
          </p>
          <p>
            Today, Carter's is more than just a deli. It's a general store stocked with essentials, a sporting goods outfitter, an antique shop full of treasures, and a live music venue that brings the community together every month. But at its heart, it's still the same welcoming place it's always been.
          </p>
        </div>

        <blockquote className="border-l-4 border-secondary pl-6 my-8 py-2">
          <p className="text-lg italic font-heading text-foreground">
            "Eating at Carter's is like eating at a friend's house."
          </p>
        </blockquote>
      </section>

      {/* Timeline */}
      <section className="bg-primary/5 py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">Our History</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="shrink-0 w-28 text-right">
                  <span className="font-heading font-bold text-primary">{item.year}</span>
                </div>
                <div className="border-l-2 border-primary/30 pl-4 pb-2">
                  <p className="text-sm text-muted-foreground font-body">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16">
        <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-3">Our Values</h2>
        <p className="text-center text-muted-foreground font-body mb-10 max-w-xl mx-auto">
          Rooted in Christian faith — honoring God through how we serve our community every day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Kyle & Cheri */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl font-heading font-bold mb-4">Meet Kyle & Cheri</h2>
          <p className="text-secondary-foreground/80 font-body leading-relaxed">
            Kyle and Cheri Goldsmith are more than store owners — they're neighbors, friends, and fellow members of this community. With deep roots in Campbell County and a shared passion for good food and fellowship, they've poured their hearts into making Carter's a place where everyone feels welcome. Their faith guides everything they do, from the food they prepare to the events they host.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
