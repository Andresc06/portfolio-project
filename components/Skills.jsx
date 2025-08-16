import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

// skills data
const skills = {
  title: "My skills",
  description:
    "I am proficient in various programming languages and frameworks, enabling me to build robust applications.",
  skillList: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}>
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {skills.description}
        </p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList.map((skill, index) => {
          return (
            <li key={index}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-secondary transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="capitalize">
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
    </motion.div>
  );
};

export default Skills;
