import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Header from '../header/Header';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Dashboard",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      description: "A comprehensive e-commerce dashboard that provides real-time analytics, inventory management, and customer insights. Built with modern web technologies to deliver a seamless user experience for business owners to track sales, manage products, and analyze customer behavior patterns.",
      githubLink: "https://github.com/username/ecommerce-dashboard"
    },
    {
      id: 2,
      name: "Task Management App",
      techStack: ["Vue.js", "Firebase", "TypeScript", "Vuetify"],
      description: "A collaborative task management application designed to streamline team productivity. Features include real-time collaboration, drag-and-drop task organization, deadline tracking, and team communication tools. The app supports multiple project workspaces and integrates with popular calendar applications.",
      githubLink: "https://github.com/username/task-management"
    },
    {
      id: 3,
      name: "AI Image Generator",
      techStack: ["Python", "FastAPI", "React", "OpenAI API", "PostgreSQL"],
      description: "An innovative AI-powered image generation platform that transforms text prompts into stunning visuals. Leveraging cutting-edge machine learning models, users can create custom artwork, illustrations, and designs with simple text descriptions. Includes features for image editing, style transfer, and batch processing.",
      githubLink: "https://github.com/username/ai-image-generator"
    }
  ];

  const TechBadge = ({ tech }) => (
    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-blue-200 hover:scale-105 transition-transform duration-200">
      {tech}
    </span>
  );

  const ProjectCard = ({ project }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold group-hover:scale-105 transition-transform duration-200">
            {project.name}
          </h3>
          <div className="flex space-x-2">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200 group/icon"
            >
              <Github className="w-4 h-4 group-hover/icon:scale-110 transition-transform duration-200" />
            </a>
            <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200 group/icon">
              <ExternalLink className="w-4 h-4 group-hover/icon:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            About Project
          </h4>
          <p className="text-gray-600 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <div className="max-w-[1600px] mx-auto">
          <Header />
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;