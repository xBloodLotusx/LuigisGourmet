import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [prayerForm, setPrayerForm] = useState({ name: "", request: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon. God bless!" });
    setContactForm({ name: "", email: "", message: "" });
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Prayer request received", description: "We'll be praying for you. 🙏" });
    setPrayerForm({ name: "", request: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <p className="text-secondary text-sm font-body uppercase tracking-widest mb-3">We'd Love to Hear From You</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto font-body">
            Stop by, give us a call, or drop us a line. We're always happy to hear from friends and neighbors.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground font-body">6376 Bedford Hwy<br />Lynch Station, VA 24571</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">Phone</h3>
                  <a href="tel:4343091753" className="text-sm text-primary font-body hover:underline">434-309-1753</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground">Hours</h3>
                  <div className="text-sm text-muted-foreground font-body space-y-1">
                    <p>Monday: <span className="text-accent font-semibold">Closed</span></p>
                    <p>Tuesday: 8:00 AM – 2:00 PM</p>
                    <p>Wednesday – Thursday: 8:00 AM – 6:00 PM</p>
                    <p>Friday: 8:00 AM – 7:30 PM</p>
                    <p>Saturday: 8:00 AM – 6:00 PM</p>
                    <p>Sunday: <span className="text-accent font-semibold">Closed</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg bg-muted h-48 flex items-center justify-center text-muted-foreground font-body text-sm">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>6376 Bedford Hwy, Lynch Station, VA</p>
                <a
                  href="https://maps.google.com/?q=6376+Bedford+Hwy+Lynch+Station+VA+24571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="space-y-10">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">Send Us a Message</h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-body">Name</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-body">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-body">Message</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="How can we help?"
                      rows={4}
                      required
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-body">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Prayer Request */}
            <Card className="bg-card border-accent/20 border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-heading font-bold text-foreground">Prayer Requests</h2>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  We believe in the power of prayer. Share your request and we'll lift you up.
                </p>
                <form onSubmit={handlePrayerSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="prayer-name" className="font-body">Name (optional)</Label>
                    <Input
                      id="prayer-name"
                      value={prayerForm.name}
                      onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                      placeholder="Your name or 'Anonymous'"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="prayer-request" className="font-body">Your Request</Label>
                    <Textarea
                      id="prayer-request"
                      value={prayerForm.request}
                      onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                      placeholder="Share what's on your heart..."
                      rows={4}
                      required
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-body">
                    Submit Prayer Request 🙏
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
