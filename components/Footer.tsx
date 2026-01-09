
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
              Open to high-impact opportunities where I can apply my 3.5 years of full-stack expertise to solve complex challenges.
            </p>
            <div className="flex gap-4">
              {[
                { icon: 'fa-github', link: PERSONAL_INFO.github },
                { icon: 'fa-linkedin', link: PERSONAL_INFO.linkedin },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm"
                >
                  <i className={`fa-brands ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-end text-right">
             <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-black">Connect via</p>
             <p className="text-slate-900 font-bold text-lg">{PERSONAL_INFO.email}</p>
             <p className="text-slate-400 text-xs mt-4 uppercase tracking-widest">{PERSONAL_INFO.location}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Balasubramanian. Engineered for performance.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-black">
            <span className="text-slate-300">React</span>
            <span className="text-slate-300">Tailwind</span>
            <span className="text-slate-300">Gemini AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;