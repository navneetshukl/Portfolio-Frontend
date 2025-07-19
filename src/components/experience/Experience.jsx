import React from 'react';
import { Briefcase, Building, Calendar, Code, CheckCircle2 } from 'lucide-react';
import Header from '../header/header';

const Experience = () => {
  const experienceData = [
    {
      companyName: "LiveKeeping",
      position: "Backend Developer",
      duration: "Jan 2023 - Present",
      techStack: ["Golang", "MongoDB", "Redis", "Docker"],
      tasks: [
        "Developed and maintained responsive web applications using React and Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized database queries resulting in 40% performance improvement",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      companyName: "Pantelwar",
      position: "Backend Developer",
      duration: "Jun 2021 - Dec 2022",
      techStack: ["Golang", "PostgreSql", "MongoDB", "Redis", "GRPC", "Docker"],
      tasks: [
        "Built interactive user interfaces using Vue.js and modern CSS techniques",
        "Converted design mockups into pixel-perfect responsive web pages",
        "Implemented state management solutions for complex applications",
        "Improved website loading speed by 60% through code optimization",
        "Participated in daily standup meetings and sprint planning sessions"
      ]
    },
    {
      companyName: "Grow Digi",
      position: "Golang Intern",
      duration: "Aug 2020 - May 2021",
      techStack: ["Golang","PostgreSql"],
      tasks: [
        "Created dynamic websites using HTML, CSS, JavaScript and PHP",
        "Developed and maintained MySQL databases for web applications",
        "Fixed bugs and implemented new features based on user feedback",
        "Assisted in testing and quality assurance processes",
        "Learned and applied best practices in web development"
      ]
    }
  ];

  const getPositionColor = (index) => {
    const colors = [
      { bg: "from-blue-600 to-blue-700", accent: "blue" },
      { bg: "from-purple-600 to-purple-700", accent: "purple" },
      { bg: "from-green-600 to-green-700", accent: "green" }
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="min-h-screen px-6 bg-gradient-to-br from-gray-50 to-indigo-50 flex flex-col">
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <Header />
      </div>
      <div className="w-full flex flex-col pt-16">
        <div className="text-center py-4 flex-shrink-0">
          <p className="text-lg text-gray-600">My professional journey and achievements</p>
        </div>

        <div className="flex-1 grid grid-rows-3 gap-4 pb-4">
          {experienceData.map((experience, index) => {
            const colors = getPositionColor(index);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Company Header */}
                <div className={`bg-gradient-to-r ${colors.bg} p-5 rounded-t-xl flex-shrink-0`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Building className="text-white" size={28} />
                        {experience.companyName}
                      </h3>
                      <p className="text-white/90 text-base mt-1">{experience.position}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/90 text-sm flex items-center gap-1">
                        <Calendar size={18} />
                        {experience.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Tech Stack Section */}
                  <div className="mb-4 flex-shrink-0">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm">
                      <Code size={18} />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-[0.85rem] font-medium bg-${colors.accent}-100 text-${colors.accent}-700 border border-${colors.accent}-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tasks Section */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Responsibilities & Achievements</h4>
                    <div className="bg-gray-50 p-4 rounded-lg flex-1 overflow-hidden">
                      <ul className="space-y-2 text-sm text-gray-700">
                        {experience.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2">
                            <CheckCircle2 
                              size={16} 
                              className={`text-${colors.accent}-600 mt-0.5 flex-shrink-0`} 
                            />
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;