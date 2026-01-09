
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';
  level: number; // 1-100
  description?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
