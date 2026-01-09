
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Work <span className="text-blue-600">Experience</span></h2>
          <p className="text-slate-500">My professional journey over the past 3.5 years.</p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 border-l-2 border-slate-100">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
              
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-mono font-bold">{exp.period}</span>
              </div>
              
              <h4 className="text-blue-600 font-semibold text-lg mb-4">{exp.company}</h4>
              
              <ul className="space-y-3 mb-6 text-slate-600">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1.5 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;