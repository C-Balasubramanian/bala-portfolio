
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

interface ExtendedMessage extends Message {
  grounding?: any[];
}

interface AIAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<ExtendedMessage[]>([
    { role: 'model', text: "Hello! I'm Bala's AI assistant. Ask me anything about his 3.5 years of experience, his Azure skills, or projects like Star AI!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const response = await getGeminiResponse(userMsg, history);
    
    setMessages(prev => [...prev, { 
      role: 'model', 
      text: response.text, 
      grounding: response.grounding 
    }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end transition-all ${isOpen ? 'w-full md:w-auto h-full md:h-auto inset-0 md:inset-auto p-4 md:p-0 bg-white/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none' : ''}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 md:mb-6 w-full md:w-[400px] h-[calc(100%-80px)] md:h-[600px] max-h-[800px] bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 md:p-6 bg-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                <i className="fa-solid fa-brain text-white text-base md:text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-xs md:text-sm leading-none mb-1">Portfolio Intelligence</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <p className="text-slate-300 text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-80">Online</p>
                </div>
              </div>
            </div>
            <button onClick={onToggle} className="text-slate-400 hover:text-white transition-colors p-2">
              <i className="fa-solid fa-xmark text-lg md:text-xl"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-white scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[90%] md:max-w-[85%] px-4 py-3 rounded-2xl text-[13px] md:text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-100 text-slate-700 rounded-tl-none border border-slate-200'
                }`}>
                  {msg.text}
                  
                  {msg.grounding && msg.grounding.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-200">
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Sources</p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.grounding.map((chunk, idx) => chunk.web && (
                          <a 
                            key={idx} 
                            href={chunk.web.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[9px] bg-white hover:bg-slate-50 text-blue-600 px-2 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-all"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square text-[7px]"></i>
                            {chunk.web.title?.substring(0, 12) || 'Source'}...
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-duration:0.6s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-duration:0.6s] [animation-delay:0.1s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 md:p-4 bg-slate-50 border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-400 text-slate-900 shadow-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95 shrink-0"
              >
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={onToggle}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all transform active:scale-90 ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-gradient-to-tr from-blue-600 to-purple-600 hover:scale-110'
        } relative group`}
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl group-hover:blur-2xl transition-all"></div>
        {isOpen ? (
          <i className="fa-solid fa-minus text-white text-xl md:text-2xl"></i>
        ) : (
          <i className="fa-solid fa-brain text-white text-xl md:text-2xl"></i>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
