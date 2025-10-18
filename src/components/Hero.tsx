import React from 'react';
import { ChevronDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Dave Charm Bulaquena
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
          Full Stack Developer & Solutions Designer
        </p>
        <div className="flex space-x-4 mb-10">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
            View My Work
          </a>
          <a href="#contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors">
            Contact Me
          </a>
        </div>
        <div className="flex space-x-6 mb-12">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <TwitterIcon size={24} />
          </a>
        </div>
        <a href="#about" className="animate-bounce">
          <ChevronDownIcon size={36} className="text-gray-400" />
        </a>
      </div>
    </section>;
};