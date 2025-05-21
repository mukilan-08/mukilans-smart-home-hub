
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Experience entry */}
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:w-1/3 md:pr-8 md:text-right mb-4 md:mb-0">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">2024</span>
                <h4 className="text-lg font-bold">Softech</h4>
                <p className="text-gray-600">Java Programming Intern</p>
              </div>

              <div className="md:w-1/12 flex justify-center">
                <div className="relative w-full h-full">
                  <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                  <div className="relative z-10 bg-blue-600 p-2 rounded-full shadow-lg">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 md:pl-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-lg font-bold mb-2">Java Programming Internship</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Gained hands-on experience with core Java programming, frameworks, and tools to build and optimize robust applications.</li>
                    <li>Applied Java concepts to real-world projects, improving my ability to tackle coding challenges and contribute effectively to the team.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
