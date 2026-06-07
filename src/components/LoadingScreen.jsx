import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiPython, SiReact, SiMysql, SiJavascript, SiCplusplus } from 'react-icons/si'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const statusMessages = [
    "Monroe University CIS Online",
    "Loading Portfolio Data",
    "Projects Initialized",
    "System Ready"
  ]

  const techStack = [
    { icon: SiCplusplus, name: 'C++', color: 'text-[#00599C]' },
    { icon: SiPython, name: 'Python', color: 'text-[#3776AB]' },
    { icon: SiReact, name: 'React', color: 'text-[#61DAFB]' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-[#F7DF1E]' },
    { icon: SiMysql, name: 'MySQL', color: 'text-[#4479A1]' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1.5
        } else {
          setIsComplete(true)
          setTimeout(() => { onComplete() }, 1000)
          return 100
        }
      })
    }, 100)
    return () => clearInterval(timer)
  }, [onComplete])

  useEffect(() => {
    const newIndex = Math.floor((progress / 100) * (statusMessages.length - 1))
    if (newIndex !== statusIndex) setStatusIndex(newIndex)
  }, [progress, statusIndex])

  const radius = 90
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  if (isComplete) return null

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0a0a1a] via-black to-[#1a0a2e] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      {Array.from({length: 40}).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-emerald-500/30 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="relative flex flex-col items-center justify-center p-8 max-w-4xl">
        <div className="relative flex items-center justify-center mb-16">
          <svg className="w-72 h-72 md:w-96 md:h-96 -rotate-90 absolute z-0" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981"/>
                <stop offset="50%" stopColor="#06B6D4"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r={radius + 15} fill="transparent" stroke="url(#circleGradient)" strokeWidth="3" strokeDasharray="12, 12" className="drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
            <motion.circle cx="200" cy="200" r={radius} fill="transparent" stroke="url(#circleGradient)" strokeWidth="4" strokeDasharray={circumference} strokeLinecap="round" animate={{ strokeDashoffset }} className="drop-shadow-[0_0_30px_rgba(16,185,129,0.7)]" transition={{ duration: 1.2, ease: "easeOut" }} />
            <motion.circle cx="200" cy="200" r="45" fill="none" stroke="#10B981" strokeWidth="2" className="opacity-25" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </svg>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-20 text-center px-8"
          >
            <div className="flex flex-col items-center gap-3">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl uppercase tracking-[0.4em] text-white/50 font-mono"
              >
                Monroe University CIS
              </motion.span>
              
              <motion.h1 
                animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-5xl md:text-7xl font-black tracking-widest bg-gradient-to-r from-white via-emerald-50/80 to-white text-transparent bg-clip-text leading-tight drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]"
              >
                PARTHIB
              </motion.h1>
              
              <motion.div 
                animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="text-3xl md:text-4xl font-black tracking-[0.3em] bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_40px_rgba(16,185,129,0.8)]"
              >
                ROY
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl w-full px-4 mb-12">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 + 1.2 }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="group relative flex flex-col items-center p-5 bg-white/8 backdrop-blur-xl rounded-2xl border border-white/15 hover:border-emerald-400/60 hover:bg-white/15 shadow-xl transition-all duration-500"
              >
                <motion.div 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`text-3xl mb-3 p-3 rounded-xl bg-black/20 backdrop-blur-sm ${tech.color} group-hover:scale-110 transition-all duration-500`}
                >
                  <Icon />
                </motion.div>
                <span className="text-xs md:text-sm font-mono text-white/70 group-hover:text-white tracking-wider uppercase font-medium">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="w-96 md:w-[28rem] bg-black/40 backdrop-blur-2xl border border-white/20 rounded-3xl p-8"
        >
          <div className="h-14 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={statusMessages[statusIndex]}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-5 text-sm uppercase tracking-[0.3em] font-mono"
              >
                <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg animate-ping" />
                <span className="flex-1 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-light">
                  {statusMessages[statusIndex]}
                </span>
                <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-purple-400 rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-10">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl md:text-7xl font-mono font-black text-white/20 tracking-widest"
            >
              {Math.floor(progress)}<span className="text-emerald-400 text-5xl md:text-6xl">%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute bottom-6 right-6 flex flex-col items-end gap-4 p-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl text-sm"
      >
        <div className="flex items-center gap-3 text-right">
          <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} className="text-xl font-black text-emerald-400">
            7th
          </motion.div>
          <span className="text-xs uppercase tracking-wider text-white/60 font-mono">Semester</span>
        </div>
        <div className="flex items-center gap-3 text-right">
          <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.3, repeat: Infinity }} className="text-xl font-black text-cyan-400">
            Dec 2026
          </motion.div>
          <span className="text-xs uppercase tracking-wider text-white/60 font-mono">Graduation</span>
        </div>
        <div className="flex items-center gap-3 text-right">
          <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.6, repeat: Infinity }} className="text-xl font-black text-purple-400">
            Monroe
          </motion.div>
          <span className="text-xs uppercase tracking-wider text-white/60 font-mono">University</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen