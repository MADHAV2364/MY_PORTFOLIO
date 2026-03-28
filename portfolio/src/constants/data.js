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
    title: 'MetaPay - A Decentalised Payment App',
    description: 'Developed a secure, decentralized Ethereum-based payment application using React, Solidity, and Ethers.js.',
    tech: ['React', 'Tailwind CSS', 'Solidity', 'Ethers.js'],
    link: 'https://github.com/MADHAV2364/METAPAY',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: "Sadak Saathi",
    description: "Sadak Saathi is an intelligent pothole detection platform which analyses potholes from videos and images using YOLOv8.",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=60",
    tech: ["Typescript", "Firebase", "YOLOv8", "Edge Computing"],
    link: "https://github.com/Tikesh115/Sadak-Saathi"
  },
  {
    title: "English to Chhattisgarhi Translator",
    description: "A specialized Speech-to-Speech tool built with Python. It integrates AI for real-time translation and a JSON-based offline mode for accessibility. Though submitted post-deadline, it was optimized for high-precision speech synthesis.",
    image: "https://images.unsplash.com/photo-1673515335152-f2589ba8bb7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Python", "Speech AI", "JSON"],
    link: "https://github.com/MADHAV2364/English-Hindi-to-ChhattisgarhiTranslator"
  },
  {
    title: "BMW M: Virtual Showroom",
    description: "An innovative digital platform designed to transform the car-buying experience.This virtual showroom allows users to explore the M-series lineup and book their dream car from home.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=60",
    tech: ["React", "Tailwind CSS", "MongoDB"],
    link: "https://github.com/Tikesh115/BMW-M-Series-Website"
  }
];
