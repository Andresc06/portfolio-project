import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaSwift,
  FaPython
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiClaude
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
    "Here are some of the technologies and tools I have experience with. I am always eager to learn new skills and improve my expertise.",
  // list of skills with icons
  skillList: [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Swift", icon: FaSwift, color: "#F05138" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Claude AI", icon: SiClaude, color: "#D97757" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    
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
          const Icon = skill.icon;

          return (
            <li key={index}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div
                      className="text-6xl text-white/80 transition-colors duration-300 group-hover:[color:var(--skill-color)]"
                      style={{ "--skill-color": skill.color }}
                    >
                      <Icon />
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
