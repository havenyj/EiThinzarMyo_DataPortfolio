
import { Project, SkillCategory, Experience } from './types';

/**
 * ASSET PATHS
 * 'assets/' is the standard relative path from the root index.html.
 * IMPORTANT: Filenames are case-sensitive on most servers. 
 * If your file is 'Profile.JPG', this must match exactly.
 */
export const resumeFilePath = 'assets/EiThinzarMyo_Resume.pdf';
export const profileImg = 'assets/profile.jpg';

const digitalPaymentsImg = 'assets/digital_payments.jpg';
const rocklandImg = 'assets/rockland.jpg';
const cleaningServiceImg = 'assets/cleaning_service.jpg';
const housePriceImg = 'assets/house_price.jpg';
const posImg = 'assets/POS.jpg';
const mlSecurityImg = 'assets/ml_security.jpg';
const aiPerformanceImg = 'assets/ai_model_performance.jpg';
const weatherImg = 'assets/weather.jpg';
const bigDataImg = 'assets/big_data_processing.jpg';

export const RESUME_DATA = {
  name: "林月君 (Ei Thinzar Myo)",
  location: "Myanmar · Relocating to Taiwan",
  email: "sly.eithinzarmyo@gmail.com",
  phone: "+65 88938384",
  linkedin: "linkedin.com/in/eithinzarmyo",
  portfolio: "eithinzarmyo.com",
  summary: "Data Analyst with a Computer Science (Big Data) background, skilled in Python, SQL, data visualization, exploratory data analysis, and interactive dashboards. Experienced in analyzing datasets, identifying patterns, and communicating insights through data-driven solutions.",
  education: [
    {
      degree: "Bachelor of Computer Science (Big Data)",
      school: "University of Wollongong (UOW), Singapore",
      period: "2023 - 2026",
      details: "Focused on data analytics, visualization, machine learning, and system design."
    },
    {
      degree: "Diploma of Information Technology",
      school: "Singapore Institute of Management, Singapore",
      period: "2022 - 2023",
      details: "Built foundational knowledge in programming, databases, software development, and information technology."
    }
  ],
  skills: [
    "Data & Analytics (Python, Pandas, NumPy, SQL, Data Cleaning, EDA)",
    "Data Visualization (Plotly, Streamlit, Power BI, Tableau)",
    "Programming & Databases (Python, Java, MySQL, React)",
    "Tools & Methods (Git/GitHub, Jira, Jupyter, UML, Agile/Scrum)"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'digital-payments',
    title: 'Digital Payments & Behavioral Intelligence Platform',
    role: 'Data Analyst · Machine Learning Developer',
    duration: '2026',
    category: 'Dashboard',
    image: digitalPaymentsImg,
    description:
      'An end-to-end data analytics platform that analyzes digital payment transactions using Python, SQL, machine learning, and interactive visualization to identify behavioral patterns and risk signals.',
    tools: [
      'Python',
      'SQL',
      'DuckDB',
      'Pandas',
      'KMeans',
      'Isolation Forest',
      'Plotly',
      'Streamlit',
    ],
    details: [
      'Analyzed 20,000 payment transactions using Python, Pandas, SQL, and DuckDB to identify behavioral patterns and risk indicators',
      'Engineered transaction-level features for behavioral analysis and risk monitoring',
      'Applied KMeans clustering to identify transaction behavioral segments',
      'Implemented Isolation Forest for anomaly detection and identification of unusual transaction patterns',
      'Built an interactive Streamlit and Plotly dashboard for transaction, behavioral, and risk analysis',
      'Developed an investigation queue combining rule-based risk indicators with model-generated analytical signals',
    ],
    githubUrl: 'https://github.com/havenyj/digital-payments-behavioral-intelligence',
  },
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
      'Collaborated with team members using Agile methodology to deliver system features iteratively',
    ],
    githubUrl: 'https://github.com/fwu09/Rockland',
    demoAccess: 'Demo access credentials are available upon request'
  },
  {
    id: 'cleaning-service',
    title: 'Online Cleaning Service Analytics Platform',
    role: 'Group Leader · Data Analyst · Product Analyst',
    duration: 'March 2025 - May 2025',
    category: 'Web',
    image: cleaningServiceImg,
    description:
    'A multi-role service platform designed to support cleaning bookings, job management, and operational workflows for homeowners, cleaners, and platform managers.',    tools: ['UML', 'Agile', 'System Analysis'],
    details: [
      'Led a team of four to design a multi-role service analytics platform',
      'Defined workflows and system requirements supporting data-driven decision features',
      'Designed data flows and system architecture using UML diagrams',
      'Analyzed platform usage data requirements for operational insights',
      'Collaborated with developers using Agile methodology for iterative delivery'
    ],
    githubUrl: 'https://github.com/havenyj/Cleaning-Service-Management-System-CSCI314',
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
    ],
    
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'pos-tagging',
    title: 'Part-of-Speech Tagging using Machine Learning & Deep Learning',
    role: 'Machine Learning Developer · NLP Developer',
    duration: '1 Month',
    category: 'Dashboard',
    image: posImg,
    description:
      'Developed an NLP-based Part-of-Speech (POS) tagging system to classify words into grammatical categories using multiple machine learning and deep learning approaches.',
    tools: [
      'Python',
      'NLP',
      'Machine Learning',
      'PyTorch',
      'Scikit-learn',
    ],
    details: [
      'Implemented and compared Naive Bayes, Hidden Markov Model (HMM), Conditional Random Field (CRF), and BiLSTM models',
      'Performed text preprocessing and feature engineering for NLP classification',
      'Trained and evaluated models using accuracy, precision, recall, and F1-score',
      'Analyzed confusion matrices and model errors to compare model performance',
      'Evaluated model performance on the Brown Corpus dataset',
      'Investigated challenges including lexical ambiguity and out-of-vocabulary (OOV) words',
    ],
    githubUrl: 'https://github.com/havenyj/CSCI218-POS-Tagging-FT19'
  },

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
    duration: '1 Month',
    category: 'Mobile',
    image: weatherImg,
    description: 'A functional minimalist weather application focusing on high-end typography and clear, glassmorphic UI elements.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    details: [
      'Developed a clean, glassmorphic UI layout using HTML/CSS',
      'Integrated OpenWeather API for real-time data synchronization using JavaScript',
      'Focused on accessible typography and visual hierarchy'
    ]
  },
  {
    id: 'big-data-processing',
    title: 'Big Data Processing & Storage System',
    role: 'Big Data Project Developer',
    duration: '2 Months',
    category: 'Dashboard',
    image: bigDataImg,
    description:
      'Developed a Big Data management solution using the Hadoop ecosystem, demonstrating NoSQL data modelling, data storage, querying, and distributed data processing with HBase and Spark.',
    tools: [
      'Hadoop',
      'HBase',
      'Apache Spark',
      'NoSQL',
      'Distributed Data Processing',
    ],
    details: [
      'Designed HBase tables and column families using row-key based NoSQL data structures',
      'Implemented data insertion, retrieval, manipulation, and table management operations in HBase',
      'Processed datasets using Apache Spark transformations and actions',
      'Applied distributed processing techniques within the Hadoop ecosystem',
      'Organized HBase scripts, Spark processing files, datasets, and project reports',
    ],
    githubUrl: 'https://github.com/havenyj/big-data-hadoop-hbase-spark-project',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Data & Analytics',
    icon: 'fa-chart-line',
    skills: [
      'Python', 'Pandas', 'NumPy', 'SQL', 'DuckDB',
      'Data Cleaning', 'Exploratory Data Analysis', 'Data Visualization', 'Interactive Dashboards'
    ]
  },
  {
    title: 'Business Intelligence & Visualization',
    icon: 'fa-chart-pie',
    skills: [
      'Power BI (Basic)', 'Tableau (Basic)', 
      'Plotly', 'Streamlit','Matplotlib','Seaborn'
    ]
  },
  {
    title: 'Programming & Machine Learning',
    icon: 'fa-code',
    skills: [
      'Java', 'Python', 'MySQL', 'React',
      'Regression Models', 'Random Forest', 'KMeans', 'Gradient Boosting', 'Model Evaluation'
    ]
  },
  {
    title: 'Tools & Methods',
    icon: 'fa-diagram-project',
    skills: [
      'Git/GitHub','Jira','Taiga','VS Code','Jupyter Notebooks',
      'UML Diagrams','Agile/Scrum','Technical Documentation'
    ]
  }
];

