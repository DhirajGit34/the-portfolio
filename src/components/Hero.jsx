import React from 'react'
import { Github, Linkedin, Mail, ArrowRight,ChevronDown } from 'lucide-react'

const Hero = ({scrollToSection}) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Background blobs */}
    <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
      <div className="md:flex items-center justify-between">
        <div className="md:w-1/2 space-y-6 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-teal-600 dark:text-teal-400 text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-slate-100">
            Building digital <br />
            <span className="bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 dark:from-teal-400 dark:via-blue-500 dark:to-purple-600 bg-clip-text text-transparent">
              experiences
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I'm a Full Stack Developer specializing in building exceptional digital products. I focus on accessible, human-centered products.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white dark:text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-teal-500/25"
            >
              View Work <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 font-medium rounded-lg transition-all hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-8 text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors transform hover:scale-110"><Github size={24} /></a>
            <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors transform hover:scale-110"><Mail size={24} /></a>
          </div>
        </div>

        {/* Abstract Code Visual */}
        <div className="hidden md:block md:w-1/2 pl-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-teal-500/10">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex">
                <span className="text-purple-400 mr-2">const</span>
                <span className="text-blue-400 mr-2">Developer</span>
                <span className="text-slate-400">=</span>
                <span className="text-slate-400 text-opacity-50 ml-2">{`{`}</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-300 mr-2">name:</span>
                <span className="text-green-400">'Dhiraj'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-300 mr-2">role:</span>
                <span className="text-green-400">'Full Stack Engineer'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-300 mr-2">skills:</span>
                <span className="text-slate-400">[</span>
                <span className="text-green-400">'React'</span>,
                <span className="text-green-400">'Node'</span>,
                <span className="text-green-400">'AWS'</span>
                <span className="text-slate-400">]</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-300 mr-2">hardWorker:</span>
                <span className="text-yellow-400">true</span>
              </div>
              <div className="text-slate-400 text-opacity-50">{`}`}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <ChevronDown className="text-slate-400 dark:text-slate-500" size={32} />
      </div>
    </div>
  </section>
  )
}

export default Hero