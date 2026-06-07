import { motion } from 'framer-motion'
import { Terminal, ShieldCheck, Cpu, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialNodes = [
    { label: 'GitHub', url: 'https://github.com/parthib-roy', icon: Github },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/parthib-roy', icon: Linkedin },
    { label: 'Email', url: 'mailto:parthib31416@gmail.com', icon: Mail }
  ]

  return (
    <footer className="relative py-16 bg-[#050505] border-t border-emerald-500/10 overflow-hidden font-sans">
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase italic group-hover:not-italic transition-all duration-500 cursor-default">
                PARTHIB<span className="text-emerald-500">.</span>IT
              </h2>
              <div className="h-0.5 w-12 bg-emerald-500 mt-1 group-hover:w-24 transition-all duration-500" />
            </motion.div>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] leading-relaxed">
              Aspiring IT Professional <br /> 
              Monroe University // CIS
            </p>
          </div>

          <div className="flex justify-center md:justify-center items-center gap-6">
            {socialNodes.map((node, i) => (
              <motion.a
                key={i}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 transition-all">
                  <node.icon size={20} className="text-white/40 group-hover:text-emerald-500" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-white/20 group-hover:text-white/60 transition-colors">
                  {node.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-end gap-4 text-right">
            <div className="flex items-center gap-3 text-emerald-500/50">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-mono uppercase tracking-widest">Status: Active_Student</span>
            </div>
            
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">
                Registry: Monroe_University // Dept_CIS
              </p>
              <div className="flex items-center justify-end gap-2 text-white/40 text-[11px] font-bold uppercase tracking-tight">
                <span>© {currentYear}</span>
                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                <span className="flex items-center gap-2">
                  Built by <span className="text-white hover:text-emerald-400 transition-colors">Parthib Roy</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4 opacity-10 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-1000">
          <div className="flex items-center gap-2 text-[8px] font-mono text-white uppercase tracking-[0.5em]">
            <Terminal size={10} /> Kernel: 2026.STABLE.PARTHIB
          </div>
          <div className="flex items-center gap-2 text-[8px] font-mono text-white uppercase tracking-[0.5em]">
            <Cpu size={10} /> Architecture: CIS_Systems_V1
          </div>
          <div className="text-[8px] font-mono text-white uppercase tracking-[0.5em]">
            Status: Seeking_Opportunities
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer