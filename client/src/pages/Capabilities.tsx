import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Layers, Printer, Sparkles, Settings, Palette, Scissors, BarChart3, Camera, Shield } from "lucide-react";
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

export default function Capabilities() {
  const techReveal1 = useScrollReveal();
  const techReveal2 = useScrollReveal();
  const techReveal3 = useScrollReveal();
  const tableReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section - Dynamic with floating elements */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova-assets/YxzSPTIjiiaGaGhT.jpg" 
            alt="Printing Capabilities" 
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
          {/* Gear icon floating */}
          <div className="absolute bottom-1/4 right-[15%] opacity-10 animate-spin-slow">
            <Settings className="w-24 h-24 text-white" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">State-of-the-Art Technology</span>
            </div>
            <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight leading-[0.9] text-white">
              Advanced Printing <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">Technologies</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              We are a leading sticker manufacturer offering high-quality, customizable stickers for all your needs. Fast production and competitive prices.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/get-quote">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Get A Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* Technology 01 - Flexographic Printing */}
      <section className="py-24 bg-white overflow-hidden">
        <div 
          ref={techReveal1.ref}
          className={`container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            techReveal1.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/nova-assets/YxzSPTIjiiaGaGhT.jpg" 
                alt="Flexographic Printing" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-2xl shadow-lg animate-float-slow">
              <span className="font-oswald font-bold text-lg">HIGH SPEED</span>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Printer className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Technology 01</span>
            </div>
            
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase text-foreground">
              Flexographic <span className="text-primary">Printing</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Flexographic printing is capable of achieving high quality printed images at high production speeds, making production lead times shorter. It is a popular choice in the label printing industries, especially for long run jobs.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Multi-station machine with higher flexibility",
                "Cold foil stamping, laminating, and die-cutting",
                "Ideal for high-volume, long-run production"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start group/item">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover/item:bg-white transition-colors"></div>
                  </div>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            
            <Link href="/get-quote" className="inline-block">
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider Marquee */}
      <div className="py-6 bg-slate-50 overflow-hidden border-y border-slate-100">
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 mx-4">
              {["Flexo Printing", "Letterpress", "Digital Printing", "Cold Foil", "Die-Cutting", "Laminating", "Barcode Creation", "Design Services"].map((text, idx) => (
                <span key={idx} className="inline-flex shrink-0 items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                  <span className="font-oswald text-lg uppercase text-slate-400 tracking-wider">{text}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Technology 02 - Letterpress Printing */}
      <section className="py-24 bg-white overflow-hidden">
        <div 
          ref={techReveal2.ref}
          className={`container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            techReveal2.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Layers className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Technology 02</span>
            </div>
            
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase text-foreground">
              Letterpress <span className="text-primary">Printing</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Letterpress printing is a form of relief printing, where the text or image is on a raised surface, similar to a rubber stamp. Ink is applied to the raised surface and then paper is pressed directly against it to transfer the text or image.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Creates tactile and visual impression on paper",
                "Premium, artisanal finish for luxury branding",
                "Perfect for high-end, limited edition labels"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start group/item">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover/item:bg-white transition-colors"></div>
                  </div>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            
            <Link href="/get-quote" className="inline-block">
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/nova-assets/CLahuOdIXjNKliSu.jpg" 
                alt="Letterpress Printing" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-white text-primary px-6 py-3 rounded-2xl shadow-lg border border-primary/20 animate-float-medium">
              <span className="font-oswald font-bold text-lg">PREMIUM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology 03 - Digital Printing */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div 
          ref={techReveal3.ref}
          className={`container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            techReveal3.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-orange-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/nova-assets/ENMoYNpmQNiMAUhV.jpg" 
                alt="Digital Printing" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg animate-float-fast">
              <span className="font-oswald font-bold text-lg">DIGITAL</span>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Technology 03</span>
            </div>
            
            <h2 className="font-oswald font-bold text-4xl md:text-5xl uppercase text-foreground">
              Digital <span className="text-primary">Printing</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              Digital printing is a method of printing from a digital-based image directly. The possibilities of digital print technology are limitless and provide immense potential for short run jobs.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Crisp, photographic quality graphics",
                "Variable data, barcodes, and custom text",
                "Ideal for short runs, proofs, and trials"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start group/item">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover/item:bg-white transition-colors"></div>
                  </div>
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
            </div>
            
            <Link href="/get-quote" className="inline-block">
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Comparison - Animated Table */}
      <section className="py-24 bg-white">
        <div className="container">
          <div 
            ref={tableReveal.ref}
            className={`transition-all duration-1000 ${
              tableReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Choose the Right Technology</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Technology <span className="text-primary">Comparison</span>
              </h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-red-800 text-white">
                    <th className="text-left py-5 px-6 font-oswald font-bold uppercase text-base">Feature</th>
                    <th className="text-center py-5 px-6 font-oswald font-bold uppercase text-base">Flexo</th>
                    <th className="text-center py-5 px-6 font-oswald font-bold uppercase text-base">Letterpress</th>
                    <th className="text-center py-5 px-6 font-oswald font-bold uppercase text-base">Digital</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Production Speed", flexo: "Very Fast", letterpress: "Slow", digital: "Fast" },
                    { feature: "Volume Suitability", flexo: "High Volume", letterpress: "Low Volume", digital: "Short Run" },
                    { feature: "Cost per Unit", flexo: "Low", letterpress: "High", digital: "Medium" },
                    { feature: "Setup Time", flexo: "Moderate", letterpress: "Long", digital: "Quick" },
                    { feature: "Color Quality", flexo: "Excellent", letterpress: "Limited", digital: "Outstanding" },
                    { feature: "Tactile Finish", flexo: "Standard", letterpress: "Premium", digital: "Standard" },
                    { feature: "Variable Data", flexo: "Limited", letterpress: "Not Possible", digital: "Excellent" },
                  ].map((row, idx) => (
                    <tr key={idx} className={`border-b border-slate-100 hover:bg-primary/5 transition-all duration-300 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="py-4 px-6 font-semibold text-foreground">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-slate-600">{row.flexo}</td>
                      <td className="py-4 px-6 text-center text-slate-600">{row.letterpress}</td>
                      <td className="py-4 px-6 text-center text-slate-600">{row.digital}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Animated Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div 
            ref={servicesReveal.ref}
            className={`transition-all duration-700 ${
              servicesReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Beyond Printing</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Complementary <span className="text-primary">Services</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, title: "Cold Foil Stamping", desc: "Add metallic accents and premium finishes to your labels", color: "from-amber-500 to-yellow-500" },
                { icon: Shield, title: "Laminating", desc: "Protect and enhance durability with glossy or matte finishes", color: "from-blue-500 to-cyan-500" },
                { icon: Scissors, title: "Die-Cutting", desc: "Custom shapes and sizes tailored to your brand", color: "from-pink-500 to-rose-500" },
                { icon: BarChart3, title: "Barcode Creation", desc: "Integrated barcode design and optimization", color: "from-green-500 to-emerald-500" },
                { icon: Palette, title: "Design Services", desc: "Professional design consultation and artwork preparation", color: "from-purple-500 to-violet-500" },
                { icon: Camera, title: "Photography", desc: "In-house product photography for label design", color: "from-orange-500 to-red-500" },
              ].map((service, idx) => (
                <div 
                  key={idx} 
                  className={`group p-8 bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    servicesReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-oswald font-bold text-xl uppercase mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
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
            Find Your Perfect Solution
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Not sure which printing technology is right for your project? Our experts are here to help you choose the best solution.
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
