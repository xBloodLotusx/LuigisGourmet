import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary">Carter's</span>
          <span className="hidden sm:inline text-sm text-muted-foreground font-body">General Store & Deli</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="tel:4343091753" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <Button asChild size="icon" variant="ghost" className="text-primary">
            <a href="tel:4343091753">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="font-heading text-primary">Carter's</SheetTitle>
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="sm" className="mt-4 bg-primary">
                  <a href="tel:4343091753" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    434-309-1753
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
