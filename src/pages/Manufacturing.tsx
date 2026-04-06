import { motion } from "motion/react";
import { Search, Settings, DollarSign, MessageSquare, Truck, BarChart3, FlaskConical, ShieldCheck, Factory, Zap, Microscope } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const steps = [
  {
    title: "Perceiving the Needs",
    description: "We start by deeply understanding your specific requirements, target audience, and market goals.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Optimization & R&D",
    description: "Our scientists optimize formulations and match them with available products for superior results.",
    icon: Settings,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Cost Estimation",
    description: "Transparent and competitive pricing models tailored to your production scale and requirements.",
    icon: DollarSign,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Ensuing Communication",
    description: "Constant dialogue and updates throughout the manufacturing process for complete transparency.",
    icon: MessageSquare,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Supply of Goods",
    description: "Efficient manufacturing and timely delivery of high-quality goods to your doorstep.",
    icon: Truck,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Summative Evaluation",
    description: "Post-delivery analysis and feedback to ensure long-term success and continuous improvement.",
    icon: BarChart3,
    color: "bg-slate-100 text-slate-600",
  },
];

export default function Manufacturing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Manufacturing background"
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
            Manufacturing <span className="text-emerald-500">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            A systematic, precision-driven approach to pharmaceutical and cosmetic production.
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Process</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">The Elfrick Workflow</h3>
            </ScrollReveal>
          </div>
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block z-0"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500 ${step.color}`}>
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="flex items-center space-x-6 mb-6">
                      <span className="text-5xl font-black text-slate-100 group-hover:text-emerald-100 transition-colors">{index + 1}</span>
                      <h4 className="text-2xl font-black text-slate-900">{step.title}</h4>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Facilities</h2>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">State-of-the-Art Infrastructure</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                  Our manufacturing units are designed to meet the most stringent international standards. We utilize advanced machinery and automated processes to ensure consistency and precision in every batch.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <Factory className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Automated Production Lines</h4>
                      <p className="text-slate-500">Minimizing human error and maximizing efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <FlaskConical className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">In-House R&D Lab</h4>
                      <p className="text-slate-500">Continuous innovation and formulation development.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <ShieldCheck className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Climate Controlled Storage</h4>
                      <p className="text-slate-500">Ensuring stability and shelf-life of all products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
                      alt="Facility 1"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] mt-12">
                    <img
                      src="https://images.unsplash.com/photo-1579165466541-74e214958042?auto=format&fit=crop&q=80&w=600"
                      alt="Facility 2"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-emerald-600 text-white p-10 rounded-3xl shadow-2xl hidden md:block">
                  <p className="text-5xl font-black mb-2">140M+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-100">Units Per Annum</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* R&D Highlight */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                  <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4">Innovation Hub</h2>
                  <h3 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">The Heart of Our Science</h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-12">
                    Our Research & Development department is where wisdom meets science. We focus on developing novel drug delivery systems and advanced cosmetic formulations that set new benchmarks in the industry.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <div className="bg-emerald-600/20 p-2 rounded-lg">
                        <Zap className="h-6 w-6 text-emerald-500" />
                      </div>
                      <span className="text-lg font-bold">Novel Formulation Development</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="bg-emerald-600/20 p-2 rounded-lg">
                        <Zap className="h-6 w-6 text-emerald-500" />
                      </div>
                      <span className="text-lg font-bold">Stability & Compatibility Testing</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <div className="bg-emerald-600/20 p-2 rounded-lg">
                        <Zap className="h-6 w-6 text-emerald-500" />
                      </div>
                      <span className="text-lg font-bold">Process Validation & Optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9d397198a?auto=format&fit=crop&q=80&w=1000"
                    alt="R&D Lab"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
