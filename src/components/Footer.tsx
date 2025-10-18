import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, CoffeeIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <span className="text-blue-400">Dev</span>Charm
            </div>
            <p className="text-gray-400">
              Full Stack Developer & Solutions Designer
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
            <p className="text-gray-400 flex items-center text-sm">
              Made with <CoffeeIcon size={16} className="mx-1 text-amber-500" />{' '}
              and code
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};