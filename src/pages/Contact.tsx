import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, Globe, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formState);
    // In a real app, we'd use a custom modal instead of alert
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=2000"
            alt="Contact background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter"
          >
            Contact <span className="text-emerald-500">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Have a project in mind or need more information? Our team of experts is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-24">
            {/* Contact Info */}
            <ScrollReveal direction="right" className="lg:col-span-1 space-y-12">
              <div>
                <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Get in Touch</h2>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-10 leading-tight">Contact Details</h3>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-8 group">
                  <div className="bg-slate-50 p-5 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <MapPin className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Our Location</h4>
                    <p className="text-slate-600 text-lg">Plot No. 123, Industrial Area, Phase II, Chandigarh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8 group">
                  <div className="bg-slate-50 p-5 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Phone className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Phone Number</h4>
                    <p className="text-slate-600 text-lg">+91 12345 67890</p>
                    <p className="text-slate-600 text-lg">+91 09876 54321</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8 group">
                  <div className="bg-slate-50 p-5 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Mail className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Email Address</h4>
                    <p className="text-slate-600 text-lg">info@elfrickhealthcare.com</p>
                    <p className="text-slate-600 text-lg">sales@elfrickhealthcare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-8 group">
                  <div className="bg-slate-50 p-5 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Clock className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-2">Working Hours</h4>
                    <p className="text-slate-600 text-lg">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600 text-lg">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="bg-slate-50 p-10 lg:p-20 rounded-[4rem] border border-slate-100 shadow-inner">
                <h3 className="text-4xl font-black text-slate-900 mb-12">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 px-8 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-lg"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 px-8 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-lg"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Inquiry about Contract Manufacturing"
                      className="w-full bg-white border border-slate-200 px-8 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium text-lg"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full bg-white border border-slate-200 px-8 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none font-medium text-lg"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-6 rounded-3xl font-black text-xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/20 flex items-center justify-center group"
                  >
                    <span>Send Message</span>
                    <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[600px] bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-50">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
            alt="Map placeholder"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ScrollReveal>
            <div className="bg-white/90 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl border border-white text-center max-w-md mx-4">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
              <h4 className="text-3xl font-black text-slate-900 mb-4">Visit Our Office</h4>
              <p className="text-slate-600 mb-8 font-medium">Plot No. 123, Industrial Area, Phase II, Chandigarh</p>
              <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 mx-auto">
                <span>Open in Maps</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">FAQ</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            {[
              { q: "What is your minimum order quantity (MOQ)?", a: "Our MOQ varies depending on the product category and formulation. Please contact our sales team for specific details." },
              { q: "Are you WHO-GMP certified?", a: "Yes, our manufacturing facilities are fully WHO-GMP certified and adhere to global quality standards." },
              { q: "Do you offer private labeling?", a: "Absolutely. We specialize in contract manufacturing and private labeling for both pharmaceutical and cosmetic brands." },
              { q: "What is your typical lead time?", a: "Lead times depend on the complexity of the formulation and order size, but we typically deliver within 4-6 weeks." },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
