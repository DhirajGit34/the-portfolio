import React, { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Hero from './Hero';

const Navbar = ({ toggleTheme, darkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [_activeSection, setActiveSection] = useState('home');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= 300;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
                        Dhiraj.dev
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-teal-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform hover:scale-110"
                            aria-label="Toggle Theme"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col space-y-4 shadow-xl">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-left text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 py-2 font-medium"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
            < Hero scrollToSection={scrollToSection} />
        </>
    )
}

export default Navbar