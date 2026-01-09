
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 blur-[100px] md:blur-[120px] rounded-full animate-float"></div>
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-purple-100/40 blur-[100px] md:blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1.5 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-widest">
            {PERSONAL_INFO.experience_years} Years of Experience
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tight text-slate-900">
            Elevating Ideas Into <br className="hidden sm:block" />
            <span className="gradient-text">Digital Reality.</span>
          </h1>
          
          <p className="max-w-2xl text-base md:text-xl text-slate-500 mb-8 md:mb-12 leading-relaxed px-4">
            I'm <span className="text-slate-900 font-semibold">Balasubramanian</span>, a {PERSONAL_INFO.role} architecting robust backends and delightful AI-driven frontends using <span className="text-blue-600 font-semibold">Microsoft Azure</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 active:scale-95">
              Explore My Work
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 text-slate-900">
             <i className="fa-brands fa-react text-4xl md:text-5xl" title="React"></i>
             <i className="fa-brands fa-node-js text-4xl md:text-5xl" title="Node.js"></i>
             <i className="fa-brands fa-microsoft text-4xl md:text-5xl" title="Azure"></i>
             <i className="fa-brands fa-docker text-4xl md:text-5xl" title="Docker"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
