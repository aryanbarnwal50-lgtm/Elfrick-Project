import { motion } from "motion/react";
import { ShieldCheck, Award, CheckCircle2, FileCheck, Zap, FlaskConical, Microscope, ClipboardCheck, Settings } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";

const certifications = [
  { name: "WHO-GMP", description: "World Health Organization - Good Manufacturing Practices", icon: Award },
  { name: "ISO 9001:2015", description: "International Organization for Standardization - Quality Management", icon: ShieldCheck },
  { name: "GLP CERTIFIED", description: "Good Laboratory Practices for non-clinical safety studies", icon: Microscope },
  { name: "PPB KENYA", description: "Pharmacy and Poisons Board - Kenya Regulatory Approval", icon: FileCheck },
  { name: "NDA UGANDA", description: "National Drug Authority - Uganda Regulatory Approval", icon: FileCheck },
];

const qualitySteps = [
  {
    title: "Raw Material Testing",
    description: "Every ingredient is tested for purity and potency before entering the production line.",
    icon: FlaskConical,
  },
  {
    title: "In-Process Quality Control",
    description: "Continuous monitoring at every stage of manufacturing to ensure consistency.",
    icon: Settings,
  },
  {
    title: "Finished Product Analysis",
    description: "Final batches undergo rigorous testing to meet all safety and efficacy standards.",
    icon: ClipboardCheck,
  },
  {
    title: "Stability Testing",
    description: "Long-term stability studies to ensure product integrity throughout shelf-life.",
    icon: Zap,
  },
];

export default function Quality() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000"
            alt="Quality background"
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
            Quality <span className="text-emerald-500">Assurance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Our commitment to quality is uncompromising. We adhere to the highest international standards to ensure safety and efficacy.
          </motion.p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Credentials</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Globally Recognized Standards</h3>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 transition-all duration-500 group hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                  <div className="bg-white w-20 h-20 rounded-2xl shadow-inner flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <cert.icon className="h-10 w-10 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">{cert.name}</h4>
                  <p className="text-slate-600 leading-relaxed">{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000"
                    alt="Quality control lab"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl hidden md:block border border-slate-100">
                  <div className="flex items-center space-x-6">
                    <div className="bg-emerald-100 p-4 rounded-full">
                      <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900">100%</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Quality Compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4">Our Methodology</h2>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-10 leading-tight">Rigorous Testing at Every Stage</h3>
                <div className="space-y-12">
                  {qualitySteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-8 group">
                      <div className="bg-emerald-600 p-4 rounded-2xl shrink-0 mt-1 shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Policy Highlight */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-6">Quality Policy</h2>
                <h3 className="text-4xl lg:text-6xl font-black mb-10 leading-tight">Uncompromising Standards for Global Health</h3>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed italic font-medium">
                  "At Elfrick Healthcare, quality is not just a department; it is our culture. We are committed to delivering products that meet or exceed international standards of safety, purity, and efficacy, ensuring the well-being of every patient and consumer who uses our products."
                </p>
                <div className="flex flex-wrap justify-center gap-12">
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                    <span className="font-black uppercase tracking-widest text-xs">Zero Defect Policy</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                    <span className="font-black uppercase tracking-widest text-xs">Continuous Training</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                    <span className="font-black uppercase tracking-widest text-xs">Advanced Instrumentation</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
