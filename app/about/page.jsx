"use client";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

// components
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience/education" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience/education">Experience/Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          { /* Content for each tab */}
          <div className="w-full min-h-[70vh]">
            { /* Experience/Education Tab Content */}
            <TabsContent value="experience/education" className="w-full">
              <Journey />
            </TabsContent>
            { /* Skills Tab Content */}
            <TabsContent value="skills" className="w-full h-full">
              <Skills />
            </TabsContent>
            { /* Certificates Tab Content */}
            <TabsContent value="certificates" className="w-full">
              <Certificates />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
