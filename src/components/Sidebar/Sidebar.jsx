import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./ToogleButton/toggleButton.jsx";

// Animation variants moved outside component to prevent recreation on each render
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(prev => !prev);

  return (
    <motion.div 
      className="sidebar" 
      animate={open ? "open" : "closed"}
      initial="closed"
    >
      <AnimatePresence>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
      </AnimatePresence>
      <ToggleButton setOpen={toggleSidebar} isOpen={open} />
      <div className="button-placeholder" style={{ width: '50px', height: '50px', position: 'fixed', top: '25px', left: '25px' }} />
    </motion.div>
  );
};

export default memo(Sidebar);