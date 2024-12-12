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
          As a graduate of IE University in Madrid with a degree in Computer Science and Artificial
          Intelligence, my academic journey has prepared me to excel in roles at the intersection of
          technology and innovation. My coursework included a hands-on DevOps project, IE-Bank-App,
          where I contributed to every layer of development—frontend, backend, and infrastructure—and
          a comprehensive course on Data Structures and Algorithms that strengthened my Python
          programming and problem-solving skills. These experiences have equipped me with a robust
          technical foundation and a logical mindset tailored to addressing complex challenges.
          </p>

          <p>
          In addition to my technical background, my experiences in leadership have shaped me into a
          collaborative and goal-oriented professional. For two years, I served as a patrol leader in my
          school’s Boy Scouts program, where I managed and guided a team of 12 young scouts. My
          responsibilities included mentoring them to achieve their personal and collective goals, such as
          becoming patrol leaders themselves. This experience infused in me the importance of clear
          communication, adaptability, and fostering an environment where others can succeed—skills
          that translate seamlessly to professional environments.
          </p>

          <p>
          Beyond technical skills, I am passionate about leveraging technology to create impactful
          solutions. My enthusiasm for sports fosters a strong team spirit and resilience—qualities I believe
          are invaluable in a collaborative company environment. Moreover, I’m drawn to this internship
          because it aligns with my passion for blending technology and innovation to address real-world
          challenges, particularly in fostering community and enhancing user experiences through
          technological solutions.
          </p>
          <p>
          I am eager to apply my unique blend of technical knowledge, leadership skills, and passion for
          innovation to your organization. I believe my background, which combines a strong foundation in
          software development, a mindset for problem-solving, and an appreciation for team dynamics,
          positions me as an ideal candidate for this role. This internship represents an opportunity not
          only to contribute meaningfully to your team but also to grow by learning from your company’s
          expertise and values.
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
