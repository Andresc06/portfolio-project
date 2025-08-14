import { motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] }
}

// calculate the reverse index for the stairs
const reverseIndex = (index) => {
    const totalStairs = 6; // Adjust this number based on the number of stairs you want
    return totalStairs - index - 1;
}

const Stairs = () => {
  return <>
  {[...Array(6)].map((_, index) => {
    return (
    <motion.div
      key={index}
      className="h-full w-full bg-white relative"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: reverseIndex(index) * 0.1 // Adjust the delay based on the index
      }}
      variants={stairAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    />
    );
  })}
  </>;
}

export default Stairs