import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Package, Radio, Wine, Truck, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function Products() {
  const facilitiesReveal = useScrollReveal();
  const productsReveal = useScrollReveal();
  const customReveal = useScrollReveal();
  const qualityReveal = useScrollReveal();

  const products = [
    {
      id: 1,
      title: "Airline Baggage Tag Stickers",
      icon: Plane,
      description: "We provide the best combination of adhesive and face stock to ensure your baggage tags stay attached during travel while remaining easily detachable when required.",
      features: [
        "Durable adhesive formulation",
        "Easy detachment capability",
        "High-visibility colors",
        "Weather-resistant materials"
      ],
      image: "/nova-assets/kXYfepKNwZwyOUYJ.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Household Product Stickers",
      icon: Package,
      description: "We have both the expertise and technology required to fulfill your household product sticker needs, helping you stand out in a crowded marketplace.",
      features: [
        "Versatile material options",
        "Custom shapes and sizes",
        "Moisture-resistant finishes",
        "Brand-focused design"
      ],
      image: "/nova-assets/opnMBZhMgeileEvZ.jpg",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Food & Beverage Product Stickers",
      icon: Wine,
      description: "Producing excellent food and beverage labels has been one of our specialties. We understand that food labels play an indispensable role in influencing product sales.",
      features: [
        "Food-safe materials",
        "Premium finishes",
        "Vibrant color reproduction",
        "Compliance-ready design"
      ],
      image: "/nova-assets/OCKZREEmaojVZDHn.jpg",
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      title: "Logistics & Shipping Stickers",
      icon: Truck,
      description: "The e-commerce and logistics industries demand quick, cost-effective, and traceable labeling solutions. We provide robust stickers for the modern supply chain.",
      features: [
        "High-scanability barcodes",
        "Durable outdoor materials",
        "Quick-drying inks",
        "Variable data printing"
      ],
      image: "/nova-assets/ZYLspvZAzXYwbEcG.jpg",
      color: "from-red-500 to-rose-500"
    },
    {
      id: 5,
      title: "RFID Stickers",
      icon: Radio,
      description: "RFID is a new generation of wireless tracking technology. Our experienced team guides you through selecting the right RFID inlay for your label needs.",
      features: [
        "Advanced tracking capability",
        "Wireless communication",
        "Inventory management",
        "Real-time visibility"
      ],
      image: "/nova-assets/OBhvAngzYjyBHaEU.jpg",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Dynamic with floating elements */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova-assets/DVLDgxWIHnGTezsh.jpg" 
            alt="Product Stickers" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-48 h-48 rounded-full border border-white/10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-40 w-32 h-32 rounded-full border border-primary/20 animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-primary/40 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-white/30 animate-ping"></div>
          <svg className="absolute top-32 right-1/3 w-6 h-6 text-primary/40 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 12L12 22L2 12Z" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Premium Label Solutions</span>
            </div>
            <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight leading-[0.9] text-white">
              Custom Sticker <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Chooexpress Label provides custom sticker labels for your products and packaging. Choose a trusted supplier for high-quality, durable stickers that enhance your brand.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/get-quote">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Get A Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/60197796306" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full font-semibold h-12 px-6 transition-all duration-300 hover:-translate-y-0.5">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* Facilities Section - Animated */}
      <section className="py-24 bg-white overflow-hidden">
        <div 
          ref={facilitiesReveal.ref}
          className={`container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            facilitiesReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Our Facilities</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                State-of-the-Art <span className="text-primary">Equipment</span>
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              We are equipped with some of the most sophisticated and state-of-the-art printing machines which allow multi-colored printing on various kinds of paper and film materials.
            </p>
            <div className="space-y-4">
              {[
                "High-speed machines with on-line lamination",
                "Varnishing and die-cutting capabilities",
                "Hot stamping and foil application",
                "Computer registration control system",
                "Registration check camera for accuracy",
                "Roll rewinding and sheeting options"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start group/item p-3 rounded-xl hover:bg-slate-50 transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover/item:text-white transition-colors" />
                  </div>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/nova-assets/YxzSPTIjiiaGaGhT.jpg" 
                alt="State-of-the-art printing machines" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-3 rounded-2xl shadow-lg animate-float-slow">
              <span className="font-oswald font-bold text-lg">20K+ SQ FT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="py-6 bg-slate-50 overflow-hidden border-y border-slate-100">
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 mx-4">
              {["Airline Tags", "Household Labels", "Food & Beverage", "Logistics", "RFID", "Cosmetics", "Industrial", "Custom Shapes"].map((text, idx) => (
                <span key={idx} className="inline-flex shrink-0 items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                  <span className="font-oswald text-lg uppercase text-slate-400 tracking-wider">{text}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Product Categories - Animated Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div 
            ref={productsReveal.ref}
            className={`transition-all duration-700 ${
              productsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Product Categories</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Industry <span className="text-primary">Solutions</span>
              </h3>
              <p className="text-slate-600">Specialized sticker and label solutions tailored to your industry's unique requirements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => {
                const Icon = product.icon;
                return (
                  <div 
                    key={product.id} 
                    className={`group bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-2 ${
                      productsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 md:grayscale md:group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Floating icon */}
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-oswald font-bold text-xl uppercase leading-tight group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mt-3 flex-1">
                        {product.description}
                      </p>

                      <div className="pt-4 border-t border-slate-100 mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Features</p>
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map((feature, fidx) => (
                            <span key={fidx} className="text-xs bg-slate-50 text-slate-600 px-3 py-1 rounded-full border border-slate-100">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link href="/get-quote" className="mt-4">
                        <Button variant="outline" className="w-full rounded-full font-semibold text-sm h-10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                          Learn More <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options - Animated */}
      <section className="py-24 bg-white">
        <div className="container">
          <div 
            ref={customReveal.ref}
            className={`transition-all duration-700 ${
              customReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Customization</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Tailored to <span className="text-primary">Your Needs</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Material Selection", desc: "Paper, film, vinyl, or specialty materials", color: "from-blue-500 to-cyan-500" },
                { title: "Custom Shapes", desc: "Die-cut to any shape or size", color: "from-pink-500 to-rose-500" },
                { title: "Finish Options", desc: "Glossy, matte, or textured finishes", color: "from-amber-500 to-orange-500" },
                { title: "Color Printing", desc: "Full CMYK or spot color printing", color: "from-green-500 to-emerald-500" },
                { title: "Special Effects", desc: "Foil stamping, embossing, varnish", color: "from-purple-500 to-violet-500" },
                { title: "Application Format", desc: "Rolls, sheets, or pre-cut stickers", color: "from-red-500 to-pink-500" },
              ].map((option, idx) => (
                <div 
                  key={idx} 
                  className={`group p-8 bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    customReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="font-oswald font-bold text-sm">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="font-oswald font-bold text-xl uppercase mb-3 group-hover:text-primary transition-colors">{option.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance - Animated */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div 
          ref={qualityReveal.ref}
          className={`container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            qualityReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Quality Guarantee</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Precision & <span className="text-primary">Consistency</span>
              </h3>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              By using computer registration control systems and registration check cameras, we achieve accurate printing registration that allows our operators to produce consistently high-quality printed labels.
            </p>

            <div className="space-y-4">
              {[
                { title: "Accurate Registration", desc: "Computer-controlled precision printing" },
                { title: "Quality Control", desc: "Automated inspection cameras" },
                { title: "Consistency", desc: "Batch-to-batch quality assurance" },
                { title: "Fast Turnaround", desc: "Efficient production workflows" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group/item p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 font-oswald font-bold group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold uppercase mb-1 group-hover/item:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/nova-assets/CLahuOdIXjNKliSu.jpg" 
                alt="Quality control" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white text-primary px-6 py-3 rounded-2xl shadow-lg border border-primary/20 animate-float-medium">
              <span className="font-oswald font-bold text-lg">ISO 9001</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Animated */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white/10 animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white/10 animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5 animate-float-fast"></div>
        </div>
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
            Ready to Order?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Let our team help you find the perfect sticker solution for your products. Get a custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="https://wa.me/60197796306" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full font-semibold h-14 px-10 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="/get-quote">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold h-14 px-10 text-base transition-all duration-300 hover:-translate-y-0.5">
                Request A Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
