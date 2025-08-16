"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Cryptopals Wallet",
    description:
      "A functional Crypto Wallet done in two months with a classmate where I learned about teamwork and how to work under pressure. It uses BINANCE API to manage REAL money.",
    stack: [{ name: "React" }, { name: "JavaScript" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Express" }, { name: "JWT (JSON Web Token)" }, { name: "Netlify" }],
    image: "/assets/projects-preview/cryptopals.webp",
    live: "https://github.com/Andresc06/cryptopals-Front",
    github: "https://github.com/Andresc06/cryptopals-Front",
  },
  {
    num: "02",
    category: "Game Development",
    title: "Dungeon Tiles",
    description:
      "This is a game written in JavaScript that involves moving around a character in a dungeon-like environment, collecting a key, and opening doors while avoiding enemies. It uses Canvas API as base of the map engine.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Sweetalert"}, { name: "Howler.js" }],
    image: "/assets/projects-preview/dungeon-tiles.webp",
    live: "https://dungeon-tiles.vercel.app/",
    github: "https://github.com/Andresc06/Dungeon-Tiles",
  },
  {
    num: "03",
    category: "Web Development",
    title: "Payroll Manager",
    description:
      "Web app designed to help managers generate payrolls for employees within a company. The app uses a JSON database to store employee and concept data. It features interactive forms for creating and assigning employees and payroll concepts (payouts and discounts)",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/projects-preview/payroll.webp",
    live: "https://payroll-manager.vercel.app/",
    github: "https://github.com/Andresc06/payroll-manager",
  },
  {
    num: "04",
    category: "Web Application",
    title: "CityScope",
    description:
      "A CodeIgniter 4 web application featuring News API integration with New York Times, dynamic page management, and an AJAX-powered contact system. Built with modular view templates for consistent UI and responsive design.",
    stack: [{ name: "PHP" }, { name: "CodeIgniter 4" }, { name: "JavaScript" }, { name: "AJAX" }, { name: "NYTimes API" }],
    image: "/assets/projects-preview/ny-times.webp",
    live: "https://github.com/Andresc06/cityscope-project",
    github: "https://github.com/Andresc06/cityscope-project",
  },
  {
    num: "05",
    category: "Web Development",
    title: "Portfolio",
    description:
      "This portfolio is a showcase of my skills and projects. It is built with Next.js, Tailwind CSS, and Framer Motion for animations. The design is responsive and optimized for performance.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/assets/projects-preview/portfolio.webp",
    live: "https://portfolio-andrescontreras.vercel.app/",
    github: "https://github.com/Andresc06/portfolio-project",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.realIndex;

    // set project to the current slide
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent [-webkit-text-stroke:2px_white]">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60 text-justify">{project.description}</p>
              {/* Project Stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index < project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 shadow-2xl drop-shadow-xl rounded-xl overflow-hidden">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.description}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-xl"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
