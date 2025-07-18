import React, { useState } from "react";
import Header from "../header/header";

function About() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 font-inter text-gray-800 overflow-hidden">
      {/* Header stays at top */}
      <Header />

      {/* Main content fills remaining space */}
      <main className="flex-grow overflow-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
          {/* Circular photo section */}
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center overflow-hidden border-4 border-white transform hover:scale-105 transition-transform duration-300">
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
                <TechItem icon="🐹" text="Golang" /> {/* Go Gopher */}
                <TechItem icon="🐘" text="PostgreSQL" /> {/* Elephant */}
                <TechItem icon="🍃" text="MongoDB" /> {/* Leaf */}
                <TechItem icon="🐳" text="Docker" /> {/* Whale */}
                <TechItem icon="📊" text="Data Structures" /> {/* Bar Chart */}
                <TechItem icon="☁️" text="Cloud Platforms" /> {/* Cloud */}
                <TechItem icon="🐙" text="Git & GitHub" /> {/* Octocat */}
                <TechItem icon="🔗" text="REST APIs" /> {/* Link */}
                <TechItem icon="🔴" text="Redis" /> {/* Red Circle */}
                <TechItem icon="🏗️" text="System Design" /> {/* Building */}
                <TechItem icon="🗄️" text="DBMS" /> {/* File Cabinet */}
                <TechItem icon="🕸️" text="Computer Networks" />{" "}
                {/* Spider Web */}
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
    <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}

export default About;