export const LEADERSHIP: Experience[] = [
  {
    title: 'Project Coordinator',
    organization: 'CONVERSA English & CONVERSA Community',
    period: 'September 2026 - Present',
    bullets: [
      'Coordinate project activities and support the planning and execution of community initiatives.',
      'Collaborate with team members to organize tasks, timelines, and project deliverables.',
      'Support communication and coordination across project activities.'
    ]
  },
  {
    title: 'Technical Support',
    organization: 'NEXA Foundation',
    period: 'July 2026 - Present',
    bullets: [
      'Provide technical support for online program activities and digital tools.',
      'Assist with troubleshooting and resolving technical issues.',
      'Support the smooth delivery of technology-related activities.'
    ]
  },
  {
    title: 'Logistics Subcommittee Member & Lighting Team Leader',
    organization: 'MYSIM Myanmar Community Club (CCA)',
    period: 'April 2024 - April 2025',
    bullets: [
      'Coordinated logistics and operations for major cultural events.',
      'Led the lighting team, managing setup, live coordination, and technical execution.',
      'Recognized with the Impetus Award (Student Leader 2024/2025).'
    ]
  }
];

export const CERTIFICATIONS = [
  {
    title: 'IBM Data Analyst Professional Certificate',
    organization: 'IBM · Coursera',
    status: 'In Progress',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    organization: 'Google · Coursera',
    status: 'In Progress',
  },
  {
    title: 'IBM Business Analyst Professional Certificate',
    organization: 'IBM · Coursera',
    status: 'In Progress',
  },
];