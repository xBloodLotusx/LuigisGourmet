import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import { menuSections, dailySpecials } from "@/data/menuData";

const MenuPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-secondary text-sm font-body uppercase tracking-widest mb-3">Carter's General Store & Deli</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Menu</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto font-body">
            Homemade food, made fresh to order. Breakfast served all day!
          </p>
        </div>
      </section>

      {/* Daily Specials */}
      <section className="bg-accent text-accent-foreground py-8">
        <div className="container">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5" />
            <h2 className="text-xl font-heading font-bold">Daily Specials</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {dailySpecials.map((special, i) => (
              <div key={i} className="text-sm font-body bg-accent-foreground/5 rounded-md px-4 py-2">
                {special}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="container py-12 space-y-12">
        {menuSections.map((section) => (
          <section key={section.title}>
            <div className="mb-6">
              <h2 className="text-2xl font-heading font-bold text-foreground">{section.title}</h2>
              {section.description && (
                <p className="text-sm text-muted-foreground font-body mt-1">{section.description}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <Card key={item.name} className="bg-card border-border hover:shadow-sm transition-shadow">
                  <CardContent className="p-4 flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-body font-semibold text-foreground">{item.name}</h3>
                        {item.isFavorite && (
                          <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary flex items-center gap-1">
                            <Star className="h-3 w-3 fill-secondary" />
                            Favorite
                          </Badge>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                      )}
                    </div>
                    <span className="font-heading font-bold text-primary text-lg shrink-0">{item.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer CTA */}
      <section className="bg-primary/5 py-8 text-center">
        <p className="text-muted-foreground font-body text-sm">
          Prices subject to change. Ask about today's specials! · <a href="tel:4343091753" className="text-primary hover:underline font-semibold">Call 434-309-1753</a>
        </p>
      </section>
    </Layout>
  );
};

export default MenuPage;
