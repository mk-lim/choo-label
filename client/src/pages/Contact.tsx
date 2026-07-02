import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
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
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/nova-assets/DfytmACsxrKAFtRe.jpg" 
            alt="Contact Us" 
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
              Get In Touch
            </div>
            <h1 className="font-oswald font-bold text-5xl md:text-7xl uppercase tracking-tight leading-none">
              Contact <br/>
              <span className="text-primary">Chooexpress</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light border-l-2 border-primary pl-6 max-w-2xl">
              Please feel free to contact us to discuss what innovative labels printing solutions we can offer you.
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
                  <h2 className="font-mono text-primary text-sm uppercase tracking-widest">Inquiry Form</h2>
                  <h3 className="font-oswald text-3xl font-bold uppercase text-foreground">Send Us A Message</h3>
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
                    Send Message
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

              {/* Operating Hours */}
              <div className="space-y-4 p-6 border border-border bg-slate-50 dark:bg-slate-800/50">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-oswald font-bold uppercase text-sm mb-3">Operating Hours</h5>
                    <div className="space-y-1 text-xs text-muted-foreground font-mono">
                      <div className="flex justify-between gap-4">
                        <span>Monday - Friday:</span>
                        <span>8:30 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saturday:</span>
                        <span>8:30 AM - 1:30 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-mono text-primary text-sm uppercase tracking-widest">Why Contact Us</h2>
            <h3 className="font-oswald text-4xl font-bold uppercase text-foreground">What We Offer</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Expert Consultation", desc: "Personalized guidance from our experienced team" },
              { number: "02", title: "Quick Response", desc: "Fast turnaround on quotes and inquiries" },
              { number: "03", title: "Custom Solutions", desc: "Tailored sticker solutions for your needs" },
              { number: "04", title: "Quality Assurance", desc: "Guaranteed high-quality output and service" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                <div className="font-oswald font-bold text-3xl text-primary mb-3">{item.number}</div>
                <h4 className="font-oswald font-bold uppercase mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-mono text-primary text-sm uppercase tracking-widest">Common Questions</h2>
            <h3 className="font-oswald text-4xl font-bold uppercase text-foreground">Frequently Asked Questions</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the minimum order quantity?",
                a: "Our minimum order quantity depends on the product type and printing method. Please contact us for specific details."
              },
              {
                q: "How long does production take?",
                a: "Standard production typically takes 7-14 business days. Rush orders may be available upon request."
              },
              {
                q: "Do you offer design services?",
                a: "Yes, we provide professional design consultation and artwork preparation services to help bring your vision to life."
              },
              {
                q: "What file formats do you accept?",
                a: "We accept PDF, AI, PSD, and other standard design formats. Our team can guide you on proper file specifications."
              },
              {
                q: "Can you handle international orders?",
                a: "Yes, we ship to customers worldwide. Contact us for shipping rates and delivery timelines to your location."
              },
              {
                q: "Do you offer samples?",
                a: "We can provide samples for evaluation. Please inquire about sample availability and costs."
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-border hover:border-primary transition-colors group">
                <h4 className="font-oswald font-bold uppercase mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-oswald font-bold text-4xl md:text-6xl uppercase tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light">
            Reach out to our team today and let's discuss your custom sticker and label printing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-none font-mono uppercase tracking-wider h-14 px-10 text-base font-bold">
              Send Inquiry
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-none font-mono uppercase tracking-wider h-14 px-10 text-base">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
