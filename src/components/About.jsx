import React from 'react'
import { Code2, Globe, Cpu, Terminal } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50 transition-colors duration-500">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-slate-100">
        <span className="border-b-4 border-teal-500 pb-2">About Me</span>
      </h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-lg p-1">
             <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800" 
              alt="Workspace" 
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500 w-full shadow-lg"
            />
          </div>
        </div>
        
        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
          <p>
            Hello! My name is Dhiraj and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was delightful!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Code2 size={20} className="text-teal-500 dark:text-teal-400" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-teal-500 dark:text-teal-400" />
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={20} className="text-teal-500 dark:text-teal-400" />
              <span>Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={20} className="text-teal-500 dark:text-teal-400" />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About