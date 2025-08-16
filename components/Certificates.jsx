const certificates = {
  title: "About Me",
  description:
    "I am a passionate Full Stack Developer with experience in building dynamic web applications.",
  certificatesList: [
    {
      title: "Web Developer Specialist Level I w/ GPA 4.0",
      institution: "Austin Community College",
      year: "2025",
      link: "https://www.parchment.com/u/s/9wdT",
    },
    {
      title: "Software Testing Level I w/ GPA 4.0",
      institution: "Austin Community College",
      year: "2025",
      link: "https://www.parchment.com/u/s/9wdF",
    },
    {
      title: "CompTIA A+ Core 1: Network Fundamentals",
      institution: "Codecademy",
      year: "2025",
      link: "https://www.codecademy.com/learn/ext-paths/220-1101-comptia-a-core-1",
    },
    {
        title: "JS Algorithms & Data Structures / Web Design",
        institution: "freeCodeCamp",
        year: "2023",
        link: "https://www.freecodecamp.org/andresc06",
    },
    {
      title: "Cisco Certified Network Associate",
      institution: "Cisco",
      year: "2021-2022",
      link: "https://www.credly.com/users/andres-contreras.b0cd0e2c/badges#credly",
    },
    {
      title: "Web Design for Everybody Specialization",
      institution: "University of Michigan | Coursera",
      year: "2022",
      link: "https://www.coursera.org/account/accomplishments/specialization/PFVJ6H3SGZZZ",
    },
  ],
};

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
    >
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{certificates.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {certificates.description}
      </p>
      <ScrollArea className="h-[440px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {certificates.certificatesList.map((cert, index) => {
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.25, duration: 1 }}
                className="bg-[#232329] xl:h-[204px] py-6 px-10 p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
              >
                <span className="text-secondary">{cert.year}</span>
                <h3 className="text-xl min-h-[60px] max-w-[350px] text-center lg:text-left">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
                  <p className="text-white/60">{cert.institution}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  View Certificate
                </a>
              </motion.li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
    </motion.div>
  );
};

export default Certificates;
