import React, { useRef } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_m0jy91i',    // Paste your Service ID here
        'template_no6mn1l',   // Paste your Template ID here
        form.current,         // This passes the form data
        {
          publicKey: 'F8hwJdxV56X9Am-4X', // Paste your Public Key here
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!');
          e.target.reset(); // Clears the form after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send the message, please try again.');
        },
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 text-teal-500 dark:text-teal-400">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold mb-1 text-slate-900 dark:text-slate-100">Email</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">hello@dhiraj.dev</p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 text-teal-500 dark:text-teal-400">
              <Linkedin size={24} />
            </div>
            <h3 className="font-semibold mb-1 text-slate-900 dark:text-slate-100">LinkedIn</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">/in/dhirajdev</p>
          </div>

          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 text-teal-500 dark:text-teal-400">
              <Github size={24} />
            </div>
            <h3 className="font-semibold mb-1 text-slate-900 dark:text-slate-100">GitHub</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">@dhirajcode</p>
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} className="max-w-xl mx-auto text-left space-y-4 bg-white dark:bg-slate-800/30 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg reveal-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium  text-slate-700 dark:text-slate-300">Name</label>
              <input type="text" name="user_name" required className="w-full  bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors text-slate-900 dark:text-slate-200" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
              <input type="email" name="user_email" required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors text-slate-900 dark:text-slate-200" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea rows="4" name='message' required className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors text-slate-900 dark:text-slate-200 resize-none" placeholder="Let's build something together..."></textarea>
          </div>
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white dark:text-slate-900 font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 transform hover:scale-[1.02]">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact