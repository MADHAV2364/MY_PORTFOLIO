import { Monitor, Server, Wrench } from 'lucide-react';

export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

export const SKILLS = [
  {
    category: 'Frontend',
    icon: Monitor,
    items: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3', 'Three.js']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'REST APIs']
  },
  {
    category: 'Tools & Others',
    icon: Wrench,
    items: ['Git & GitHub', 'Figma', 'Vite', 'Webpack', 'Responsive Design']
  },
];

export const PROJECTS = [
  {
    title: 'Nebula Dashboard',
    description: 'A dark-themed analytics dashboard with interactive data visualizations and real-time updates.',
    tech: ['React', 'Tailwind CSS', 'Chart.js'],
    link: 'https://github.com/MADHAV2364',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Stellar E-Commerce',
    description: 'A modern e-commerce storefront with a sleek UI, shopping cart functionality, and secure checkout.',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    link: 'https://github.com/MADHAV2364',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: '3D Product Configurator',
    description: 'An interactive web tool allowing users to customize product colors and materials in 3D real-time.',
    tech: ['React', 'Three.js', 'React Three Fiber'],
    link: 'https://github.com/MADHAV2364',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80'
  }
];