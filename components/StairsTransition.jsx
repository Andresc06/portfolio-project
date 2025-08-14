"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairsTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="fixed top-0 left-0 right-0 h-screen w-screen pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairsTransition;
