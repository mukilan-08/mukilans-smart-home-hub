
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Printer, Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const DownloadableCV = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the page title
    document.title = "Mukilan V - CV";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center print:hidden">
          <h1 className="text-2xl font-bold">Downloadable CV Format</h1>
          <div className="flex gap-4">
            <Button 
              onClick={handlePrint} 
              className="flex items-center gap-2"
            >
              <Printer size={16} />
              Print CV
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.close()}
            >
              Close
            </Button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div 
          ref={contentRef} 
          className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-8 print:shadow-none print:p-0"
        >
          <div className="border-b pb-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mukilan V</h1>
                <p className="text-xl text-blue-600">Software Engineer</p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="flex items-center mb-1">
                  <Phone className="text-blue-600 w-4 h-4 mr-2" />
                  +91-9786829164
                </p>
                <p className="flex items-center mb-1">
                  <Mail className="text-blue-600 w-4 h-4 mr-2" />
                  softwareengineer2005@gmail.com
                </p>
                <p className="flex items-center mb-1">
                  <MapPin className="text-blue-600 w-4 h-4 mr-2" />
                  Orathanadu, Thanjavur
                </p>
                <p className="flex items-center">
                  <Linkedin className="text-blue-600 w-4 h-4 mr-2" />
                  linkedin.com/in/mukilan-v
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
              <p className="text-gray-700">
                An ambitious student with good communication and teamwork skills. I consider myself a responsible and orderly person.
                I am confident that my combination of academic expertise, practical skill and passion for my profession make me a valuable asset.
                Currently pursuing Electronics and Communication Engineering at SNS College of Engineering, passionate about software
                development and building innovative solutions.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Education</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-medium">SNS College of Engineering</h3>
                <span className="text-gray-600">2022-2026</span>
              </div>
              <p className="italic">Electronics and Communication Engineering</p>
              <p>CGPA: 7.8</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Government Higher Secondary School</h3>
                <span className="text-gray-600">2021</span>
              </div>
              <p className="italic">HSC</p>
              <p>77%</p>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Government High School Baduvur</h3>
                <span className="text-gray-600">2019</span>
              </div>
              <p className="italic">SSLC</p>
              <p>85.6%</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Experience</h2>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Internship at Softech</h3>
                <span className="text-gray-600">2024</span>
              </div>
              <p className="italic">Java Programming Intern</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Gained hands-on experience with core Java programming, frameworks, and tools to build and optimize robust applications.</li>
                <li>Applied Java concepts to real-world projects, improving my ability to tackle coding challenges and contribute effectively to the team.</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Projects</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Home Automation using WhatsApp</h3>
                <span className="text-gray-600">2023</span>
              </div>
              <p className="italic">IoT, Automation, WhatsApp API</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Developed and implemented a home automation system utilizing WhatsApp as the primary interface for control and monitoring.</li>
                <li>Integrated various smart devices such as lights, thermostats, and security cameras into the system for seamless remote management.</li>
                <li>Programmed custom scripts and routines to automate household tasks and enhance convenience and energy efficiency.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium">Electricity Cost Per Day Calculator</h3>
                <span className="text-gray-600">2022</span>
              </div>
              <p className="italic">Data Analysis, Cost Tracking, Visualization</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Created a Daily Electricity Cost Calculator: Developed a tool to compute daily electricity expenses based on usage data, rate per kWh, and appliance details.</li>
                <li>Implemented Cost Analysis Features: Incorporated functionalities to analyze and visualize daily cost trends and savings opportunities.</li>
              </ul>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>CSS</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Java</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>C</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Soft Skills</h2>
              <ul className="list-disc ml-5">
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>

              <h2 className="text-xl font-semibold mb-3 mt-6">Languages</h2>
              <ul className="list-disc ml-5">
                <li>English (Fluent)</li>
                <li>Tamil (Native)</li>
                <li>Japanese (Basic)</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">GitHub</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Excel</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Visual Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadableCV;
