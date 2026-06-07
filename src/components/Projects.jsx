import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Terminal, Cpu, Database, Binary, ArrowUpRight, Activity, Waves } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projectRegistry = [
    {
      title: 'Student Management System',
      id: 'NODE_01',
      category: 'Database Engineering',
      description: 'A database-driven application to manage student records. Implements full CRUD operations using structured data handling and database integration for improved data organization and retrieval efficiency.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'MySQL', 'CRUD', 'Data_Structures'],
      githubUrl: 'https://github.com/parthib-roy',
      icon: <Database size={20} />,
      status: 'Stable_Build'
    },
    {
      title: 'Personal Portfolio Website',
      id: 'NODE_02',
      category: 'Web Development',
      description: 'A responsive personal website showcasing technical projects and skills. Built with HTML, CSS, and JavaScript, focused on clean design, accessibility, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      githubUrl: 'https://github.com/parthib-roy',
      icon: <Activity size={20} />,
      status: 'In_Progress'
    },
    {
      title: 'Command-Line Utilities',
      id: 'NODE_03',
      category: 'Software Engineering',
      description: 'Small-scale Python and C++ applications to automate basic tasks. Focused on algorithmic thinking, problem-solving, debugging, and code optimization techniques.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'C++', 'Algorithms', 'CLI'],
      githubUrl: 'https://github.com/parthib-roy',
      icon: <Terminal size={20} />,
      status: 'Stable_Build'
    },
    {
      title: 'Network Configuration Labs',
      id: 'NODE_04',
      category: 'Networking // CCNA',
      description: 'Hands-on CCNA lab exercises covering router configuration, VLAN design, network troubleshooting, and enterprise network security setups.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      technologies: ['CCNA', 'VLANs', 'Routing', 'Security'],
      githubUrl: 'https://github.com/parthib-roy',
      icon: <Binary size={20} />,
      status: 'Lab_Complete'
    }
  ]

  return (
    <section id="projects" className="py-24 relative bg-[#030303] overflow-hidden font-sans" ref={ref}>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b98105_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            <Waves size={12} className="animate-pulse" /> Live_Project_Nodes
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
            System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">Portfolio.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectRegistry.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ rotateX: -5, rotateY: 5, translateZ: 20 }}
              className="group relative h-[500px] bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl text-emerald-500">
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest">{project.id}</p>
                    <p className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">{project.status}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-[0.2em]">{project.category}</span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mt-1 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[8px] font-black text-white/30 bg-white/5 px-3 py-1.5 rounded-md border border-white/5 uppercase tracking-widest group-hover:border-emerald-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors"
                    >
                      <Github size={14} /> Source_Code <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-emerald-500/20 z-20 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects