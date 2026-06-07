import ParthibProfile from '../assets/Parthib.png'
import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { 
  Terminal, Binary, FlaskConical, Code2, 
  Cpu, Activity, Github, Linkedin, Mail 
} from 'lucide-react'

const Typewriter = ({ texts }) => {
  const textIndex = useMotionValue(0)
  const baseText = useTransform(textIndex, (latest) => texts[latest % texts.length] || "")
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest))

  useEffect(() => {
    const controls = animate(count, 50, {
      type: "tween",
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate: (latest) => {
        if (latest === 0) {
          textIndex.set((textIndex.get() + 1) % texts.length)
        }
      },
    })
    return controls.stop
  }, [count, textIndex, texts])

  return <motion.span className="text-emerald-600 dark:text-emerald-500 font-mono tracking-tight">{displayText}</motion.span>
}

const Hero = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/parthib-roy", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/parthib-roy", label: "LinkedIn" },
    { icon: Mail, href: "mailto:parthib31416@gmail.com", label: "Gmail" }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-[#050505] transition-colors duration-500 overflow-hidden relative font-sans">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 blur-[120px] rounded-full" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 border-x border-black/5 dark:border-white/5">
          
          <div className="lg:col-span-7 py-20 lg:pr-12 border-r border-black/5 dark:border-white/5">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-4 mb-12">
              <div className="h-[1px] w-12 bg-emerald-500" />
              <span className="text-[10px] font-black tracking-[0.6em] text-zinc-400 dark:text-white/40 uppercase">
                Core ID: PARTHIB.CIS
              </span>
            </motion.div>

            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <h1 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white leading-[0.85] tracking-tighter mb-8">
                IT & CIS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-400 dark:from-cyan-400 dark:to-blue-200">
                  ENGINEER.
                </span>
              </h1>

              <div className="flex items-center gap-4 mb-12">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-500">
                  <Terminal size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-light text-zinc-600 dark:text-white/60">
                  Aspiring <Typewriter texts={[
                    " IT Professional",
                    "Database Engineer",
                    "Network Specialist",
                    "Software Developer",
                    "Project Manager"
                  ]} />
                </h2>
              </div>

              <p className="text-zinc-500 dark:text-white/30 text-lg leading-relaxed max-w-xl mb-12 font-light transition-colors">
                Computer Information Sciences student at Monroe University, Bronx NY. 
                7th semester — building expertise in programming, databases, networking, 
                and IT project management.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#059669" }}
                  onClick={handleContactClick}
                  className="bg-emerald-600 text-white dark:text-black px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all"
                >
                  Get In Touch
                </motion.button>

                <div className="flex items-center gap-6 border-l border-black/10 dark:border-white/10 pl-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, color: "#059669" }}
                      className="text-zinc-400 dark:text-white/40 transition-colors flex flex-col items-center gap-1"
                      title={social.label}
                    >
                      <social.icon size={20} />
                      <span className="text-[7px] font-mono tracking-widest uppercase">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center py-20 bg-emerald-500/[0.01]">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="relative" style={{ width: '350px' }}>
              <div className="absolute -inset-6 border-x border-emerald-500/20 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-1 bg-emerald-500" />
                <div className="absolute bottom-0 right-0 w-4 h-1 bg-emerald-500" />
              </div>

              <div className="relative h-[500px] w-full group overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-black/5 dark:border-white/5 flex items-center justify-center" style={{ clipPath: "polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%)" }}>
                {/* Placeholder — replace src with Parthib's actual photo */}
                <img 
                  src={ParthibProfile} 
                  alt="Parthib Roy" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale brightness-90 dark:brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                />
                <motion.div animate={{ top: ['-10%', '110%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_15px_#10b981] z-20 opacity-40 group-hover:opacity-100" />
              </div>

              <motion.div whileHover={{ scale: 1.1, borderColor: "#10b981" }} className="absolute -right-8 top-12 z-40 bg-white dark:bg-black/90 border border-black/10 dark:border-emerald-500/30 p-3 backdrop-blur-md shadow-2xl transition-colors">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-emerald-600 dark:text-emerald-500" />
                  <div>
                    <p className="text-[7px] text-zinc-400 dark:text-white/40 leading-none mb-1 font-mono uppercase">CIS_Student</p>
                    <p className="text-xs font-black text-zinc-800 dark:text-white tracking-widest">Active</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="absolute -left-10 bottom-12 z-40 bg-white dark:bg-black/90 border border-black/10 dark:border-white/10 p-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-emerald-500 animate-pulse" />
                  <div>
                    <p className="text-[7px] text-zinc-400 dark:text-white/40 font-mono uppercase">Focus_Area</p>
                    <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-tighter">IT_Management</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-black/5 dark:border-white/5 py-10">
          {[
            { label: "Status", value: "7th_Semester", icon: Code2 },
            { label: "Focus", value: "IT & Databases", icon: FlaskConical },
            { label: "Registry", value: "Monroe_Univ_CIS", icon: Activity },
            { label: "Kernel", value: "2026.STABLE", icon: Binary }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2 px-8 border-r last:border-0 border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2 opacity-30 dark:opacity-20">
                <item.icon size={12} className="text-zinc-900 dark:text-white" />
                <span className="text-[9px] text-zinc-900 dark:text-white uppercase font-bold tracking-widest">{item.label}</span>
              </div>
              <span className="text-zinc-800 dark:text-white text-xs font-mono uppercase tracking-tighter">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero