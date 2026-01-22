import React from 'react'
import { skills } from '../data/data-skills'
import { Code2 } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Technical Proficiency</h2>
              <p className="text-slate-600 dark:text-slate-400">The tools and technologies I use to bring ideas to life</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all group text-center shadow-sm hover:shadow-md reveal-on-scroll opacity-0 translate-y-10"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                    <Code2 className="text-teal-600 dark:text-teal-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Skills