import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function ImageGallery({ images, currentIndex, onClose, onNext, onPrevious }: ImageGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-auto"
        />
        
        {currentIndex > 0 && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        {currentIndex < images.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </motion.div>
  );
}