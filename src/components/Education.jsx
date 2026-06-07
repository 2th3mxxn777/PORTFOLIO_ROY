import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Binary, Terminal, Award, Building2 } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      id: "01",
      category: "UNDERGRADUATE",
      degree: "B.Sc. in Computer Information Sciences",
      institution: "Monroe University",
      period: "2023 — Present",
      status: "7th Semester // Active",
      location: "Bronx, New York",
      focus: "IT Management & Software Development",
      description: "Specializing in database systems, networking, project management, and software development. Coursework covers IT 494, CIS 310, CCNA 2, Wireless Technology, and Advanced Programming.",
      stats: [
        { label: "Semester", value: "7th" },
        { label: "Grad", value: "Dec 2026" }
      ],
      tags: ["Databases", "Networking", "Python", "Project_Mgmt"]
    }
  ]

  const coursework = [
    { code: "IT 494", name: "IT Project Management", desc: "Project planning, scheduling, budgeting, risk analysis, and stakeholder management." },
    { code: "CIS 310", name: "Database Management Systems", desc: "Relational databases, SQL, normalization, and database design." },
    { code: "CCNA 2", name: "Routing & Switching", desc: "VLANs, network security, routing protocols, and enterprise networking." },
    { code: "IT 376", name: "Wireless Technology", desc: "Wi-Fi, antennas, wireless security, and communication protocols." },
    { code: "ADV PROG", name: "Advanced Programming", desc: "Algorithms, OOP, software development, and problem solving." },
  ]

  return (
    <section id="education" className="py-24 relative bg-[#050505] overflow-hidden font-sans">
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-emerald-500 mb-4">
              <Terminal size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Registry_Update: 2026.12</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
              Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-200 italic">Timeline.</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest leading-relaxed">
              Student_ID: PARTHIB.CIS.MU <br />
              Auth_Level: Active_Student
            </p>
          </motion.div>
        </div>

        {/* Degree Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl group-hover:border-emerald-500/30 transition-all duration-700 h-full flex flex-col relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/10 transition-all">
                      <GraduationCap size={20} />
                    </div>
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{edu.category}</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-tighter">{edu.period}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm mb-6 font-medium italic">
                  <Building2 size={14} className="text-emerald-500" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-white/30 text-sm leading-relaxed mb-8 flex-grow">{edu.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {edu.stats.map((stat, i) => (
                    <div key={i} className="bg-emerald-500/[0.03] p-4 border border-white/5 rounded-xl">
                      <p className="text-[8px] text-white/20 uppercase font-black mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-white tracking-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {edu.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/30 group-hover:text-emerald-500/60 transition-all">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-white/10">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {edu.location}</span>
                  <span className="uppercase">{edu.status}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coursework Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/5 p-10 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">Key Coursework</h3>
            <div className="space-y-5">
              {coursework.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="text-[9px] font-black text-emerald-500 font-mono w-16 shrink-0 pt-1">{c.code}</div>
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{c.name}</p>
                    <p className="text-white/30 text-xs leading-relaxed mt-1">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-10 py-5 px-12 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Award className="text-emerald-500" size={18} />
              <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Expected: December 2026</span>
            </div>
            <div className="w-[1px] h-4 bg-white/10" />
            <div className="flex items-center gap-3">
              <Binary className="text-emerald-500" size={18} />
              <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Branch: Computer Information Sciences</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education