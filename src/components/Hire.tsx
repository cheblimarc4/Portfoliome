import React from 'react';
import { CheckCircle } from 'lucide-react';

export function Hire() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hire Me</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Me?</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
            <p className="text-gray-600">Strong expertise in modern web technologies and frameworks</p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
            <p className="text-gray-600">Experience in building scalable and maintainable applications</p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
            <p className="text-gray-600">Strong problem-solving skills and attention to detail</p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
            <p className="text-gray-600">Excellent communication and collaboration skills</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Select a range</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}