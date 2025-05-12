import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 400,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  mobileInitial: {
    opacity: 0,
  },
  mobileAnimate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const isMobile = window.innerWidth <= 768; // Yeh temporary hai, better approach ke liye useMediaQuery use karo

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial={isMobile ? "mobileInitial" : "initial"}
          animate={isMobile ? "mobileAnimate" : "animate"}
        >
          <motion.h2 variants={textVariants}>Ashutosh Kumar Rao</motion.h2>
          <motion.h1 variants={textVariants}>
           Full-Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              style={{ cursor: "pointer" }}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              style={{ cursor: "pointer" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Fullstack Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;