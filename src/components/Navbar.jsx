import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Home, User, Briefcase,
  Code2, GraduationCap, MessageSquare,
  Terminal, Cpu, Sun, Moon, Download
} from 'lucide-react'
import ResumeFile from '../assets/Parthib_Resume.pdf'

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#schoolwork', label: 'School Work', icon: Code2 }, // নতুন অ্যাড হলো
  { href: '#career', label: 'Career', icon: Briefcase },      // নতুন অ্যাড হলো
  { href: '#projects', label: 'Works', icon: Terminal },
  { href: '#education', label: 'Edu', icon: GraduationCap },
  { href: '#contact', label: 'Contact', icon: MessageSquare }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? 'py-2 px-4' : 'py-6 px-8'
      }`}
    >
      <nav className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 rounded-lg overflow-hidden
        ${scrolled
          ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border border-black/5 dark:border-white/10 px-6 py-2 shadow-2xl'
          : 'bg-transparent border border-transparent'}`}>

        {/* Logo */}
        <div
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-emerald-500/50 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-0 border border-black/20 dark:border-white/20 -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
            <span className="text-black dark:text-white font-black text-xs tracking-tighter"><strong>P</strong></span>
          </div>
          <div className="flex flex-col border-l border-black/10 dark:border-white/10 pl-4">
            <span className="text-sm font-bold tracking-[0.2em] text-black dark:text-white">PARTHIB<span className="text-emerald-500">.</span>IT</span>
            <div className="flex items-center gap-2">
               <Cpu size={10} className="text-emerald-500 animate-pulse" />
               <span className="text-[8px] uppercase tracking-[0.1em] text-black/40 dark:text-white/40">CIS STUDENT</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="relative px-5 py-3 group transition-all duration-200"
            >
              <span className={`relative z-10 text-[9px] font-bold uppercase tracking-[0.2em] transition-colors
                ${activeSection === item.href.substring(1)
                  ? 'text-emerald-500'
                  : 'text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white'}`}>
                {item.label}
              </span>
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
              )}
            </button>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-emerald-500/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Desktop: CV Download + Contact Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href={ResumeFile}
            download="Parthib_Roy_Resume.pdf"
            whileHover={{ backgroundColor: "rgba(16, 185, 129, 1)", color: "#000" }}
            className="flex items-center gap-3 border border-emerald-500/50 px-4 py-2 rounded-sm text-emerald-500 transition-all font-mono text-[10px]"
          >
            <Download size={12} />
            DOWNLOAD_CV
          </motion.a>

          <motion.button
            whileHover={{ backgroundColor: "rgba(16, 185, 129, 1)", color: "#000" }}
            onClick={() => handleNavClick('#contact')}
            className="flex items-center gap-3 border border-emerald-500/50 px-4 py-2 rounded-sm text-emerald-500 transition-all font-mono text-[10px]"
          >
            <Terminal size={12} />
            EXECUTE_CONTACT
          </motion.button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={toggleTheme} className="text-black/50 dark:text-white/50">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-black/50 dark:text-white/50 hover:text-emerald-500 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-[#080808] border-l border-black/10 dark:border-white/10 z-[9999] lg:hidden p-10 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-4 group"
                    >
                      <Icon size={18} className={activeSection === item.href.substring(1) ? 'text-emerald-500' : 'text-black/20 dark:text-white/20'} />
                      <span className={`text-xs font-bold tracking-widest uppercase ${activeSection === item.href.substring(1) ? 'text-black dark:text-white' : 'text-black/40 dark:text-white/40'}`}>
                        {item.label}
                      </span>
                    </button>
                  )
                })}

                {/* Mobile CV Download - FIXED HERE */}
                <a
                  href={ResumeFile}
                  download="Parthib_Roy_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 group"
                >
                  <Download size={18} className="text-emerald-500" />
                  <span className="text-xs font-bold tracking-widest uppercase text-black dark:text-white">
                    Download CV
                  </span>
                </a>
              </div>

              <div className="mt-auto border-t border-black/5 dark:border-white/5 pt-6">
                <p className="text-[8px] text-black/20 dark:text-white/20 tracking-widest uppercase mb-4">Core V.2026.12</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar