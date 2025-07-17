import React from "react";
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaRProject, FaReact, FaNodeJs, FaDocker, FaGithub, FaAws } from "react-icons/fa";
import { SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { SiGooglecolab } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { icon: <FaPython />, name: "Python", desc: "The Land of Versatility" },
      { icon: <FaJs />, name: "JavaScript", desc: "The Dynamic Island" },
      { icon: <FaHtml5 />, name: "HTML", desc: "The Creative Coast" },
      { icon: <FaCss3Alt />, name: "CSS", desc: "The Style Shores" },
      { icon: <FaRProject />, name: "R", desc: "The Data Realm" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { icon: <SiNumpy />, name: "NumPy", desc: "The Array Archipelago" },
      { icon: <SiPandas />, name: "Pandas", desc: "The Dataframe Forest" },
      { icon: <SiScikitlearn />, name: "Scikit-Learn", desc: "The ML Mountains" },
      { icon: <SiTensorflow />, name: "TensorFlow", desc: "The Deep Learning Desert" },
      { icon: <SiOpencv />, name: "OpenCV", desc: "The Vision Valley" },
      { icon: <FaReact />, name: "React", desc: "The UI Universe" },
      { icon: <FaNodeJs />, name: "Node.js", desc: "The Backend Bay" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { icon: <FaGithub />, name: "Git/GitHub", desc: "The Collaboration Capital" },
      { icon: <FaDocker />, name: "Docker", desc: "The Container Cove" },
      { icon: <FaAws />, name: "AWS", desc: "The Cloud Cliffs" },
      { icon: <VscCode />, name: "VS Code", desc: "The Editor Empire" },
      { icon: <SiGooglecolab />, name: "Google Colab", desc: "The Notebook Nexus" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-gray-100 text-gray-900 dark:bg-[#23233a] dark:text-white">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Skill Map</h2>
      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-indigo-200 mb-4 text-center">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center bg-indigo-800 bg-opacity-60 rounded-xl p-4 hover:scale-105 transition">
                  <div className="text-5xl mb-2">{skill.icon}</div>
                  <div className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</div>
                  <div className="text-sm text-indigo-200 mt-1 italic">{skill.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 