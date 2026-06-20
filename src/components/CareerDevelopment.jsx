import { motion } from 'framer-motion'
import { Briefcase, Terminal, Cpu, Settings } from 'lucide-react'

const CareerDevelopment = () => {
  const internships = [
    {
      role: "ServiceNow Student Learning Externship",
      company: "ServiceNow | Virtual Externship",
      period: "June 2026 – Present",
      description: "Participating in a hands-on ServiceNow Student Learning Externship focused on IT Service Management (ITSM), workflow automation, digital transformation, and enterprise platform administration. Gaining practical experience through real-world exercises, platform configuration, incident management, service catalog administration, knowledge management, dashboards, and workflow optimization.",
      highlights: [
        "Configured and customized ServiceNow instances using the Next Experience user interface.",
        "Created, managed, and updated Incident records following ITSM best practices.",
        "Utilized list views, filters, sorting, and bulk update capabilities to improve operational efficiency.",
        "Designed and managed Visual Task Boards (VTBs) to track and organize service requests.",
        "Processed Service Catalog requests and explored request fulfillment workflows.",
        "Developed dashboards and visual reports to monitor incident trends and service performance.",
        "Created and maintained Knowledge Base articles to support end-user self-service.",
        "Used Virtual Agent functionality to automate support interactions and improve user experience.",
        "Applied workflow automation concepts to streamline business processes and improve productivity.",
        "Gained experience with platform navigation, user personalization, data management, and reporting tools.",
        "Collaborated in a virtual learning environment while completing practical platform administration exercises."
      ],
      skills: ["ServiceNow Platform Administration", "IT Service Management (ITSM)", "Incident Management", "Service Catalog Management", "Knowledge Management", "Dashboard & Report Creation", "Workflow Automation", "Business Process Improvement"]
    }
  ]

  const workExperience = [
    {
      role: "Information Technology Support Specialist",
      company: "Various Academic, Project-Based, and Technical Support Environments",
      period: "Technical Support History",
      description: "Provided technical support and troubleshooting assistance for hardware, software, operating systems, and network-related issues. Assisted users in resolving technical problems while maintaining system functionality and ensuring efficient operations.",
      highlights: [
        "Diagnosed and resolved hardware, software, and connectivity issues.",
        "Assisted users with Windows operating systems, software installations, and account management.",
        "Utilized command-line tools and PowerShell for system administration tasks.",
        "Performed network troubleshooting and basic cybersecurity assessments.",
        "Supported Active Directory user account management and access control activities.",
        "Documented technical issues and maintained accurate support records.",
        "Assisted with remote troubleshooting and user support activities.",
        "Participated in software testing and validation activities using structured testing procedures.",
        "Supported database-related projects involving SQL queries, database design, and normalization concepts.",
        "Applied cybersecurity principles to help maintain secure computing environments."
      ],
      skills: ["Windows Administration", "Active Directory", "PowerShell", "Command Prompt (CMD)", "SQL & Database Management", "Network Troubleshooting", "Cybersecurity Fundamentals", "Remote Desktop Support"]
    }
  ]

  return (
    <section id="career" className="py-24 bg-[#050505] text-white font-sans relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-emerald-500 pl-6"
        >
          <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono">
            <Terminal size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Career_Development_v3.0</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 italic">Experience.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* INTERNSHIP SECTION */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-3 mb-6">
              <Settings size={18} className="animate-spin-slow" /> Internship Experience
            </h3>
            
            {internships.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{exp.role}</h4>
                  <div className="flex justify-between items-center text-xs text-white/40 mt-1 font-mono">
                    <span>{exp.company}</span>
                    <span className="text-emerald-500">{exp.period}</span>
                  </div>
                </div>

                <p className="text-white/50 text-xs leading-relaxed mb-6 font-light">{exp.description}</p>

                <div className="space-y-2 mb-6">
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider block">Key Responsibilities:</span>
                  <ul className="space-y-2 pl-1">
                    {exp.highlights.slice(0, 5).map((bullet, i) => (
                      <li key={i} className="text-white/75 text-xs leading-relaxed flex items-start gap-2 font-light">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-white/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WORK EXPERIENCE SECTION */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-3 mb-6">
              <Briefcase size={18} /> Work Experience
            </h3>

            {workExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                  <div className="flex justify-between items-center text-xs text-white/40 mt-1 font-mono">
                    <span className="max-w-[200px] md:max-w-none truncate">{exp.company}</span>
                    <span className="text-cyan-500 shrink-0">{exp.period}</span>
                  </div>
                </div>

                <p className="text-white/50 text-xs leading-relaxed mb-6 font-light">{exp.description}</p>

                <div className="space-y-2 mb-6">
                  <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider block">Core Responsibilities:</span>
                  <ul className="space-y-2 pl-1">
                    {exp.highlights.slice(0, 5).map((bullet, i) => (
                      <li key={i} className="text-white/75 text-xs leading-relaxed flex items-start gap-2 font-light">
                        <span className="w-1 h-1 rounded-full bg-cyan-500 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-[9px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-white/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default CareerDevelopment