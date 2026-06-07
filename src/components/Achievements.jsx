import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, 
  ShieldAlert, 
  BarChart3, 
  Terminal, 
  ChevronLeft, 
  ChevronRight, 
  Verified,
  Cpu,
  Network,
  BookOpen
} from 'lucide-react'

const Achievements = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const data = [
    {
      title: "IT Project Management",
      provider: "Monroe University",
      type: "COURSEWORK",
      icon: <Trophy className="text-amber-400" size={20} />,
      metric: "IT 494 // Completed",
      desc: "Mastered project planning, scheduling, budgeting, risk analysis, and stakeholder management. Delivered real-world projects including Windows 10 Migration and a Risk Management Analysis."
    },
    {
      title: "CCNA 2 — Routing & Switching",
      provider: "Monroe University",
      type: "CERTIFICATION_TRACK",
      icon: <Network className="text-blue-400" size={20} />,
      metric: "Enterprise_Networking",
      desc: "Completed CCNA 2 coursework covering VLANs, routing protocols, network security, and enterprise infrastructure. Delivered Router Configuration and VLAN Design labs."
    },
    {
      title: "Database Management Systems",
      provider: "Monroe University",
      type: "TECHNICAL_SKILL",
      icon: <BarChart3 className="text-emerald-400" size={20} />,
      metric: "CIS 310 // Completed",
      desc: "Gained hands-on expertise in relational databases, SQL query development, normalization, and database design by completing the Student Management System Database project."
    },
    {
      title: "LeetCode & HackerRank Practice",
      provider: "Independent Learning",
      type: "ONGOING",
      icon: <BookOpen className="text-purple-400" size={20} />,
      metric: "Active_Practitioner",
      desc: "Continuously solving algorithmic and data structure challenges on LeetCode and HackerRank to sharpen problem-solving and coding efficiency."
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(data.length / itemsPerPage)

  return (
    <section id="achievements" className="py-24 relative bg-[#020202] overflow-hidden font-mono">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#10b98105_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-emerald-500 pl-6"
        >
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Terminal size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Achievement_Log_v2.0</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Verified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-100 italic">Benchmarks.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#050505] rounded-lg overflow-hidden min-h-[450px]">
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-8 border-r border-white/10 last:border-r-0 hover:bg-emerald-500/[0.02] transition-all"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-emerald-500/50 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{item.type}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    <span className="text-xs font-black text-emerald-500 tracking-tighter">{item.metric}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed font-sans">{item.desc}</p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between opacity-30">
                  <span className="text-[8px] uppercase">{item.provider}</span>
                  <Cpu size={12} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-transparent to-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-500 ${currentPage === i + 1 ? 'w-12 bg-emerald-500' : 'w-4 bg-white/10'}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-4 rounded-full border border-white/10 text-white hover:border-emerald-500/50 disabled:opacity-10 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-4 rounded-full bg-emerald-600 text-black hover:bg-emerald-400 disabled:opacity-10 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Achievements