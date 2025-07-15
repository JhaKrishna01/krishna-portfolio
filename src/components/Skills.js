import React from "react";
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaRProject } from "react-icons/fa";
import { SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";

const skills = [
  { icon: <FaPython />, name: "Python", desc: "The Land of Versatility" },
  { icon: <FaJs />, name: "JavaScript", desc: "The Dynamic Island" },
  { icon: <FaHtml5 />, name: "HTML", desc: "The Creative Coast" },
  { icon: <FaCss3Alt />, name: "CSS", desc: "The Style Shores" },
  { icon: <FaRProject />, name: "R", desc: "The Data Realm" },
  { icon: <SiNumpy />, name: "NumPy", desc: "The Array Archipelago" },
  { icon: <SiPandas />, name: "Pandas", desc: "The Dataframe Forest" },
  { icon: <SiScikitlearn />, name: "Scikit-Learn", desc: "The ML Mountains" },
];

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-gray-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">My Skill Map</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center bg-indigo-800 bg-opacity-60 rounded-xl p-4 hover:scale-105 transition">
            <div className="text-5xl mb-2">{skill.icon}</div>
            <div className="text-xl font-semibold text-white">{skill.name}</div>
            <div className="text-sm text-indigo-200 mt-1 italic">{skill.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 