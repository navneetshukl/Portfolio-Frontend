import React, { useState } from "react";
import Header from "../header/header";

// Import icons from react-icons/fa for GitHub and LinkedIn
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Import social platform icons
import { 
  SiLeetcode, 
  SiGeeksforgeeks, 
  SiCodeforces, 
  SiCodechef, 
  SiHackerrank,
  SiHashnode 
} from "react-icons/si";
// Import tech stack icons
import { 
  SiGo, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker, 
  SiRedis,
  SiGit,
  SiGithub
} from "react-icons/si";
import { 
  FaCloud, 
  FaDatabase, 
  FaNetworkWired,
  FaCode,
  FaLink,
  FaCogs
} from "react-icons/fa";

function About() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 font-inter text-gray-800 overflow-hidden">
      {/* Header stays at top */}
      <Header />

      {/* Main content fills remaining space */}
      <main className="flex-grow overflow-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
          {/* Circular photo section with social links */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center overflow-hidden border-4 border-white transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/256x256/6366F1/FFFFFF?text=Your+Photo"
                alt="Your Profile"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/256x256/6366F1/FFFFFF?text=Error";
                }}
              />
            </div>
            {/* Social Links Section */}
            <div className="mt-4 flex flex-col items-center gap-4">
              {/* Horizontal GitHub, LinkedIn, and Hashnode */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#181717] hover:text-gray-600 transition-colors duration-200"
                  title="GitHub"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:text-blue-600 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://hashnode.com/@your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2962FF] hover:text-blue-500 transition-colors duration-200"
                  title="Hashnode"
                >
                  <SiHashnode size={32} />
                </a>
              </div>
              {/* Vertical Other Links */}
              <div className="flex flex-col gap-2 items-center">
                <a
                  href="https://leetcode.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFA116] hover:text-orange-400 transition-colors duration-200"
                  title="LeetCode"
                >
                  <SiLeetcode size={32} />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2F8D46] hover:text-green-600 transition-colors duration-200"
                  title="GeeksforGeeks"
                >
                  <SiGeeksforgeeks size={32} />
                </a>
                <a
                  href="https://codeforces.com/profile/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F8ACB] hover:text-blue-500 transition-colors duration-200"
                  title="Codeforces"
                >
                  <SiCodeforces size={32} />
                </a>
                <a
                  href="https://www.codechef.com/users/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B4638] hover:text-amber-700 transition-colors duration-200"
                  title="Codechef"
                >
                  <SiCodechef size={32} />
                </a>
                <a
                  href="https://atcoder.jp/users/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000000] hover:text-gray-600 transition-colors duration-200"
                  title="AtCoder"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/atcoder.svg"
                    alt="AtCoder"
                    className="w-8 h-8 hover:scale-110 transition-transform duration-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://img.atcoder.jp/assets/atcoder.png";
                    }}
                  />
                </a>
                <a
                  href="https://www.hackerrank.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00EA64] hover:text-green-400 transition-colors duration-200"
                  title="HackerRank"
                >
                  <SiHackerrank size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* About + Tech Stack */}
          <div className="flex-grow flex flex-col gap-8 overflow-auto">
            {/* About Me Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                About Me
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                I'm Navneet Shukla, a backend developer specializing in Go. I
                focus on building scalable APIs, optimizing databases, and
                delivering high-performance systems. Passionate about solving
                complex problems, I stay current with modern tools and
                cloud-native technologies to craft efficient and impactful
                solutions.
              </p>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                My Tech Stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-lg text-gray-700">
                <TechItem 
                  icon={<SiGo className="text-[#00ADD8] text-xl" />} 
                  text="Golang" 
                />
                <TechItem 
                  icon={<SiPostgresql className="text-[#336791] text-xl" />} 
                  text="PostgreSQL" 
                />
                <TechItem 
                  icon={<SiMongodb className="text-[#47A248] text-xl" />} 
                  text="MongoDB" 
                />
                <TechItem 
                  icon={<SiDocker className="text-[#2496ED] text-xl" />} 
                  text="Docker" 
                />
                <TechItem 
                  icon={<FaCode className="text-[#4A90E2] text-xl" />} 
                  text="Data Structures" 
                />
                <TechItem 
                  icon={<FaCloud className="text-[#FF9900] text-xl" />} 
                  text="Cloud Platforms" 
                />
                <TechItem 
                  icon={<SiGithub className="text-[#181717] text-xl" />} 
                  text="Git & GitHub" 
                />
                <TechItem 
                  icon={<FaLink className="text-[#61DAFB] text-xl" />} 
                  text="REST APIs" 
                />
                <TechItem 
                  icon={<SiRedis className="text-[#DC382D] text-xl" />} 
                  text="Redis" 
                />
                <TechItem 
                  icon={<FaCogs className="text-[#6B7280] text-xl" />} 
                  text="System Design" 
                />
                <TechItem 
                  icon={<FaDatabase className="text-[#4A5568] text-xl" />} 
                  text="DBMS" 
                />
                <TechItem 
                  icon={<FaNetworkWired className="text-[#8B5CF6] text-xl" />} 
                  text="Computer Networks" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper component for Tech Stack items
function TechItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <span className="flex-shrink-0">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}

export default About;