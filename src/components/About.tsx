
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-600">MV</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mukilan V</h3>
              <p className="text-blue-600 mb-4">Software Engineer</p>
              
              <div className="flex flex-col space-y-3 text-left">
                <div className="flex items-center">
                  <Phone size={18} className="text-blue-600 mr-2" />
                  <span>+91-9786829164</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="text-blue-600 mr-2" />
                  <a href="mailto:softwareengineer2005@gmail.com" className="hover:text-blue-600">
                    softwareengineer2005@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-blue-600 mr-2" />
                  <span>92, kannai west, Orathanadu, Thanjavur</span>
                </div>
                <div className="flex items-center">
                  <Linkedin size={18} className="text-blue-600 mr-2" />
                  <a href="https://linkedin.com/in/mukilan-v" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    linkedin.com/in/mukilan-v
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-blue-600">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span>Tamil</span>
                  <span className="text-blue-600">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Japanese</span>
                  <span className="text-blue-600">Basic</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Reading Books</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Listening Music</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Playing Chess</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Drawing</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hello, I'm Mukilan V</h3>
              <p className="text-gray-700 mb-4">
                I am an ambitious student with good communication and teamwork skills. I consider myself a responsible and orderly person. 
                I am confident that my combination of academic expertise, practical skill and passion for my profession make me a valuable asset.
              </p>
              <p className="text-gray-700">
                Currently pursuing Electronics and Communication Engineering at SNS College of Engineering, I'm passionate about software 
                development and building innovative solutions. My background includes experience with Java programming, web technologies, 
                and automation projects.
              </p>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Technical Expertise</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">JavaScript</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Java</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">HTML/CSS</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">C</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
