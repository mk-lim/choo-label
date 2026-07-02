import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";

// Count-up animation hook
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

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

// Product data organized by category
const productCategories = [
  {
    id: "food",
    label: "Food & Beverage",
    products: [
      { name: "Bottle Labels", features: ["Waterproof", "Oil Resistant"], img: "/nova-assets/rXnAJJkrXTurRDuo.jpg" },
      { name: "Packaging Stickers", features: ["Food Safe", "Custom Shape"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
      { name: "Jar Labels", features: ["Premium Finish", "Durable"], img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
      { name: "Can Wraps", features: ["Full Color", "Recyclable"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
    ]
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    products: [
      { name: "Beauty Labels", features: ["Gold Foil", "Embossed"], img: "/nova-assets/qHniQUhLetuZdoiX.jpg" },
      { name: "Skincare Stickers", features: ["Matte Finish", "Elegant"], img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop" },
      { name: "Perfume Labels", features: ["Luxury", "Metallic"], img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop" },
      { name: "Soap Labels", features: ["Waterproof", "Eco-Friendly"], img: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=400&h=300&fit=crop" },
    ]
  },
  {
    id: "logistics",
    label: "Logistics",
    products: [
      { name: "Shipping Labels", features: ["High Scan", "Durable"], img: "/nova-assets/LbWZXYHWzOFSyOBD.jpg" },
      { name: "Barcode Stickers", features: ["Precision", "Bulk"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
      { name: "Waybill Labels", features: ["Multi-Part", "Thermal"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
      { name: "RFID Tags", features: ["Smart Track", "Wireless"], img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop" },
    ]
  },
  {
    id: "household",
    label: "Household",
    products: [
      { name: "Detergent Labels", features: ["Chemical Resistant", "Vibrant"], img: "/nova-assets/DfytmACsxrKAFtRe.jpg" },
      { name: "Cleaning Products", features: ["Waterproof", "Bold"], img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop" },
      { name: "Air Freshener", features: ["Die Cut", "Scented"], img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
      { name: "Storage Labels", features: ["Removable", "Writable"], img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop" },
    ]
  },
  {
    id: "industrial",
    label: "Industrial",
    products: [
      { name: "Warning Labels", features: ["High Visibility", "Durable"], img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
      { name: "Asset Tags", features: ["Tamper Proof", "Serial"], img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
      { name: "Cable Labels", features: ["Wrap Around", "Heat Resistant"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
      { name: "Safety Stickers", features: ["Reflective", "Outdoor"], img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop" },
    ]
  },
];

// Marquee keywords
const marqueeItems = [
  "Premium Quality", "Custom Design", "Fast Delivery", "Waterproof Labels",
  "Gold Foil Printing", "Die-Cut Stickers", "Eco-Friendly", "30+ Years Experience",
  "Made in Malaysia", "ISO Certified", "SEDEX Certified", "One-Stop Solution", "Barcode Labels",
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("food");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Scroll reveals
  const productsReveal = useScrollReveal();
  const statsReveal = useScrollReveal();
  const certReveal = useScrollReveal();

  // Count-up animations for stats
  const yearsCount = useCountUp(30, 2000);
  const clientsCount = useCountUp(3000, 2500);
  const factoryCount = useCountUp(20, 1800);
  const countriesCount = useCountUp(2, 1000);

  useEffect(() => {
    document.title = "Chooexpress Label - Premium Stickers & Labels Printing";
  }, []);

  const activeProducts = productCategories.find(c => c.id === activeCategory)?.products || [];

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % activeProducts.length);
  };
  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + activeProducts.length) % activeProducts.length);
  };

  // Reset carousel index when category changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCategory]);

  return (
    <Layout>
      {/* 1. Announcement Ticker */}
      <div className="bg-primary text-white overflow-hidden py-2 relative">
        <div className="animate-ticker flex whitespace-nowrap">
          <span className="mx-8 text-sm font-medium">🎉 Now Serving Clients Across Southeast Asia — Malaysia, Singapore & Beyond!</span>
          <span className="mx-8 text-sm font-medium">📞 Call Us: +607 338 3636 | WhatsApp: +6019-779 6306</span>
          <span className="mx-8 text-sm font-medium">🏭 30+ Years of Label Printing Excellence Since 1979</span>
          <span className="mx-8 text-sm font-medium">🎉 Now Serving Clients Across Southeast Asia — Malaysia, Singapore & Beyond!</span>
          <span className="mx-8 text-sm font-medium">📞 Call Us: +607 338 3636 | WhatsApp: +6019-779 6306</span>
          <span className="mx-8 text-sm font-medium">🏭 30+ Years of Label Printing Excellence Since 1979</span>
        </div>
      </div>

      {/* 2. Hero Section - Bold Typography + Floating Products + Animations */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating circles */}
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 animate-float-slow"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-amber-200/30 animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-primary/10 animate-float-fast"></div>
          
          {/* Decorative dots */}
          <div className="absolute top-32 left-1/4 w-3 h-3 rounded-full bg-primary/40 animate-pulse"></div>
          <div className="absolute bottom-40 right-1/4 w-2 h-2 rounded-full bg-amber-500/60 animate-ping"></div>
          <div className="absolute top-1/2 left-16 w-4 h-4 rounded-full bg-primary/20 animate-bounce"></div>
          
          {/* Diamond shapes */}
          <svg className="absolute top-24 right-1/3 w-6 h-6 text-primary/30 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 12L12 22L2 12Z" />
          </svg>
          <svg className="absolute bottom-32 left-1/3 w-4 h-4 text-amber-500/40 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L22 12L12 22L2 12Z" />
          </svg>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary text-sm font-semibold">Established 1979 • Johor Bahru</span>
            </div>
            
            <h1 className="font-oswald font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.85] uppercase tracking-tight">
              <span className="text-slate-900">Make Your</span><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-600 to-orange-500">Design,</span><br/>
              <span className="text-slate-700 text-4xl md:text-5xl lg:text-6xl">It's On Us.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Premium customized stickers and labels for industries that demand precision. 
              Trusted by <strong>3,000+</strong> businesses in Malaysia and Singapore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/get-quote" className="inline-block">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-14 px-8 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                  Get A Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.me/60197796306" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:border-primary hover:text-primary rounded-full font-semibold h-14 px-8 text-base transition-all duration-300 hover:-translate-y-0.5">
                  <Phone className="mr-2 h-4 w-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right: Product Image Showcase */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative w-full aspect-square max-w-[550px] mx-auto">
              {/* Main product image */}
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032724962/9wA3KYqRs334TkeUSn5bTN/stats-factory-Wx37SMiwjtvavFhhrJkVvb.webp"
                alt="Premium Labels Collection"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating badge - top right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full w-28 h-28 shadow-xl flex flex-col items-center justify-center animate-float-slow border-4 border-primary/20">
                <span className="text-2xl font-oswald font-bold text-primary">30+</span>
                <span className="text-[10px] text-slate-600 font-medium text-center leading-tight">Years<br/>Experience</span>
              </div>
              
              {/* Floating badge - bottom left */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl animate-float-medium">
                <span className="text-3xl font-oswald font-bold">3K+</span>
                <span className="block text-xs opacity-80">Happy Clients</span>
              </div>

              {/* Small floating label samples */}
              <div className="absolute top-1/4 -left-12 w-20 h-20 rounded-xl bg-white shadow-lg p-2 animate-float-fast rotate-[-12deg]">
                <img src="/nova-assets/rXnAJJkrXTurRDuo.jpg" alt="Label sample" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scrolling Marquee */}
      <div className="bg-slate-900 py-5 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="mx-4 inline-flex items-center gap-3 shrink-0">
              <span className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                idx % 3 === 0 ? 'bg-primary text-white' : 
                idx % 3 === 1 ? 'border-2 border-white/30 text-white' : 
                'bg-white/10 text-white/90'
              }`}>
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* About Section - "We Deliver More Than Labels" */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032724962/9wA3KYqRs334TkeUSn5bTN/hero-bg-U54A4TqvNskChKHbphUfHU.webp"
              alt="Chooexpress Printing Factory"
              className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Overlay card */}
            <div className="absolute bottom-6 right-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[280px]">
              <p className="text-sm leading-relaxed opacity-90">
                At Chooexpress, we provide integrated label printing solutions for everyday products and premium packaging across multiple markets.
              </p>
              <Link href="/about" className="inline-block mt-3">
                <Button size="sm" className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold text-xs">
                  ABOUT US
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">We deliver more than</h2>
              <h3 className="font-oswald text-5xl md:text-6xl font-bold uppercase">
                <span className="text-primary">Label</span> Products
              </h3>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Chooexpress Label Sdn Bhd has been a pioneer in the self-adhesive labels printing business since 1979. 
              We combine traditional craftsmanship with state-of-the-art technology to produce high-quality, 
              multi-colored labels for a wide range of industries.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h4 className="font-oswald font-bold text-xl mb-1">One-Stop Solution</h4>
                <p className="text-sm text-slate-500">Design, photography, barcode creation & printing under one roof.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h4 className="font-oswald font-bold text-xl mb-1">Cross-Border</h4>
                <p className="text-sm text-slate-500">Dedicated presence in Singapore since 1995 for seamless service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Video Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-lg text-slate-500 font-medium">Discover Our Story</h2>
            <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
              Behind the <span className="text-primary">Brand,</span><br/>
              Beyond the <span className="text-primary">Product</span>
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl group">
            {!isVideoPlaying ? (
              <div className="relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032724962/9wA3KYqRs334TkeUSn5bTN/products-showcase-A9ZA2ybUqeBbJnfpcBRvtY.webp"
                  alt="Company Video Thumbnail"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-80">CHOOEXPRESS CORPORATE VIDEO</p>
                  <p className="font-oswald text-xl font-bold">Chooexpress Label Sdn Bhd</p>
                </div>
              </div>
            ) : (
              <iframe
                ref={videoRef}
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Chooexpress Corporate Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>

      {/* Second Marquee - reversed direction */}
      <div className="bg-primary/5 py-4 overflow-hidden border-y border-primary/10">
        <div className="animate-marquee-reverse flex whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="mx-4 inline-flex items-center gap-2 shrink-0">
              <svg className="w-3 h-3 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L22 12L12 22L2 12Z" />
              </svg>
              <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 4. Product Carousel with Category Tabs */}
      <section className="py-24 bg-white">
        <div className="container">
          <div 
            ref={productsReveal.ref}
            className={`transition-all duration-700 ${productsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Our Products</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Industry <span className="text-primary">Solutions</span>
              </h3>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Product Cards Carousel */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeProducts.map((product, idx) => (
                  <div 
                    key={`${activeCategory}-${idx}`} 
                    className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 ${productsReveal.visible ? 'animate-in fade-in slide-in-from-bottom duration-500' : 'opacity-0'}`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-oswald font-bold text-lg mb-2">{product.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((f, fi) => (
                          <span key={fi} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View All Button */}
              <div className="text-center mt-10">
                <Link href="/products">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    View All Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats / Infrastructure Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div 
            ref={statsReveal.ref}
            className={`transition-all duration-700 ${statsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Our Scale &</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                <span className="text-primary">Infrastructure</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Stat Card 1 - Years */}
              <div ref={yearsCount.ref} className="bg-primary text-white p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg col-span-1 hover:scale-105 transition-transform duration-300">
                <span className="text-4xl md:text-5xl font-oswald font-bold">{yearsCount.count}+</span>
                <span className="text-sm opacity-80 mt-2">Years Experience</span>
              </div>
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg col-span-1 hover:scale-105 transition-transform duration-300">
                <img src="/nova-assets/pQZhfHExSHEznvmv.jpg" alt="Factory" className="w-full h-full object-cover" />
              </div>
              
              {/* Stat Card 2 - Clients */}
              <div ref={clientsCount.ref} className="bg-white border-2 border-primary/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center col-span-1 hover:scale-105 transition-transform duration-300">
                <span className="text-4xl md:text-5xl font-oswald font-bold text-primary">{clientsCount.count >= 1000 ? `${(clientsCount.count / 1000).toFixed(clientsCount.count >= 3000 ? 0 : 1)}K+` : `${clientsCount.count}+`}</span>
                <span className="text-sm text-slate-600 mt-2">Clients Served</span>
              </div>
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg col-span-1 hover:scale-105 transition-transform duration-300">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032724962/9wA3KYqRs334TkeUSn5bTN/stats-factory-Wx37SMiwjtvavFhhrJkVvb.webp" alt="Labels" className="w-full h-full object-cover" />
              </div>
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg col-span-1 hover:scale-105 transition-transform duration-300">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032724962/9wA3KYqRs334TkeUSn5bTN/products-showcase-A9ZA2ybUqeBbJnfpcBRvtY.webp" alt="Products" className="w-full h-full object-cover" />
              </div>
              
              {/* Stat Card 3 - Factory */}
              <div ref={factoryCount.ref} className="bg-amber-50 border-2 border-amber-200 p-8 rounded-2xl flex flex-col items-center justify-center text-center col-span-1 hover:scale-105 transition-transform duration-300">
                <span className="text-4xl md:text-5xl font-oswald font-bold text-amber-700">{factoryCount.count}K+</span>
                <span className="text-sm text-slate-600 mt-2">Sq Ft Factory</span>
              </div>
              
              {/* Stat Card 4 - Countries */}
              <div ref={countriesCount.ref} className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg col-span-1 hover:scale-105 transition-transform duration-300">
                <span className="text-4xl md:text-5xl font-oswald font-bold">{countriesCount.count}</span>
                <span className="text-sm opacity-80 mt-2">Countries Served</span>
              </div>
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg col-span-1 hover:scale-105 transition-transform duration-300">
                <img src="/nova-assets/DfytmACsxrKAFtRe.jpg" alt="Printing" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div 
          ref={certReveal.ref}
          className={`container transition-all duration-1000 ${certReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-lg text-slate-500 font-medium">Certified Excellence</h2>
            <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
              Certified & <span className="text-primary">Trusted</span>
            </h3>
            <p className="text-slate-500">We are proud to hold internationally recognized certifications ensuring the highest standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "SEDEX", desc: "Ethical Trade Audit", detail: "Responsible supply chain practices verified by independent auditors", color: "from-emerald-500 to-teal-600" },
              { name: "ISO 9001", desc: "Quality Management", detail: "International standard for consistent quality in production processes", color: "from-blue-500 to-indigo-600" },
              { name: "ISO 14001", desc: "Environmental Management", detail: "Commitment to minimizing environmental impact in all operations", color: "from-green-500 to-emerald-600" },
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center ${certReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 200 + 300}ms` }}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-b-full bg-gradient-to-r ${cert.color} group-hover:w-full group-hover:rounded-none group-hover:rounded-t-3xl transition-all duration-500`}></div>
                
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="font-oswald font-bold text-lg leading-tight text-center">{cert.name}</span>
                </div>
                <h4 className="font-oswald font-bold text-xl uppercase mb-2 group-hover:text-primary transition-colors">{cert.desc}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-white animate-float-fast"></div>
        </div>
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight text-white">
            Ready to Impress?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Contact us today to discuss your labeling needs. We offer innovative solutions tailored to your industry.
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
