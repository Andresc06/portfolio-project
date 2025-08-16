"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";

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
];

import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formRef = useRef(null);

  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setMessage('');
    setMessageType('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData(e.target);

    const firstName = formData.get('firstName')?.toString().trim();
    const lastName = formData.get('lastName')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const messageText = formData.get('message')?.toString().trim();

    console.log('Form Data:', { firstName, lastName, email, messageText }); // Debugging log

    if (!firstName || !lastName || !email || !messageText) {
      setMessage('All required fields must be filled.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Your message was sent successfully!');
        setMessageType('success');
        window.alert('Thank you for your message! I will get back to you soon.');
        clearForm();
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Sorry, your message could not be sent. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60 text-justify max-w-full break-words">
                I'm always excited to collaborate on new projects. I'd love to hear from you. Let's discuss how we can work together to create something amazing.
              </p>

              {message && (
                <div
                  className={`p-3 rounded-md ${
                    messageType === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input required name="firstName" type="text" placeholder="First Name" />
                <Input required name="lastName" type="text" placeholder="Last Name" />
                <Input required name="email" type="email" placeholder="Email" />
                <Input name="phone" type="tel" placeholder="Phone" />
              </div>
              <Textarea
                required
                name="message"
                placeholder="Type your message here."
                className="h-[200px]"
              />
              <div className="flex gap-4">
                <Button type="submit" disabled={isSubmitting} className="max-w-40">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <Button type="button" onClick={clearForm} variant="outline" className="max-w-40">
                  Clear
                </Button>
              </div>
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
                      <h3 className="text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
