
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS } from '../constants';

// Initialize the GenAI client with the API key from the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Balasubramanian (Bala), a professional Full Stack Developer with 3.5 years of experience.
Your goal is to answer questions about Bala's career, skills, and projects to potential employers or clients.

Details about Bala:
- Name: ${PERSONAL_INFO.name}
- Role: ${PERSONAL_INFO.role}
- Experience: ${PERSONAL_INFO.experience_years} years
- Bio: ${PERSONAL_INFO.bio}
- Cloud Expertise: Expert in Microsoft Azure (App Service, Functions, SQL, Azure DevOps).
- Specialized Skill: AI Chat Bot development using LLMs, LangChain, and RAG architectures.
- Skills: ${SKILLS.map(s => `${s.name} (${s.level}%)`).join(', ')}
- Work History: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}
- Key Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('; ')}

Specific Project Context:
- Star AI English Learning: An AI tutor for English practice at https://star-learning.vercel.app/.
- Rent Management: A property rental platform at https://rent-website-sigma.vercel.app/.
- Samskritasurabhi: A Sanskrit e-learning platform available at https://www.samskritasurabhi.com.
- Rezingo: A health and wellness management platform.
- Election App: A real-time analytics tool for tracking election results.
- Forex Platform: A high-concurrency fintech platform.

Be professional, concise, and helpful. Use a friendly tone. 
Always use the Google Search tool to verify current facts or provide up-to-date links if needed.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: 'user'|'model', text: string}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.length > 0 ? [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ] : [{ role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        tools: [{ googleSearch: {} }]
      }
    });

    return {
      text: response.text || "I'm sorry, I couldn't generate a response at this time.",
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "I'm having trouble connecting to my AI core right now. Please try again in a moment or contact Balasubramanian directly via the contact section!",
      grounding: []
    };
  }
};
