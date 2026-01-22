import React from 'react'
import { projects } from '../data/data-projects'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800/30 transition-colors duration-500">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl group reveal-on-scroll opacity-0 translate-y-10"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <div className="flex gap-4">
                  <a href={project.github} className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
        <button className="px-8 py-3 border border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-500/10 transition-colors font-medium">
          View Full Project Archive
        </button>
      </div>
    </div>
  </section>
  )
}

export default Projects