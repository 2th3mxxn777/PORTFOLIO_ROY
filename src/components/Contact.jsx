import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Send, Mail, MapPin, Github, Linkedin, Phone,
  CheckCircle2, Cpu, Award, Zap
} from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/parthib-roy', color: 'hover:text-emerald-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/parthib-roy', color: 'hover:text-cyan-400' },
    { name: 'Phone', icon: Phone, url: 'tel:3474407228', color: 'hover:text-blue-400' },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 relative min-h-screen flex items-center bg-[#030712] overflow-hidden font-sans">
      
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-emerald-600/20 blur-[140px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-blue-600/20 blur-[160px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-emerald-500/50" />
            <span className="text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase">
              Connection_Portal
            </span>
            <div className="h-[1px] w-8 bg-emerald-500/50" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">Touch.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
              <Zap size={14} fill="currentColor" /> Open to Internships & Opportunities
            </div>
            
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Building the <br /> 
              Future of IT.
            </h3>

            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              Available for internships and entry-level IT positions. Reach out to start a conversation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {[
                { label: "Monroe Univ.", icon: Award },
                { label: "CIS Student", icon: Cpu },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/10 transition-colors">
                  <item.icon className="text-emerald-400" size={18} />
                  <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-8 items-center pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-all duration-300 ${social.color}`}
                  title={social.name}
                >
                  <social.icon size={26} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10" />
              
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 text-emerald-400 font-bold hover:underline uppercase text-xs tracking-widest">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input
                    name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600"
                    placeholder="Your Full Name"
                  />
                  <input
                    name="email" type="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600"
                    placeholder="Your Email Address"
                  />
                  <textarea
                    name="message" rows="4" value={formData.message} onChange={handleInputChange} required
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-emerald-500 outline-none transition-all text-white placeholder-gray-600 resize-none"
                    placeholder="Your Message..."
                  />
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#030712] font-black rounded-2xl uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-center text-[10px] text-gray-500 font-mono tracking-tighter uppercase">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-emerald-500" /> parthib31416@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-blue-500" /> Ozone Park, New York
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact