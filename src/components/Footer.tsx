import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock, Heart } from "lucide-react";
import { scriptures } from "@/data/scriptures";

const Footer = () => {
  const [scriptureIndex, setScriptureIndex] = useState(0);

  useEffect(() => {
    const idx = Math.floor(Math.random() * scriptures.length);
    setScriptureIndex(idx);
  }, []);

  const scripture = scriptures[scriptureIndex];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Scripture Banner */}
      <div className="bg-accent text-accent-foreground py-4 text-center">
        <p className="container text-sm italic font-heading">
          "{scripture.text}" — <span className="font-semibold">{scripture.reference}</span>
        </p>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Carter's General Store & Deli</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Serving Lynch Station since 1879. Good food, good neighbors, and God's blessings.
            </p>
            <a
              href="https://www.facebook.com/carters.storeva/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-secondary transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <Link to="/menu" className="hover:text-secondary transition-colors">Menu</Link>
              <Link to="/about" className="hover:text-secondary transition-colors">Our Story</Link>
              <Link to="/community" className="hover:text-secondary transition-colors">Community & Events</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>6376 Bedford Hwy<br />Lynch Station, VA 24571</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:4343091753" className="hover:text-secondary transition-colors">434-309-1753</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>Tue–Thu: 8am–6pm</p>
                  <p>Fri: 8am–7:30pm</p>
                  <p>Sat: 8am–6pm</p>
                  <p>Sun–Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent" /> in Lynch Station, VA · God Bless
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
