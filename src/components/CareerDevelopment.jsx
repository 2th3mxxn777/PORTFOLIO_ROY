import { motion } from 'framer-motion'
import { Briefcase, Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react'

const CareerDevelopment = () => {
  const experiences = [
    {
      role: "IT Solutions & Systems Intern",
      company: "Monroe University (Simulated Lab Environment)",
      period: "Sept 2025 — Present",
      type: "INTERNSHIP EXPERIENCE",
      highlights: [
        "Architected a comprehensive Student Management System database schema from ground up, implementing complete relational integrity and custom CRUD pipelines.",
        "Formulated end-to-end network topology models for corporate branch offices, defining virtual isolation parameters (VLANs) and access control lists via Cisco IOS CLI.",
        "Produced professional risk management matrices and communication rollout workflows representing live deployment scenarios (e.g., Windows 10 Migration plans)."
      ]
    },
    {
      role: "Independent Technical Consultant & Developer",
      company: "Open Source Contribution & Self-Directed Projects",
      period: "Jan 2024 — Active",
      type: "WORK EXPERIENCE",
      highlights: [
        "Engineered command-line data automation modules in Python and C++ to streamline iterative diagnostic tasks and algorithmic computational checks.",
        "Designed and maintained custom responsive web application frontends using contemporary JavaScript and CSS layouts to showcase technical milestones.",
        "Consistently refactoring analytical architecture models based on persistent algorithm tracking and performance indexing via LeetCode & HackerRank environments."
      ]
    }
  ]

  return (
    <section id="career" className="py-24 bg-[#050505] text-white font-sans relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-emerald-500 pl-6"
        >
          <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono">
            <Terminal size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Career_Growth_Log</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 italic">Development.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/10 inline-block mb-3 uppercase tracking-wider">
                    {exp.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">{exp.role}</h3>
                  <p className="text-white/40 text-sm mt-1">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white/30">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 relative z-10 pl-1">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="text-white/60 text-sm leading-relaxed flex items-start gap-3 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
                <Briefcase size={40} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CareerDevelopment