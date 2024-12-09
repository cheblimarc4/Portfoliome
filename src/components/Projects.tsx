import React from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'PlayPal',
      description: 'PlayPal is a platform that brings together sports lovers. When someone moves to a new country and needs a team to play their favorite sports, like padel, they can hop on to PlayPal, search for their game, and request to join a team. This platform makes it easy to connect with fellow sports enthusiasts and find your next game.',
      images: [
        '/images/playpal1.jpg',
        '/images/playpal2.jpg',
        '/images/playpal3.jpg',
        '/images/playpal4.jpg',
        '/images/playpal5.jpg'
      ],
      skills: [
        'Ruby on Rails',
        'JavaScript',
        'Bootstrap',
        'Heroku',
        'HTML',
        'CSS',
        'MySQL'
      ],
      githubUrl: 'https://github.com/cheblimarc4/play-pal',
      demoUrl: 'https://www.play-pal.pro'
    },
    {
      title: 'TimeMachineBNB',
      description: 'An Airbnb-inspired platform for renting time machines! Users can browse and rent time machines for specific periods, all crafted from our imagination. This fun project was developed with my team at Le Wagon Bootcamp.',
      images: [
        '/images/timemachine1.jpg',
        '/images/timemachine2.jpg',
        '/images/timemachine3.jpg'
      ],
      skills: [
        'JavaScript',
        'Ruby on Rails',
        'Bootstrap',
        'Heroku',
        'HTML',
        'CSS',
        'MySQL'
      ],
      githubUrl: 'https://github.com/cheblimarc4/timemachinebnb'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            My Projects
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 mt-8">
          Explore my latest work and side projects
        </p>
      </div>

      <div className="grid gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}