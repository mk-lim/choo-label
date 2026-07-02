import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "Products", path: "/products" },
    { name: "Get Quote", path: "/get-quote" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Top Bar - Industrial Info Strip */}
      <div className="bg-foreground text-background py-2 text-xs font-mono uppercase tracking-wider border-b border-border/10">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-primary" /> +607 338 3636
            </span>
            <span className="flex items-center gap-2 hidden sm:flex">
              <Mail className="h-3 w-3 text-primary" /> tl.choo@chooexpress.com
            </span>
          </div>
          <div className="flex gap-4">
            <span>JB, Malaysia</span>
            <span className="text-primary">|</span>
            <span>Singapore</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2" : "bg-background py-4"
        )}
      >
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
            <img src="/nova-assets/FkVasVmyFPOPgfwI.png" alt="Chooexpress Label" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary uppercase tracking-wide font-mono relative py-1",
                  item.path === "/get-quote"
                    ? "px-4 py-2 bg-primary text-white hover:bg-primary/90 border-2 border-primary"
                    : location === item.path
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                      : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-2xl font-oswald font-bold uppercase tracking-wide border-b border-border pb-2 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/get-quote" className="w-full mt-4 font-mono uppercase text-center px-4 py-3 border-2 border-primary text-primary hover:bg-primary/10 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
              Get Quote
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background border-t border-border/10 pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/nova-assets/FkVasVmyFPOPgfwI.png" alt="Chooexpress Label" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Leading stickers and labels printing company in Johor Bahru, Malaysia. 
              Delivering precision, quality, and speed since 1979.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-primary uppercase tracking-widest text-sm mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="h-[1px] w-3 bg-primary/50"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-primary uppercase tracking-widest text-sm mb-6">Malaysia HQ</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <p>No.38, Jalan Riang 21,<br/>Kawasan Perindustrian Taman Gembira,<br/>81200 Johor Bahru, Johor</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <p>+607 338 3636</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-primary uppercase tracking-widest text-sm mb-6">Singapore Office</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <p>10 Anson Road,<br/>#29-10 International Plaza,<br/>Singapore 079903</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <p>+65 9684 8852</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container border-t border-border/10 pt-8 flex justify-center items-center text-xs text-muted-foreground font-mono">
          <p>© 2025 Chooexpress Label Sdn. Bhd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
