
export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  tools: string[];
  image: string;
  category: 'Mobile' | 'Web' | 'Dashboard';
  details: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoAccess?: string;
}
  
  export interface SkillCategory {
    title: string;
    skills: string[];
    icon: string;
  }
  
  export interface Experience {
    title: string;
    organization: string;
    period: string;
    bullets: string[];
  }
  