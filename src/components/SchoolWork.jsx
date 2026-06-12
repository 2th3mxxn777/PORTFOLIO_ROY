import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Terminal, Code2, Layers } from 'lucide-react'

const SchoolWork = () => {
  const [activeTab, setActiveTab] = useState(0)

  const courses = [
    {
      code: "IT 494",
      name: "IT Project Management",
      desc: "Comprehensive study of project planning, scheduling, budgeting, risk analysis, and stakeholder management within enterprise IT infrastructures.",
      p1: "In this course, I mastered the systematic approach to managing high-stakes IT initiatives. I learned how to translate organizational objectives into actionable project lifecycles, utilizing methodologies like Agile and Waterfall to ensure structured deployment.",
      p2: "The primary challenge was managing realistic risk vectors and timeline constraints during our simulated Windows 10 Migration project. Balancing budget allocations while identifying potential security and implementation bottlenecks forced me to develop rigorous analytical problem-solving skills.",
      p3: "This knowledge directly prepares me for future leadership roles in IT Management. Understanding how to manage resources, mitigate technical risks, and align stakeholder expectations will allow me to execute enterprise projects efficiently.",
      project: "Windows 10 Migration & Risk Analysis Framework"
    },
    {
      code: "CIS 310",
      name: "Database Management Systems",
      desc: "Hands-on expertise in relational database architectures, structured query development (SQL), schema normalization, and data integrity optimization.",
      p1: "This course provided a deep understanding of data structures and relational database engines. Writing complex SQL queries, optimizing table joins, and ensuring strict data integrity constraints taught me how critical structured backends are to modern applications.",
      p2: "Normalizing database schemas to 3NF (Third Normal Form) while designing the Student Management System was a steep learning curve. I had to carefully eliminate data redundancy without compromising the relational access speed and lookup performance.",
      p3: "As an aspiring Database Engineer or IT specialist, backend data manipulation is fundamental. The ability to design scalable schemas and write high-performance queries will enable me to build reliable data-driven corporate platforms.",
      project: "Student Management Database System"
    },
    {
      code: "CCNA 2",
      name: "Routing & Switching",
      desc: "Advanced networking covering router configurations, Virtual LANs (VLANs), routing protocols, network security enforcement, and enterprise infrastructure design.",
      p1: "Through CCNA 2, I gained comprehensive knowledge of network layers, topologies, and enterprise traffic flows. Configuring Cisco devices and setting up routing protocols allowed me to see how global internet architectures safely transmit data packets.",
      p2: "Designing secure VLAN boundaries and debugging unexpected routing table drops during lab sessions was highly challenging. It required systematic CLI debugging and network topology verification to restore reliable communication lines.",
      p3: "Networking is the backbone of all cloud and infrastructure systems. This technical expertise in routing, switching, and protocol management directly qualifies me to handle enterprise-level network engineering and infrastructure support roles.",
      project: "Enterprise Router Configuration & Secure VLAN Design"
    },
    {
      code: "IT 376",
      name: "Wireless Technology",
      desc: "Exploration of modern Wi-Fi standardizations, antenna configurations, wireless transmission protocols, and enterprise radio-frequency security frameworks.",
      p1: "This course opened up the complexities of untethered communications. I studied signal propagation, the physical and link layers of wireless standards, encryption mechanisms, and corporate access point distribution layouts.",
      p2: "The major hurdle was calculating signal degradation vectors over specific environmental interferences and configuring secure enterprise authentication protocols. It demanded precise engineering calculations and rigid security policies.",
      p3: "With companies shifting toward absolute mobile and wireless network infrastructures, mastering RF deployment patterns and wireless defense metrics ensures I can engineer fast, reliable, and secure remote-access workplace environments.",
      project: "Corporate Wi-Fi Signal Distribution & Authentication Architecture"
    },
    {
      code: "ADV PROG",
      name: "Advanced Programming",
      desc: "Deep dive into object-oriented programming (OOP), advanced data structures, complex algorithmic structures, and modular software engineering patterns.",
      p1: "Advanced Programming refined my raw code implementation into production-ready software engineering. I mastered core object-oriented paradigms like inheritance, polymorphism, and encapsulation using languages like Python, Java, and C++.",
      p2: "Transitioning from writing simple functional script modules to orchestrating highly optimized, multi-tiered software architectures was tough. I had to strictly enforce clean architecture principles and optimize time-complexity standards.",
      p3: "This rigorous algorithmic training is critical for any software development path. Writing maintainable, deeply optimized code equips me to tackle complex logic puzzles and deploy enterprise-level software applications seamlessly.",
      project: "Command-Line Automation Utilities & OOP Framework Design"
    }
  ]

  return (
    <section id="schoolwork" className="py-24 bg-[#020202] text-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Academic Showcase</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">School <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">Work.</span></h2>
          <div className="w-12 h-[2px] bg-emerald-500 mt-6" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {courses.map((course, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === idx 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                    : 'bg-white/[0.02] border-white/5 text-white/50 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold bg-white/5 px-2 py-1 rounded border border-white/10">{course.code}</span>
                  <span className="text-sm font-bold tracking-tight">{course.name}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-2xl min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest block mb-1">Course Description</span>
                  <p className="text-white/80 text-sm leading-relaxed">{courses[activeTab].desc}</p>
                </div>

                <div className="border-t border-white/5 pt-4 space-y-4">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">3-Paragraph Reflection</span>
                  <p className="text-white/50 text-xs leading-relaxed font-light"><strong className="text-white font-medium block mb-1">1. What Was Learned:</strong> {courses[activeTab].p1}</p>
                  <p className="text-white/50 text-xs leading-relaxed font-light"><strong className="text-white font-medium block mb-1">2. Core Challenges & Solutions:</strong> {courses[activeTab].p2}</p>
                  <p className="text-white/50 text-xs leading-relaxed font-light"><strong className="text-white font-medium block mb-1">3. Future Professional Application:</strong> {courses[activeTab].p3}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Code2 size={14} className="text-emerald-500" />
                <span className="text-xs font-mono text-white/40">Sample Project:</span>
                <span className="text-xs font-bold text-white tracking-tight">{courses[activeTab].project}</span>
              </div>
              <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">Verified Work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SchoolWork