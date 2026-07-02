import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Quote Request from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:tl.choo@chooexpress.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova-assets/DfytmACsxrKAFtRe.jpg" 
            alt="Get Quote" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Get Your Quote
            </div>
            <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight leading-none">
              Request A <br/>
              <span className="text-primary">Quote</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light border-l-2 border-primary pl-6 max-w-2xl">
              Tell us about your labeling needs and we'll provide you with a customized quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="font-mono text-primary text-sm uppercase tracking-widest">Quick Quote</h2>
                  <h3 className="font-oswald text-3xl font-bold uppercase text-foreground">Send Us Your Details</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-wider text-foreground">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-wider text-foreground">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                        placeholder="+60 7 338 3636"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-wider text-foreground">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-wider text-foreground">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono uppercase tracking-wider text-foreground">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                      placeholder="Inquiry about custom stickers"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono uppercase tracking-wider text-foreground">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-foreground text-white rounded-none font-mono uppercase tracking-wider h-12 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Request Quote
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="font-mono text-primary text-sm uppercase tracking-widest">Contact Info</h2>
                <h3 className="font-oswald text-3xl font-bold uppercase text-foreground">Get In Touch</h3>
              </div>

              {/* Malaysia Office */}
              <div className="space-y-6 p-6 border border-border hover:border-primary transition-colors">
                <div>
                  <h4 className="font-oswald font-bold uppercase text-lg mb-1">Malaysia Head Office</h4>
                  <p className="text-sm text-muted-foreground font-mono">Chooexpress Label Sdn Bhd</p>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      No.38, Jalan Riang 21,<br/>
                      Kawasan Perindustrian Taman Gembira,<br/>
                      81200 Johor Bahru, Johor, Malaysia.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>+6 07 338 3636</p>
                      <p>+6019 779 6306</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <a href="mailto:tl.choo@chooexpress.com" className="text-sm text-primary hover:underline">
                      tl.choo@chooexpress.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Singapore Office */}
              <div className="space-y-6 p-6 border border-border hover:border-primary transition-colors">
                <div>
                  <h4 className="font-oswald font-bold uppercase text-lg mb-1">Singapore Branch Office</h4>
                  <p className="text-sm text-muted-foreground font-mono">Chooexpress Label (S) Pte Ltd</p>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      10 Anson Road<br/>
                      #29-10 International Plaza<br/>
                      Singapore 079903
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">+65 9684 8852</p>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <a href="mailto:tf.choo@chooexpress.com" className="text-sm text-primary hover:underline">
                      tf.choo@chooexpress.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 bg-primary/5 border border-primary/20">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-mono uppercase tracking-wider text-primary mb-1">Response Time</p>
                    <p className="text-muted-foreground">We typically respond within 24 business hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
