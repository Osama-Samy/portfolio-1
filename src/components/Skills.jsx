import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const skillsData = [
  { id: 1, name: "Responsive Design", percentage: 90 },
  { id: 2, name: "JavaScript (ES6+)", percentage: 85 },
  { id: 3, name: "React JS", percentage: 80 },
  { id: 4, name: "Node.js & Express", percentage: 85 },
  { id: 5, name: "NestJS", percentage: 80 },
  { id: 6, name: "MongoDB & MySQL", percentage: 75 },
  { id: 7, name: "Git & GitHub", percentage: 85 },
];

const SkillCircle = ({ name, percentage }) => {
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative flex items-center justify-center mb-6 w-44 h-44">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="88"
            cy="88"
            r={radius}
            stroke="#2a1b38"
            strokeWidth="16"
            fill="transparent"
            className="opacity-30"
          />
          <circle
            cx="88"
            cy="88"
            r={radius}
            stroke="#7e22ce"
            strokeWidth="16"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-3xl font-bold text-white">
          {percentage}%
        </span>
      </div>
      <h3 className="text-xl font-medium tracking-wide text-center text-white">
        {name}
      </h3>
    </div>
  );
};

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsToShow >= skillsData.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return skillsData.length - itemsToShow;
      }
      return prevIndex - 1;
    });
  };

  return (
    <section id="skills" className="py-20 bg-[#121215]">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <div className="px-4 py-16 text-center bg-[#151515] shadow-2xl rounded-[40px] shadow-black/50 md:mx-10 lg:mx-20">
          <h2 className="mb-4 text-5xl font-bold tracking-wide text-white">
            Skills
          </h2>
          <p className="mb-16 text-lg tracking-wider text-gray-400">
            You Can See My Skills Here
          </p>

          <div className="relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 text-white transition-all bg-[#1a1a1a] border border-gray-700 rounded-full hover:bg-gray-800 hover:scale-110 md:-left-6"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex justify-center w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                }}
              >
                {skillsData.map((skill) => (
                  <div
                    key={skill.id}
                    className="shrink-0 px-4"
                    style={{ width: `${100 / itemsToShow}%` }}
                  >
                    <SkillCircle
                      name={skill.name}
                      percentage={skill.percentage}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 text-white transition-all bg-[#1a1a1a] border border-gray-700 rounded-full hover:bg-gray-800 hover:scale-110 md:-right-6"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
