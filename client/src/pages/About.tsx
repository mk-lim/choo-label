import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, Clock, Award, Shield, Leaf, Users, Target, Eye, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";

// Animated counter hook
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

export default function About() {
  const stat1 = useCountUp(30, 1500);
  const stat2 = useCountUp(24, 1500);
  const stat3 = useCountUp(5, 1500);
  const stat4 = useCountUp(3000, 2000);

  const missionReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();
  const cultureReveal = useScrollReveal();
  const certReveal = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section - Dynamic with floating elements */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova-assets/pQZhfHExSHEznvmv.jpg" 
            alt="Chooexpress Factory Floor" 
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
              <span className="text-primary text-sm font-semibold">Our Story Since 1979</span>
            </div>
            <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight leading-[0.9] text-white">
              A Long History of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-400">Printing With Passion</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Housing various printing technologies under one roof has enabled us to match your project to our passion and expertise every time without compromise.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/60197796306" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-6 shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Mission & Vision - Animated Cards */}
      <section className="py-24 bg-white">
        <div 
          ref={missionReveal.ref}
          className={`container grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            missionReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Mission */}
          <div className="group relative bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="font-oswald font-bold text-3xl uppercase">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To consistently deliver the best label solutions using the least amount of time at the most cost-efficient price for our clients.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
          </div>

          {/* Vision */}
          <div className="group relative bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="font-oswald font-bold text-3xl uppercase">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To have global leadership in premium and sustainable label solutions.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Animated Stats Strip */}
      <section className="py-20 bg-gradient-to-r from-primary via-red-800 to-primary text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-[10%] w-20 h-20 rounded-full border border-white animate-float-slow"></div>
            <div className="absolute bottom-4 right-[20%] w-16 h-16 rounded-full border border-white animate-float-medium"></div>
            <div className="absolute top-1/2 left-[60%] w-12 h-12 rounded-full border border-white animate-float-fast"></div>
          </div>
        </div>
        
        <div className="container relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div ref={stat1.ref} className="space-y-2 group hover:scale-110 transition-transform duration-300">
            <span className="block font-oswald font-bold text-5xl md:text-6xl">{stat1.count}+</span>
            <span className="text-sm opacity-80 font-medium">Years Experience</span>
          </div>
          <div ref={stat2.ref} className="space-y-2 group hover:scale-110 transition-transform duration-300">
            <span className="block font-oswald font-bold text-5xl md:text-6xl">{stat2.count}</span>
            <span className="text-sm opacity-80 font-medium">Hour Operation</span>
          </div>
          <div ref={stat3.ref} className="space-y-2 group hover:scale-110 transition-transform duration-300">
            <span className="block font-oswald font-bold text-5xl md:text-6xl">{stat3.count}</span>
            <span className="text-sm opacity-80 font-medium">Export Countries</span>
          </div>
          <div ref={stat4.ref} className="space-y-2 group hover:scale-110 transition-transform duration-300">
            <span className="block font-oswald font-bold text-5xl md:text-6xl">{stat4.count >= 3000 ? '3K' : stat4.count}+</span>
            <span className="text-sm opacity-80 font-medium">Happy Clients</span>
          </div>
        </div>
      </section>

      {/* Core Values - Animated Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div 
            ref={valuesReveal.ref}
            className={`text-center max-w-2xl mx-auto mb-16 space-y-3 transition-all duration-700 ${
              valuesReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-lg text-slate-500 font-medium">Our DNA</h2>
            <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
              Core <span className="text-primary">Values</span>
            </h3>
            <p className="text-slate-600">The principles that guide every decision we make and every label we print.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Award, title: "Economical", desc: "Cost-efficient solutions without compromising quality", color: "from-amber-500 to-orange-500" },
              { icon: Target, title: "Results Driven", desc: "Focus on measurable outcomes for every project", color: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Passion", desc: "Genuine love for our craft and dedication to excellence", color: "from-pink-500 to-rose-500" },
              { icon: Shield, title: "Accountability", desc: "We own our work and stand behind every label", color: "from-green-500 to-emerald-500" },
              { icon: Leaf, title: "Eco Friendly", desc: "Committed to sustainable printing practices", color: "from-teal-500 to-green-500" },
            ].map((value, idx) => (
              <div 
                key={idx} 
                className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  valuesReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100 + 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="font-oswald font-bold text-lg uppercase mb-2">{value.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section - Animated */}
      <section className="py-24 bg-white">
        <div 
          ref={cultureReveal.ref}
          className={`container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            cultureReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-lg text-slate-500 font-medium">Our Culture</h2>
              <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase">
                Excellence in <span className="text-primary">Action</span>
              </h3>
            </div>
            
            <div className="space-y-5">
              {[
                { title: "Quality", desc: "Committed to upgrading with state-of-the-art machinery to deliver premium labels." },
                { title: "On Time Delivery", desc: "We keep our promise to ensure every label is delivered on time, every time." },
                { title: "Dedication", desc: "We listen and analyze customer pain points to develop cohesive solutions." },
                { title: "Satisfaction", desc: "Conducting business safely, ethically, and lawfully with openness and honesty." },
                { title: "After Sales Service", desc: "Striving to improve through feedback and providing proper support." },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 group p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg uppercase mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-orange-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032724962/9wA3KYqRs334TkeUSn5bTN/stats-factory-Wx37SMiwjtvavFhhrJkVvb.webp" 
              alt="Quality Control" 
              className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-float-slow">
              <p className="font-oswald font-bold text-xl uppercase mb-2 text-primary">"Safety Comes First"</p>
              <p className="text-sm text-slate-500">
                All operations conducted in a safe, hazard-free environment compliant with OSHA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates - Animated */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div 
          ref={certReveal.ref}
          className={`container text-center transition-all duration-1000 ${
            certReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-lg text-slate-500 font-medium mb-2">Certified Excellence</h2>
          <h3 className="font-oswald text-3xl font-bold uppercase mb-12">
            Our <span className="text-primary">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {[
              { name: "ISO 9001", desc: "Quality Management" },
              { name: "ISO 14001", desc: "Environmental Mgmt" },
              { name: "OSHA", desc: "Safety Compliant" },
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center gap-4 p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-32 h-32 rounded-2xl border-2 border-slate-200 flex items-center justify-center p-4 bg-white shadow-md group-hover:border-primary group-hover:shadow-xl transition-all duration-500">
                  <span className="font-oswald font-bold text-2xl text-slate-500 group-hover:text-primary transition-colors">{cert.name}</span>
                </div>
                <span className="text-sm font-medium text-slate-500">{cert.desc}</span>
              </div>
            ))}
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
            Partner With The Best
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Let our 30+ years of experience work for you. Contact us today for a consultation.
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
