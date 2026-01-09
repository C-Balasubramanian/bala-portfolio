
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const chartData = [
    { subject: 'Frontend', A: 95, fullMark: 100 },
    { subject: 'Backend', A: 90, fullMark: 100 },
    { subject: 'Database', A: 85, fullMark: 100 },
    { subject: 'DevOps', A: 75, fullMark: 100 },
    { subject: 'Architecture', A: 88, fullMark: 100 },
    { subject: 'Tooling', A: 92, fullMark: 100 },
  ];

  const categories: Skill['category'][] = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="black" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Technical <span className="text-blue-600">Expertise</span></h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-xl">
              A comprehensive stack built over 3.5 years of industry experience. 
              <span className="text-blue-600 font-semibold block mt-2">Click a technology to view depth and context.</span>
            </p>
            
            <div className="space-y-8">
              {categories.map(cat => (
                <div key={cat} className="animate-in fade-in slide-in-from-left duration-500">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                    {cat}
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.filter(s => s.category === cat).map(s => (
                      <button 
                        key={s.name} 
                        onClick={() => setSelectedSkill(s)}
                        className={`group px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                          selectedSkill?.name === s.name 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20 scale-105' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-blue-500/50 hover:text-slate-900 shadow-sm'
                        }`}
                      >
                        {s.name}
                        <i className={`fa-solid fa-chevron-right text-[10px] transition-transform ${selectedSkill?.name === s.name ? 'rotate-90' : 'group-hover:translate-x-1'}`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 min-h-[500px] flex flex-col items-center justify-center">
            {selectedSkill ? (
              <div className="w-full glass rounded-[3rem] p-10 border-slate-200 flex flex-col items-center animate-in fade-in zoom-in slide-in-from-right-8 duration-500 relative overflow-hidden bg-white/90 shadow-2xl">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 blur-[60px] rounded-full"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 blur-[60px] rounded-full"></div>

                 <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 border border-blue-100">
                   <i className="fa-solid fa-terminal text-blue-600 text-3xl"></i>
                 </div>
                 
                 <h3 className="text-4xl font-bold mb-3 text-slate-900 tracking-tight">{selectedSkill.name}</h3>
                 
                 <div className="flex items-center gap-4 mb-8">
                   <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                     Proficiency: {selectedSkill.level}%
                   </span>
                   <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                     {selectedSkill.category}
                   </span>
                 </div>

                 <div className="w-full max-w-xs bg-slate-100 h-1.5 rounded-full mb-10 overflow-hidden">
                   <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${selectedSkill.level}%` }}
                   ></div>
                 </div>

                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 w-full mb-8">
                    <p className="text-center text-slate-600 text-lg leading-relaxed italic">
                      "{selectedSkill.description || `Extensive real-world experience implementing scalable solutions using ${selectedSkill.name}.`}"
                    </p>
                 </div>

                 <button 
                  onClick={() => setSelectedSkill(null)}
                  className="group py-3 px-8 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 text-sm font-bold flex items-center gap-3 transition-all"
                 >
                   <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                   Back to Chart
                 </button>
              </div>
            ) : (
              <div className="w-full glass rounded-[3rem] p-12 flex flex-col items-center justify-center border-slate-100 shadow-2xl animate-in fade-in duration-700 bg-white/90">
                <h3 className="text-center font-black mb-12 text-slate-400 tracking-[0.4em] uppercase text-xs">Architectural Distribution</h3>
                <div className="w-full h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                      <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em' }} />
                      <Radar
                        name="Bala"
                        dataKey="A"
                        stroke="#2563eb"
                        strokeWidth={3}
                        fill="#2563eb"
                        fillOpacity={0.1}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-12 flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <div className="w-8 h-px bg-slate-100"></div>
                  Select a skill to inspect depth
                  <div className="w-8 h-px bg-slate-100"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;