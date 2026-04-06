import { motion } from "motion/react";
import { Target, Eye, Heart, Award, ShieldCheck, FlaskConical, Users, Factory } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const values = [
  {
    title: "Uncompromising Quality",
    description: "We adhere to the highest international standards of manufacturing and quality control.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Innovation",
    description: "Our R&D team is constantly exploring new formulations and improving existing ones.",
    icon: FlaskConical,
  },
  {
    title: "Customer Centricity",
    description: "We build long-term partnerships based on trust, transparency, and mutual growth.",
    icon: Users,
  },
  {
    title: "Operational Excellence",
    description: "Efficiency and precision are at the heart of our manufacturing processes.",
    icon: Factory,
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
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
            About <span className="text-emerald-500">Elfrick</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            A legacy of wisdom, a future of precision. Leading the way in pharmaceutical and cosmetic manufacturing.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                  <img
                    src="https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=1000"
                    alt="Our story - Pharmaceutical Manufacturing"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-10 rounded-3xl shadow-2xl text-white hidden md:block">
                  <p className="text-5xl font-black">15+</p>
                  <p className="text-sm font-bold uppercase tracking-widest">Years of Wisdom</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Story</h2>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">The Wisdom Behind the Name</h3>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    The name "ELFRICK" is derived from the ancient words meaning "Elf Ruler" and "Wisdom". This name was chosen to reflect our core philosophy: leading the industry through intelligent formulation and wise decision-making.
                  </p>
                  <p>
                    Founded with a vision to bridge the gap between advanced science and accessible healthcare, Elfrick Healthcare has grown from a specialized manufacturing unit into a global pharmaceutical and cosmetic powerhouse.
                  </p>
                  <p>
                    Today, we operate state-of-the-art facilities with an annual capacity exceeding 140 million units, serving clients across multiple continents with uncompromising quality and precision.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="right">
              <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 h-full group hover:shadow-2xl transition-all duration-500">
                <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  <Target className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To deliver high-quality, innovative, and cost-effective pharmaceutical and cosmetic solutions that improve lives globally, while maintaining the highest standards of integrity and excellence in manufacturing.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-100 h-full group hover:shadow-2xl transition-all duration-500">
                <div className="bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                  <Eye className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To be the most trusted global partner in contract manufacturing and formulation development, recognized for our wisdom, precision, and commitment to advancing healthcare and personal care.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Values</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">The Pillars of Elfrick</h3>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <value.icon className="h-10 w-10 text-emerald-600 group-hover:text-white transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Culture Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">Our Culture</h2>
                <h3 className="text-4xl lg:text-5xl font-extrabold mb-10 leading-tight">Driven by Expertise & Passion</h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-12">
                  At Elfrick, we believe that our people are our greatest asset. Our team of scientists, engineers, and quality experts are united by a common goal: delivering excellence in every drop and every tablet.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  <div className="flex items-center space-x-6">
                    <div className="bg-emerald-600/20 p-4 rounded-2xl border border-emerald-600/30">
                      <Users className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-4xl font-black">500+</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Employees</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="bg-emerald-600/20 p-4 rounded-2xl border border-emerald-600/30">
                      <Award className="h-8 w-8 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-4xl font-black">50+</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Patents</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                    alt="Team working"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
                    alt="Lab work"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
