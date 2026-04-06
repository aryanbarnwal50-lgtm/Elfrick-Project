import { motion } from "motion/react";
import { useState } from "react";
import { FlaskConical, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/ScrollReveal";

const categories = [
  { id: "all", name: "All Products", icon: FlaskConical },
  { id: "pharma", name: "Pharmaceutical", icon: FlaskConical },
  { id: "cosmetic", name: "Cosmetic", icon: Sparkles },
];

const products = [
  {
    id: "1",
    name: "External Topicals",
    category: "pharma",
    description: "High-quality creams, ointments, and gels for various dermatological applications.",
    features: ["GMP Certified", "Sterile Formulation", "Superior Absorption"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Ear Drops",
    category: "pharma",
    description: "Specialized liquid formulations for otic use, ensuring safety and efficacy.",
    features: ["Precision Dropper", "Sterile Environment", "pH Balanced"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Liquid Formulations",
    category: "pharma",
    description: "Oral and external liquid medicines manufactured with strict quality control.",
    features: ["Homogeneous Mix", "Stability Tested", "Accurate Dosing"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9d397198a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Premium Skincare",
    category: "cosmetic",
    description: "Advanced skincare products including serums, moisturizers, and cleansers.",
    features: ["Natural Ingredients", "Dermatologically Tested", "Luxury Texture"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    name: "Personal Care",
    category: "cosmetic",
    description: "Everyday personal care solutions like shampoos, body washes, and lotions.",
    features: ["Gentle Formula", "Long-lasting Fragrance", "Paraben Free"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    name: "Specialized Formulations",
    category: "cosmetic",
    description: "Custom-developed cosmetic products for niche market requirements.",
    features: ["R&D Driven", "Custom Packaging", "Scalable Production"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=2000"
            alt="Laboratory background"
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
            Our <span className="text-emerald-500">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Explore our comprehensive range of pharmaceutical and cosmetic solutions, manufactured with uncompromising quality and precision.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20 bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-full text-sm font-black transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 scale-105"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                <span className="uppercase tracking-widest">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="h-80 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md ${
                        product.category === 'pharma' ? 'bg-emerald-600/90 text-white' : 'bg-blue-600/90 text-white'
                      }`}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-3 mb-10">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-500">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black flex items-center justify-center group/btn hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-600/20"
                    >
                      Inquire Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities Summary */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                  alt="Lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative z-10 lg:w-2/3">
                <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">Contract Manufacturing</h2>
                <h3 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">Tailored Solutions for Your Brand</h3>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                  We offer end-to-end manufacturing services, from formulation development to final packaging. Our facilities are equipped to handle large-scale production while maintaining the highest quality standards.
                </p>
                <div className="grid sm:grid-cols-2 gap-12 mb-16">
                  <div className="flex items-start space-x-6">
                    <div className="bg-emerald-600/20 p-4 rounded-2xl border border-emerald-600/30">
                      <ShieldCheck className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Quality Assurance</h4>
                      <p className="text-sm text-slate-500">Rigorous testing at every stage of production.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-emerald-600/20 p-4 rounded-2xl border border-emerald-600/30">
                      <Zap className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fast Turnaround</h4>
                      <p className="text-sm text-slate-500">Efficient processes for timely delivery.</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/manufacturing"
                  className="bg-emerald-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:scale-105 active:scale-95 inline-block"
                >
                  Learn About Our Process
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
