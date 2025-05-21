
import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "SNS College of Engineering",
      degree: "Electronics and Communication Engineering",
      duration: "2022-2026",
      score: "CGPA: 7.8",
    },
    {
      institution: "Government Higher Secondary School",
      degree: "HSC",
      duration: "2021",
      score: "77%",
    },
    {
      institution: "Government High School Baduvur",
      degree: "SSLC",
      duration: "2019",
      score: "85.6%",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3 md:pr-8 md:text-right mb-4 md:mb-0">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">{edu.duration}</span>
                    <h4 className="text-lg font-bold">{edu.institution}</h4>
                    <p className="text-gray-600">{edu.degree}</p>
                  </div>

                  <div className="md:w-1/12 flex justify-center">
                    <div className="relative w-full h-full">
                      {index < education.length - 1 && (
                        <div className="hidden md:block absolute top-8 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2"></div>
                      )}
                      <div className="relative z-10 bg-blue-600 p-2 rounded-full shadow-lg">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 md:pl-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                      <p className="text-gray-700">{edu.institution}</p>
                      <p className="text-blue-600 font-semibold mt-2">{edu.score}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
