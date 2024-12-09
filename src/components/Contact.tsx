import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">Cheblimarc4@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+34 657189646</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Based in Madrid, Spain</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
