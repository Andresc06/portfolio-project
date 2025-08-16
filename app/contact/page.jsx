"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 346 264 1335",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "andrescontreras370@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Austin, TX, USA",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[60%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60 text-justify max-w-full break-words">
              I'm always excited to collaborate on new projects. I'd love to hear from you. Let's discuss how we can work together to create something amazing.
            </p>
            {/* input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input required type="firstname" placeholder="First Name" />
              <Input required type="lastname" placeholder="Last Name" />
              <Input required type="email" placeholder="Email" />
              <Input required type="phone" placeholder="Phone" />
            </div>
            {/* message textarea */}
            <Textarea required placeholder="Type your message here." className="h-[200px]" />
            {/* submit button */}
            <Button className="max-w-40">Send Message</Button>
          </form>
        </div>
        {/* contact info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
