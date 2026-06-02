const certificates = {
  title: "My Certificates",
  description:
    "Here are some of the certificates I have earned throughout my learning journey. They reflect my commitment to continuous improvement and professional development.",
  certificatesList: [
    {
      title: "Intermediate Technical Interview Prep",
      institution: "CodePath",
      year: "Nov 2025",
      link: "https://www.linkedin.com/in/andrescontrerass/overlay/Certifications/2141472057/treasury/?profileId=ACoAACg5qdABEJcxOrP3LqtbvtLHaV5r6GJjaj8",
    },
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
    <div className="flex flex-col gap-6 sm:gap-8 text-center xl:text-left">
      <h3 className="text-3xl sm:text-4xl font-bold">{certificates.title}</h3>
      <p className="max-w-[600px] text-sm sm:text-base leading-7 text-white/60 mx-auto xl:mx-0">
        {certificates.description}
      </p>
      <ScrollArea className="h-[min(70vh,560px)] pr-3 sm:pr-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pb-2">
          {certificates.certificatesList.map((cert, index) => {
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.25, duration: 1 }}
                className="bg-[#232329] rounded-xl flex h-full flex-col justify-between gap-4 p-5 sm:p-6 lg:p-8 text-left shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <span className="text-secondary text-sm sm:text-base font-medium">
                    {cert.year}
                  </span>
                  <h3 className="text-lg sm:text-xl leading-snug max-w-[24rem]">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-secondary shrink-0"></span>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                      {cert.institution}
                    </p>
                  </div>
                  {cert.credentialId ? (
                    <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
                      Credential ID {cert.credentialId}
                    </p>
                  ) : null}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-sm sm:text-base font-medium hover:underline underline-offset-4"
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
