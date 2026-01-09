
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { PROJECTS } from './constants';
import { Project } from './types';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900">Core <span className="text-blue-600">Portfolio</span></h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                A curated selection of high-impact systems I've architected. 
                <span className="text-blue-600 font-bold block mt-2 uppercase text-xs tracking-widest">Click a card to visit the live site.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div 
                key={i} 
                onClick={() => window.open(project.link, '_blank')}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-500/20 transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 border border-slate-200 shadow-xl">
                    <i className="fa-solid fa-arrow-up-right-from-square text-blue-600 text-sm"></i>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2 italic">{project.description}</p>
                  <div className="mt-auto flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                     <span>Launch Platform</span>
                     <i className="fa-solid fa-chevron-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleNavigate = (id: string) => {
    if (id === 'ai-assistant') {
      setIsChatOpen(true);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-600/10 selection:text-blue-900 flex flex-col">
      <Header activeSection="" onNavigate={handleNavigate} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <ProjectsSection />
      </main>
      <AIAssistant isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      <Footer />
    </div>
  );
};

export default App;
