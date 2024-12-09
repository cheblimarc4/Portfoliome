import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { SiJavascript, SiRubyonrails, SiBootstrap, SiHeroku, SiHtml5, SiCss3, SiMysql } from 'react-icons/si';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  skills: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({ title, description, images, skills, githubUrl, demoUrl }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillIcons: { [key: string]: React.ComponentType } = {
    JavaScript: SiJavascript,
    'Ruby on Rails': SiRubyonrails,
    Bootstrap: SiBootstrap,
    Heroku: SiHeroku,
    HTML: SiHtml5,
    CSS: SiCss3,
    MySQL: SiMysql,
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative h-64 overflow-hidden group">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
              View Gallery
            </button>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map((skill) => {
              const Icon = skillIcons[skill];
              return Icon ? (
                <div
                  key={skill}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  <Icon className="w-4 h-4" />
                  {skill}
                </div>
              ) : null;
            })}
          </div>

          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`${title} screenshot ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 bg-white">
                <div className="flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}