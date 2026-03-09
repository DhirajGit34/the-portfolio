import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/DhirajGit34" target='_blank' className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><Github size={20} /></a>
          <a href="https://tinyurl.com/y3nndvz3" target='_blank' className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:dhirajdeka36@gmail.com" target='_blank' className="text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><Mail size={20} /></a>
        </div>
        <p className="text-slate-500 dark:text-slate-600 text-sm">
          Designed & Built by Dhiraj &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer