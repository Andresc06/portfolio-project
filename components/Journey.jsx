import { motion } from "framer-motion"

const education = [
    {
        years: "2025 - 2026",
        degree: "BAS in Software Development",
        institution: "Power Finance Texas",
    },
    {
        years: "2023 - 2025",
        degree: "AAS in Computer Programming",
        institution: "Austin Community College",
    }
]

const experience = [
    {
        years: "Apr 2024 - Present",
        role: "Bilingual Customer Service Representative",
        institution: "Power Finance Texas",
    },
    {
        years: "Mar 2024 - May 2024",
        role: "Bilingual Customer Support Specialist (Contract)",
        institution: "Foundever LLC - Turbotax",
    },
    {
        years: "Apr 2022 - Jan 2023",
        role: "Full Stack Developer (Intern)",
        institution: "Social Oplesk",
    }
]

const Journey = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    >
    <div className="flex xl:flex-row gap-36 flex-col items-center xl:items-baseline justify-center">
        <div>
        <h2 className="h2 mb-8">
            Education
        </h2>
        {
            education.map((item, index) => {
                return (
                    <div key={index} className="flex items-center gap-12 w-full">
                        {/* bullets */}
                        <div className="flex flex-col w-max justify-center items-center">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="w-[1px] h-[180px] bg-white/10"></div>
                        </div>
                        {/* text */}
                        <div className="max-w-[500px]">
                            <p className="mb-6 text-lg text-white/50">{item.years}</p>
                            <h4 className="h4 mb-2">{item.degree}</h4>
                            <p className="text-lg text-white/50">{item.institution}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div>
        <h2 className="h2 mb-8 text-secondary">
            Experience
        </h2>
        {
            experience.map((item, index) => {
                return (
                    <div key={index} className="flex items-center gap-12 w-full">
                        {/* bullets */}
                        <div className="flex flex-col w-max justify-center items-center">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="w-[1px] h-[180px] bg-white/10"></div>
                        </div>
                        {/* text */}
                        <div className="max-w-[500px]">
                            <p className="mb-6 text-lg text-white/50">{item.years}</p>
                            <h4 className="h4 mb-2">{item.role}</h4>
                            <p className="text-lg text-white/50">{item.institution}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
    </motion.div>
  )
}

export default Journey