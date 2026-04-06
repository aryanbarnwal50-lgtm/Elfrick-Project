import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, FlaskConical, ShieldCheck, Zap, Award, Users, Factory, Microscope, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/ScrollReveal";

const stats = [
  { label: "Pharmaceutical Capacity", value: "85M+", unit: "P.A.", icon: FlaskConical },
  { label: "Cosmetic Capacity", value: "55M+", unit: "P.A.", icon: Beaker },
  { label: "Years of Excellence", value: "15+", unit: "Years", icon: Award },
  { label: "Global Clients", value: "200+", unit: "Partners", icon: Users },
];

const features = [
  {
    title: "GMP Certified Facilities",
    description: "Our manufacturing units adhere to strict Good Manufacturing Practices, ensuring every product meets international safety standards.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Advanced R&D Lab",
    description: "Continuous innovation driven by our state-of-the-art research and development department for superior formulations.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1532187863486-abf9d397198a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Contract Manufacturing",
    description: "End-to-end manufacturing solutions for global brands, from formulation to final packaging with absolute precision.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Pharmaceutical Laboratory"
            className="w-full h-full object-cover animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold mb-8">
                <Award className="h-4 w-4" />
                <span className="tracking-wide uppercase text-xs">WHO-GMP Certified Manufacturer</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                Crafting <span className="text-emerald-500">Excellence</span> in Healthcare.
              </h1>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
                Elfrick Healthcare is a premier pharmaceutical and cosmetic manufacturer dedicated to excellence through wisdom and advanced research.
              </p>
              <div className="flex space-x-6">
                <Link
                  to="/products"
                  className="bg-emerald-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/20 flex items-center group"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Legacy Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 group">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                    alt="Our facility"
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-[2.5rem] -z-0 hidden lg:block"></div>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-100 rounded-full -z-0 hidden lg:block"></div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Our Legacy
                </div>
                <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                  Where Wisdom Meets <span className="text-emerald-600">Science.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Derived from the words "Elf Ruler" and "Wisdom", Elfrick Healthcare embodies the spirit of leadership and intelligent formulation. We provide strategic synergy across our core divisions, delivering pharmaceutical and cosmetic excellence globally.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-emerald-600">15+</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years of Wisdom</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-black text-emerald-600">140M+</p>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Annual Capacity</p>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors group"
                >
                  Read our full story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Core Competencies</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Pioneering the Future of Manufacturing</h3>
              <p className="text-lg text-slate-600 font-medium">
                We combine state-of-the-art technology with deep industry expertise to deliver superior results.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -15, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  className="bg-white group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 h-full flex flex-col"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-10 flex-grow">
                    <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                      <feature.icon className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="space-y-4">
                  <div className="bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                    <stat.icon className="h-8 w-8 text-emerald-500" />
                  </div>
                  <p className="text-5xl lg:text-6xl font-black text-white mb-2">{stat.value}</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{stat.label} ({stat.unit})</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="space-y-10">
                <div>
                  <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Expertise</h2>
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">Comprehensive Manufacturing Capabilities</h3>
                </div>
                
                <div className="space-y-8">
                  {[
                    { title: "Pharmaceutical Division", desc: "Specializing in external topicals, liquids, and ear drops with an annual capacity of 85 million units.", icon: FlaskConical },
                    { title: "Cosmetic Division", desc: "Premium skincare and personal care formulations with an annual capacity of 55 million units.", icon: Beaker },
                    { title: "Contract Manufacturing", desc: "Strategic synergy for global brands seeking reliable, high-quality production partners.", icon: Factory }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-6 group">
                      <div className="bg-emerald-50 p-3 rounded-2xl group-hover:bg-emerald-600 transition-colors duration-300 mt-1">
                        <item.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/manufacturing"
                  className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 inline-flex items-center group"
                >
                  Learn about our process
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-[2rem] overflow-hidden shadow-xl h-80 group">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                      alt="Pharma manufacturing"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[2rem] overflow-hidden shadow-xl h-64 bg-emerald-600 flex items-center justify-center p-8 text-white text-center">
                    <div>
                      <p className="text-4xl font-black mb-2">100%</p>
                      <p className="text-sm font-bold uppercase tracking-widest">Quality Assurance</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="rounded-[2rem] overflow-hidden shadow-xl h-64 group relative">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
                      alt="Cosmetic production"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-white font-bold">Cosmetic Production</p>
                    </div>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden shadow-xl h-80 group relative">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600"
                      alt="Quality control"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-white">
                        <p className="font-black text-lg">Quality Control</p>
                        <p className="text-xs text-slate-200">Rigorous testing & inspection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=2000"
            alt="Laboratory background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10 tracking-tight leading-tight">Ready to Start Your Next Manufacturing Project?</h2>
            <p className="text-xl text-emerald-100 mb-12 font-medium max-w-2xl mx-auto">
              Partner with Elfrick Healthcare for reliable, high-quality, and cost-effective manufacturing solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-12 py-6 rounded-full text-xl font-bold hover:bg-emerald-50 transition-all shadow-2xl shadow-emerald-900/40 inline-block"
            >
              Get a Custom Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
