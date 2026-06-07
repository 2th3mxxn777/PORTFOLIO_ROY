import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Navigation2 } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled more than 300px
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 }) 
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-[99999] pointer-events-none"
        >
          <div className="relative group pointer-events-auto">
            {/* Drafting Brackets (Technical Blueprint Style) */}
            <div className="absolute -inset-2 border-x border-[#003366]/20 pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#003366]" />
              <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-[#003366]" />
            </div>

            <motion.button
              whileHover={{ y: -5, backgroundColor: "#003366", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex flex-col items-center gap-1 px-4 py-3 bg-white border-2 border-[#003366] text-[#003366] shadow-[6px_6px_0px_#00336620] transition-all duration-300"
            >
              <Navigation2 size={16} fill="currentColor" className="rotate-0 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">Top_Level</span>
              
              {/* Animated Progress Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-[1px] bg-cyan-500 mt-1"
              />
            </motion.button>

            {/* Coordinate Label */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:block">
              <p className="text-[7px] font-mono text-slate-400 uppercase rotate-90 origin-left tracking-widest">
                Elev: 0.00m
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop