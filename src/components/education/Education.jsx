import React from 'react';
import { GraduationCap, School, Award, MapPin, Calendar } from 'lucide-react';
import Header from '../header/Header';

const Education = () => {
  const educationData = {
    tenth: {
      schoolName: "W.H Smith Memorial School",
      year: "2016",
      percentage: "87%"
    },
    twelfth: {
      schoolName: "ST John's School",
      year: "2018", 
      percentage: "75.4%"
    },
    graduation: {
      collegeName: "Bundelkhand Institute of Engineering and Technology",
      course: "Bachelor of Technology (Computer Science and Engineering)",
      duration: "2019 - 2023",
      location: "Jhansi,Uttar Pradesh, India",
      yearlyGrades: [
        { year: "1st Year", cgpa: "8.5" },
        { year: "2nd Year", cgpa: "8.7" },
        { year: "3rd Year", cgpa: "9.1" },
        { year: "4th Year", cgpa: "9.2" }
      ]
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="max-w-7xl mx-auto px-3 pt-10 pb-1.5">
        <div className="grid gap-3">
          {/* B.Tech Graduation Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2.5 rounded-t-lg">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="text-white" size={20} />
                {educationData.graduation.course}
              </h3>
            </div>
            <div className="p-2.5">
              <div className="grid md:grid-cols-3 gap-2.5 mb-1.5">
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5">College</h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.graduation.collegeName}</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5 flex items-center gap-1">
                    <Calendar size={16} />
                    Duration
                  </h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.graduation.duration}</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5 flex items-center gap-1">
                    <MapPin size={16} />
                    Location
                  </h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.graduation.location}</p>
                </div>
              </div>
              <div className="bg-purple-50 p-2.5 rounded-md border border-purple-200">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {educationData.graduation.yearlyGrades.map((grade, index) => (
                    <div key={index} className="bg-white p-2 rounded-md text-center">
                      <p className="text-[0.8rem] font-medium text-gray-600 mb-1.5">{grade.year}</p>
                      <p className="text-base font-bold text-purple-600">{grade.cgpa}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 12th Grade Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 rounded-t-lg">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <School className="text-white" size={20} />
                Class 12th ( Varanasi, Uttar-Pradesh )
              </h3>
            </div>
            <div className="p-2.5">
              <div className="grid md:grid-cols-3 gap-2.5">
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5">School</h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.twelfth.schoolName}</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5 flex items-center gap-1">
                    <Calendar size={16} />
                    Year
                  </h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.twelfth.year}</p>
                </div>
                <div className="bg-blue-50 p-2.5 rounded-md border border-blue-200">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5 flex items-center gap-1">
                    <Award size={16} />
                    Percentage
                  </h4>
                  <p className="text-blue-600 font-bold text-base">{educationData.twelfth.percentage}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 10th Grade Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2.5 rounded-t-lg">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <School className="text-white" size={20} />
                Class 10th ( Varanasi, Uttar-Pradesh )
              </h3>
            </div>
            <div className="p-2.5">
              <div className="grid md:grid-cols-3 gap-2.5">
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5">School</h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.tenth.schoolName}</p>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-md">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5 flex items-center gap-1">
                    <Calendar size={16} />
                    Year
                  </h4>
                  <p className="text-gray-900 text-[0.9rem]">{educationData.tenth.year}</p>
                </div>
                <div className="bg-green-50 p-2.5 rounded-md border border-green-200">
                  <h4 className="font-semibold text-gray-700 text-[0.8rem] mb-1.5 flex items-center gap-1">
                    <Award size={16} />
                    Percentage
                  </h4>
                  <p className="text-green-600 font-bold text-base">{educationData.tenth.percentage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;