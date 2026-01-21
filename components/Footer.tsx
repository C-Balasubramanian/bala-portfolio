
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Let's build something <br /><span className="gradient-text">exceptional.</span></h2>
            <p className="text-slate-500 mb-8">
              Open to high-impact opportunities where I can apply my 3.7 years of full-stack expertise to solve complex challenges.
            </p>
            <div className="flex gap-4">
              {[
                { icon: 'fa-github', link: PERSONAL_INFO.github },
                { icon: 'fa-linkedin', link: PERSONAL_INFO.linkedin },
                { icon: 'fa-instagram', link: PERSONAL_INFO.instagram },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm text-slate-600"
                >
                  <i className={`fa-brands ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
             <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-black">Connect via</p>
             
             {/* Email */}
             <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-4 mb-5 transition-all md:hover:-translate-x-2">
               <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0 order-1 md:order-2">
                 <i className="fa-solid fa-envelope text-lg"></i>
               </div>
               <div className="text-left md:text-right order-2 md:order-1">
                  <span className="block text-slate-900 font-bold text-base md:text-lg group-hover:text-blue-600 transition-colors break-all">{PERSONAL_INFO.email}</span>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Email Address</span>
               </div>
             </a>

             {/* Phone */}
             <a href={`tel:${PERSONAL_INFO.phone}`} className="group flex items-center gap-4 transition-all md:hover:-translate-x-2">
               <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0 order-1 md:order-2">
                 <i className="fa-solid fa-phone text-lg"></i>
               </div>
               <div className="text-left md:text-right order-2 md:order-1">
                  <span className="block text-slate-900 font-bold text-base md:text-lg group-hover:text-blue-600 transition-colors">{PERSONAL_INFO.phone}</span>
                   <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Phone Number</span>
               </div>
             </a>

             <div className="mt-8 flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest self-start md:self-end">
               <span className="md:hidden"><i className="fa-solid fa-location-dot text-blue-600 mr-1"></i></span>
               {PERSONAL_INFO.location}
               <span className="hidden md:inline"><i className="fa-solid fa-location-dot text-blue-600 ml-1"></i></span>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Balasubramanian. Engineered for performance.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-black">
            <span className="text-slate-300">React</span>
            <span className="text-slate-300">Tailwind</span>
            {/* <span className="text-slate-300">Gemini AI</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
