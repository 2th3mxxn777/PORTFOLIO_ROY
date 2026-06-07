import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Database, Brain, Network, 
  Terminal, GraduationCap, Trophy,
  Users, Code2
} from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const coreFocus = [
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Designing relational databases, writing SQL queries, and building data-driven applications.',
      delay: 0
    },
    {
      icon: Network,
      title: 'Networking & CCNA',
      description: 'Router configuration, VLANs, wireless technologies, and enterprise network security.',
      delay: 0.1
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Building applications with Python, Java, C++, and web technologies.',
      delay: 0.2
    }
  ]

  return (
    <section id="about" className="py-24 bg-[#020202]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <span className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Discovery</span>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">ABOUT ME.</h3>
          <div className="w-12 h-[2px] bg-emerald-500 mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                <GraduationCap className="text-emerald-500" /> Academic Profile
              </h4>
              <p className="text-white/50 leading-relaxed text-lg font-light">
                I am <span className="text-white font-medium">Parthib Roy</span>, a 7th-semester Computer Information Sciences student at <span className="text-white border-b border-emerald-500/30">Monroe University, Bronx, New York</span>. I am building a strong foundation in programming, database management, networking, and IT project management.
              </p>
              <p className="text-white/50 leading-relaxed text-lg font-light">
                My goal is to pursue a career in <span className="text-white italic">Information Technology management</span> — combining technical expertise, leadership skills, and problem-solving abilities to help organizations achieve their technology objectives.
              </p>
            </div>

            <div className="flex gap-10 pt-4">
               <div>
                  <p className="text-3xl font-black text-white">7th</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Semester</p>
               </div>
               <div>
                  <p className="text-3xl font-black text-white">2026</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Expected Grad</p>
               </div>
               <div>
                  <p className="text-3xl font-black text-white">CIS</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">Department</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 bg-white/[0.02] p-8 rounded-sm border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl" />
            
            <h4 className="text-xl font-bold mb-8 text-white uppercase tracking-widest">
              Beyond the Console
            </h4>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-5">
                <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Trophy className="text-emerald-500" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-wide">Problem Solver</h5>
                  <p className="text-white/40 text-xs leading-relaxed mt-1">
                    Actively practicing on <span className="text-white/60">LeetCode & HackerRank</span> to sharpen algorithmic and data structure skills.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                  <Brain className="text-cyan-500" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-wide">Continuous Learner</h5>
                  <p className="text-white/40 text-xs leading-relaxed mt-1">
                    Exploring emerging technologies, system design patterns, and new development tools independently.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Users className="text-white/40" size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-wide">Career Goals</h5>
                  <p className="text-white/40 text-xs leading-relaxed mt-1">
                    Seeking an internship or entry-level IT role to grow into <span className="text-white/60">IT management and leadership</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreFocus.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: item.delay + 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white/[0.03] p-10 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-emerald-500" size={28} />
                </div>
                <h4 className="font-bold mb-3 text-white uppercase tracking-tighter text-lg">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About