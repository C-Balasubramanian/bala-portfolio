
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Logo: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group">
    <path 
      d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" 
      stroke="url(#logo-grad)" 
      strokeWidth="2" 
      strokeDasharray="4 2"
      className="opacity-20 group-hover:opacity-100 transition-opacity duration-500"
    />
    <path 
      d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" 
      fill="url(#logo-grad)" 
      className="transition-all duration-500 group-hover:scale-95 origin-center"
    />
    <text 
      x="50%" 
      y="52%" 
      dominantBaseline="middle" 
      textAnchor="middle" 
      fill="white" 
      fontSize="36" 
      fontWeight="900" 
      style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.05em' }}
    >
      BS
    </text>
    <circle cx="50" cy="15" r="3" fill="white" className="animate-pulse" />
    <defs>
      <linearGradient id="logo-grad" x1="15" y1="10" x2="85" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563eb" />
        <stop offset="1" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
  </svg>
);

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'skills', 'experience', 'projects'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('about')}
          className="flex items-center group transition-transform duration-300 hover:scale-110"
          aria-label="Home"
        >
          <Logo />
        </button>
        
        <nav className="hidden md:flex items-center space-x-2 bg-slate-100/50 p-1 rounded-full border border-slate-200 backdrop-blur-md">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onNavigate(item.id)}
              className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                activeTab === item.id 
                ? 'text-blue-600 bg-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item.name}
              {activeTab === item.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_#2563eb]"></span>
              )}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => onNavigate('ai-assistant')}
          className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/10 flex items-center gap-2"
        >
          <i className="fa-solid fa-sparkles text-[10px]"></i>
          Ask AI
        </button>
      </div>
    </header>
  );
};

export default Header;
