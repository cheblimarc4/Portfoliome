import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-xl font-bold text-gray-800">
            Marc Chebli
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-blue-600' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-blue-600' : ''}`
            }>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-blue-600' : ''}`
            }>
              Contact
            </NavLink>
            <NavLink to="/hire" className={({ isActive }) => 
              `text-gray-600 hover:text-gray-900 transition-colors ${isActive ? 'text-blue-600' : ''}`
            }>
              Hire Me
            </NavLink>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/projects" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
              <NavLink to="/hire" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
                Hire Me
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}