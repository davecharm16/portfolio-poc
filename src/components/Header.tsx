import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-blue-600">Dev</span>Charm
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#home" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className="py-2">
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li className="py-2">
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li className="py-2">
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>}
    </header>;
};