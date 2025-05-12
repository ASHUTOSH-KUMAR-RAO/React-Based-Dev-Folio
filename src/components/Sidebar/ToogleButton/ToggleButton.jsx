import { motion } from "framer-motion";
import { memo } from "react";
// import "./toggleButton.scss";

const ToggleButton = ({ setOpen, isOpen }) => {
  return (
    <motion.button 
      className="toggle-button"
      onClick={() => setOpen((prev) => !prev)}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          transition={{ duration: 0.3 }}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          transition={{ duration: 0.3 }}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          transition={{ duration: 0.3 }}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default memo(ToggleButton);