export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'AddressPrishtina',
    description: 'A comprehensive web application for managing and organizing addresses in Prishtina. Features include address search, categorization, and user-friendly interface for local businesses and residents.',
    image: '/project-placeholder.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/adiberishaubt/AddressPrishtina',
    liveUrl: '',
    category: 'Web Application',
    featured: true
  },
  {
    title: 'Pabau Task for Internship',
    description: 'A professional task management application developed as part of an internship application process. Demonstrates modern React development practices and clean code architecture.',
    image: '/project-placeholder.jpg',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/adiberisha/PabauTaskForInternship',
    liveUrl: '',
    category: 'Task Management',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing professional experience, skills, and projects. Built with the latest web technologies for optimal performance and user experience.',
    image: '/project-placeholder.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/adiberishaubt/portfolio-website',
    liveUrl: '',
    category: 'Portfolio',
    featured: true
  },
  {
    title: 'Java Programming Projects',
    description: 'Collection of Java applications demonstrating object-oriented programming principles, data structures, and algorithmic problem-solving skills.',
    image: '/project-placeholder.jpg',
    technologies: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/adiberishaubt',
    liveUrl: '',
    category: 'Backend Development',
    featured: true
  },
  {
    title: 'PHP & WordPress Development',
    description: 'Full-stack web development projects using PHP and WordPress. Includes custom themes, plugins, and dynamic web applications.',
    image: '/project-placeholder.jpg',
    technologies: ['PHP', 'WordPress', 'MySQL', 'HTML/CSS'],
    githubUrl: 'https://github.com/adiberishaubt',
    liveUrl: '',
    category: 'Full-Stack Development',
    featured: true
  },
  {
    title: 'Frontend Development Projects',
    description: 'Modern web applications built with HTML, CSS, and JavaScript. Features responsive design, interactive elements, and cross-browser compatibility.',
    image: '/project-placeholder.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/adiberishaubt',
    liveUrl: '',
    category: 'Frontend Development',
    featured: true
  }
];

export const categories = ['All', 'Web Application', 'Backend Development', 'Full-Stack Development', 'Frontend Development', 'Portfolio', 'Task Management'];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};
