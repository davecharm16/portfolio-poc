import React from 'react';
export const Skills = () => {
  const frontendSkills = ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'];
  const backendSkills = ['Node.js', 'Express', 'Python', 'Django', 'SQL', 'MongoDB', 'RESTful APIs'];
  const otherSkills = ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'UI/UX Design', 'System Architecture'];
  return <section id="skills" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, index) => <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>)}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, index) => <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>)}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">
              Other Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill, index) => <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};