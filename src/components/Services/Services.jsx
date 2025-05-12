import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: 300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://raw.githubusercontent.com/safak/animated-portfolio/refs/heads/completed/public/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack Development</h2>
          <p>
            I specialize in building end-to-end web applications using modern
            technologies like React, Node.js, and MongoDB. From designing
            responsive frontends to creating robust backend APIs, I ensure your
            project is scalable and efficient.
          </p>
          <a href="/services/full-stack">
            <button>Explore</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>GitHub Contributions</h2>
          <p>
            I actively contribute to open-source projects on GitHub, resolving
            bugs, adding features, and collaborating with developers worldwide.
            My experience ensures clean, maintainable, and well-documented code
            for every project.
          </p>
          <a href="/services/github-contributions">
            <button>Explore</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Team Collaboration</h2>
          <p>
            I excel in working with cross-functional teams, ensuring smooth
            communication and timely delivery of projects. My collaboration
            skills help in aligning technical solutions with business goals
            effectively.
          </p>
          <a href="/services/team-collaboration">
            <button>Explore</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem Solving</h2>
          <p>
            I tackle complex challenges with a logical and analytical approach,
            delivering innovative solutions that meet user needs. My focus is on
            optimizing performance and enhancing user experience in every
            project.
          </p>
          <a href="/services/problem-solving">
            <button>Explore</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;