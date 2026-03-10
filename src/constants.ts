
import { Project, SkillCategory, Experience } from './types';

/**
 * ASSET PATHS
 * 'assets/' is the standard relative path from the root index.html.
 * IMPORTANT: Filenames are case-sensitive on most servers. 
 * If your file is 'Profile.JPG', this must match exactly.
 */
export const resumeFilePath = 'assets/EiThinzarMyo_Resume.pdf';
export const profileImg = 'assets/profile.jpg';

const rocklandImg = 'assets/rockland.jpg';
const cleaningServiceImg = 'assets/cleaning_service.jpg';
const housePriceImg = 'assets/house_price.jpg';
const mlSecurityImg = 'assets/ml_security.jpg';
const aiPerformanceImg = 'assets/ai_model_performance.jpg';
const weatherImg = 'assets/weather.jpg';

export const RESUME_DATA = {
  name: "Ei Thinzar Myo",
  location: "Singapore",
  email: "sly.eithinzarmyo@gmail.com",
  phone: "+65 88938384",
  linkedin: "linkedin.com/in/eithinzarmyo",
  portfolio: "eithinzarmyo.com",
  summary: "Aspiring Data Analyst with a Computer Science and Big Data background. Skilled in data analysis, visualization, and machine learning, with a strong ability to turn complex datasets into clear, actionable insights for business decision-making.",
  education: [
    {
      degree: "Bachelor of Computer Science (Big Data)",
      school: "University of Wollongong (SIM Global Education)",
      period: "2022 - 2026",
      details: "Specialized in data analysis, visualization, and system design."
    }
  ],
  skills: [
    "UI/UX Design (Figma, Wireframing, Prototyping)",
    "Frontend Development (HTML, CSS, JavaScript, React)",
    "Data Visualization (Python, Matplotlib, Seaborn)",
    "System Design (UML, Agile Methodologies)",
    "Project Management (Jira, Leadership)"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'data-analytics-app',
    title: 'Data-Driven Web & Mobile Analytics Application',
    role: 'Lead UI/UX Designer · System Designer · Frontend Developer',
    duration: 'Oct 2025 - March 2026',
    category: 'Mobile',
    image: rocklandImg,
    description: 'A mobile application designed to help users explore, identify, and learn about rocks through a structured and user-friendly experience, supported by a system for organizing and managing rock information.',
    tools: ['Firebase', 'JavaScript', 'System Design', 'UML'],
    details: [
      'Designed system architecture and workflows using UML diagrams including use case, sequence, and activity diagrams',
      'Created the application interface and structured user flows for different system roles',
      'Developed an admin website using Firebase for managing platform data and user activities',
      'Implemented data management features allowing administrators to monitor and update application records',
      'Collaborated with team members using Agile methodology to deliver system features iteratively'
    ]
  },
  {
    id: 'cleaning-service',
    title: 'Online Cleaning Service Analytics Platform',
    role: 'Group Leader · Data Analyst · Product Analyst',
    duration: 'March 2025 - May 2025',
    category: 'Web',
    image: cleaningServiceImg,
    description: 'A multi-role platform that allows homeowners to book cleaning services while enabling cleaners and platform managers to manage jobs efficiently.',
    tools: ['UML', 'Agile', 'System Analysis'],
    details: [
      'Led a team of four to design a multi-role service analytics platform',
      'Defined workflows and system requirements supporting data-driven decision features',
      'Designed data flows and system architecture using UML diagrams',
      'Analyzed platform usage data requirements for operational insights',
      'Collaborated with developers using Agile methodology for iterative delivery'
    ]
  },
  {
    id: 'house-price',
    title: 'House Price Prediction Dashboard',
    role: 'Data Analyst · Machine Learning Developer',
    duration: 'Oct 2024 - Dec 2024',
    category: 'Dashboard',
    image: housePriceImg,
    description: 'Analyzed housing market data using Python to identify key factors influencing house prices. Performed data cleaning, exploratory data analysis (EDA), and built regression models to generate insights.',
    tools: ['Python', 'Pandas', 'Numpy', 'Scikit-learn'],
    details: [
      'Performed data cleaning and preprocessing on the Ames Housing dataset',
      'Conducted exploratory data analysis (EDA) to identify key price drivers',
      'Built regression models including Linear Regression and Random Forest',
      'Evaluated model performance using RMSE and R² metrics',
      'Visualized housing price trends and correlations using Python libraries'
    ]
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'adversarial-ml',
    title: 'Adversarial ML Security Visualization',
    role: 'UI Designer · Data Vis Developer',
    duration: '1 Month',
    category: 'Dashboard',
    image: mlSecurityImg,
    description: 'An interactive visualization showing how adversarial attacks affect neural networks through comparisons and heatmaps.',
    tools: ['PyTorch', 'Matplotlib', 'NumPy', 'Python', 'Figma'],
    details: [
      'Conceptual Design: Visual metaphors for adversarial perturbations',
      'Information Design: Layouts for before/after image comparisons',
      'Development: Implemented FGSM and PGD attack visualizations'
    ]
  },
  {
    id: 'ai-performance-dashboard',
    title: 'AI Model Performance Dashboard',
    role: 'Data Vis Designer · Frontend Developer',
    duration: '2 Months',
    category: 'Dashboard',
    image: aiPerformanceImg,
    description: 'An interactive dashboard comparing CNN activation functions through clear charts and visual metrics.',
    tools: ['TensorFlow', 'Keras', 'Matplotlib', 'Python'],
    details: [
      'Content Strategy: Visualized model accuracy and training loss curves',
      'Visual Design: Grid-based layout for side-by-side performance comparison',
      'Outcome: Communicated complex research findings effectively'
    ]
  },
  {
    id: 'weather-app',
    title: 'Minimal Weather App',
    role: 'Frontend Developer · UI Designer',
    duration: 'Feb 2024',
    category: 'Mobile',
    image: weatherImg,
    description: 'A functional minimalist weather application focusing on high-end typography and clear, glassmorphic UI elements.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    details: [
      'Developed a clean, glassmorphic UI layout using HTML/CSS',
      'Integrated OpenWeather API for real-time data synchronization using JavaScript',
      'Focused on accessible typography and visual hierarchy'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Data & Analytics',
    icon: 'fa-chart-line',
    skills: [
      'Python', 'Pandas', 'NumPy', 'SQL', 
      'Data Cleaning', 'EDA', 'Data Visualization', 'Interactive Dashboards'
    ]
  },
  {
    title: 'Business Intelligence & Tools',
    icon: 'fa-chart-pie',
    skills: [
      'Excel', 'Power BI (Basic)', 'Tableau (Basic)', 
      'Git/GitHub', 'Jira', 'Taiga', 'VS Code', 'Jupyter Notebooks'
    ]
  },
  {
    title: 'Programming & Machine Learning',
    icon: 'fa-code',
    skills: [
      'Java', 'Python', 'MySQL', 
      'Regression Models', 'Random Forest', 'Gradient Boosting', 'Model Evaluation'
    ]
  },
  {
    title: 'System Analysis',
    icon: 'fa-diagram-project',
    skills: [
      'UML Diagrams (Class, Sequence, Activity, State)', 
      'Agile/Scrum', 'Technical Documentation',
      'Analytical Thinking', 'Data Storytelling'
    ]
  }
];

export const LEADERSHIP: Experience[] = [
  {
    title: 'Logistics Subcommittee & Lighting Team Leader',
    organization: 'MYSIM Myanmar Community Club (CCA)',
    period: 'April 2024 - April 2025',
    bullets: [
      'Coordinated logistics and operations for major cultural events, improving participation.',
      'Led lighting team, managing setup, live coordination, and technical execution.',
      'Recognized with the Impetus Award (Student Leader 2024/2025).'
    ]
  }
];
