import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript,
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiFigma, SiPostman
} from 'react-icons/si'
import { FaGitAlt, FaGithub } from 'react-icons/fa'
import { BiLogoVisualStudio } from 'react-icons/bi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const frontendSkills = [
    { name: 'HTML5', level: 80, icon: SiHtml5, color: 'text-[#E34F26]' },
    { name: 'CSS3', level: 75, icon: SiCss3, color: 'text-[#1572B6]' },
    { name: 'Tailwind CSS', level: 70, icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'JavaScript', level: 70, icon: SiJavascript, color: 'text-[#F7DF1E]' },
    { name: 'React', level: 65, icon: SiReact, color: 'text-[#61DAFB]' },
  ]

  const backendSkills = [
    { name: 'Node.js', level: 55, icon: SiNodedotjs, color: 'text-[#339933]' },
    { name: 'MongoDB', level: 55, icon: SiMongodb, color: 'text-[#47A248]' },
    { name: 'Express.js', level: 50, icon: SiExpress, color: 'text-gray-400' }
  ]

  const tools = [
    { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]' },
    { name: 'GitHub', icon: FaGithub, color: 'text-white' },
    { name: 'VS Code', icon: BiLogoVisualStudio, color: 'text-[#007ACC]' },
    { name: 'Figma', icon: SiFigma, color: 'text-[#F24E1E]' },
    { name: 'Postman', icon: SiPostman, color: 'text-[#FF6C37]' }
  ]
  
  const allSkills = [...frontendSkills, ...backendSkills, ...tools]

  const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{ y: -5 }}
        className="bg-white/10 p-6 rounded-3xl border border-white/20 hover:border-blue-400/60 hover:bg-white/20 backdrop-blur-xl transition-all duration-500 shadow-xl hover:shadow-blue-500/20"
      >
        <div className="flex items-center gap-4">
          <div className={`text-4xl p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all ${skill.color}`}>
            <Icon />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-3">
              <span className="font-bold text-white text-lg">{skill.name}</span>
              <span className="text-blue-400 text-sm font-bold bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-xl overflow-hidden border border-white/30">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "circOut" }}
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-[0_0_10px_rgba(96,165,250,0.5)]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Expertise</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full shadow-lg" />
        </motion.div>

        {/* Frontend */}
        <div className="mb-16">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold mb-10 text-white/80 border-l-4 border-blue-500 bg-blue-500/10 pl-6 py-4 rounded-r-xl"
          >
            Frontend Development
          </motion.h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-24">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-bold mb-10 text-white/80 border-l-4 border-emerald-500 bg-emerald-500/10 pl-6 py-4 rounded-r-xl"
          >
            Backend & Database
          </motion.h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendSkills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
          </div>
        </div>

        {/* Marquee */}
        <div className="py-12 mb-20 border-y border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div key={index} className="flex items-center gap-6 group/item">
                <div className="p-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm group-hover/item:border-blue-400/50 transition-all">
                  <skill.icon className={`text-5xl ${skill.color} opacity-40 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-700`} />
                </div>
                <span className="text-white/30 group-hover/item:text-white/70 text-lg font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div className="text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl font-bold mb-16 text-white/70 border-l-4 border-purple-500 bg-purple-500/10 pl-6 py-4 rounded-r-xl"
          >
            Tools & Environment
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-12">
            {tools.map((tool, index) => {
              const ToolIcon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1 + 0.8
                  }}
                  whileHover={{ scale: 1.2 }}
                  className="p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-purple-400/60 hover:bg-white/20 shadow-xl transition-all group"
                >
                  <div className={`text-6xl p-5 rounded-xl bg-white/20 group-hover:bg-white/30 transition-all mb-4 ${tool.color}`}>
                    <ToolIcon />
                  </div>
                  <span className="text-sm uppercase tracking-widest text-white/70 font-bold">
                    {tool.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
