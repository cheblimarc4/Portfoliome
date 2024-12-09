import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiRubyonrails, SiJavascript, SiHtml5, 
  SiCss3, SiGit, SiGithub, SiFigma, SiHeroku,
  SiRuby, SiPostgresql, SiLinux
} from 'react-icons/si';

export function Home() {
  const skills = [
    { icon: SiReact, name: 'React' },
    { icon: SiRubyonrails, name: 'Ruby on Rails' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiHtml5, name: 'HTML' },
    { icon: SiCss3, name: 'CSS' },
    { icon: SiGit, name: 'Git' },
    { icon: SiGithub, name: 'GitHub' },
    { icon: SiFigma, name: 'Figma' },
    { icon: SiHeroku, name: 'Heroku' },
    { icon: SiRuby, name: 'Ruby' },
    { icon: SiPostgresql, name: 'SQL' },
    { icon: SiLinux, name: 'Linux' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="relative inline-block">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Marc Chebli
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 mt-8 mb-8">Full Stack Developer</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/cheblimarc4" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/marc-chebli-b8b110254/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:cheblimarc4@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm p-8 mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I'm a graduate of IE University in Madrid, where I completed four years of study in Computer
            Science and Artificial Intelligence. Before that, I pursued a year of Business Administration,
            which provided a strong foundation in management and strategic thinking. My academic
            journey has been defined by my passion for exploring the intersection of technology and
            innovation, particularly in areas that foster leadership, inspire creativity, and drive impactful
            solutions.
          </p>
          <p>
            I'm both a software developer and a technology enthusiast with a passion for sports. Recently, I
            completed Le Wagon's intensive two-month Full-Stack Web Development Bootcamp, where I
            mastered tools and frameworks such as Ruby on Rails, Figma, Heroku, Git, GitHub, Linux,
            HTML, CSS, JavaScript, SQL, and Ruby. For my final project, I developed <a href="https://www.play-pal.pro/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">PlayPal</a>, a sports app that allows users to book, find, or create sports
            matches around them. This project showcases my ability to blend technical expertise with my
            enthusiasm for fostering community through sports.
          </p>
          <p>
            Beyond technical skills, I bring a problem-solving mindset and a collaborative approach. My
            experience at IE University and Le Wagon has equipped me to work in fast-paced, dynamic
            environments where adaptability is key. I am particularly interested in roles that allow me to
            combine my technical knowledge with my passion for sports, leveraging technology to create
            meaningful and impactful solutions.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-lg shadow-sm p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <skill.icon className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}