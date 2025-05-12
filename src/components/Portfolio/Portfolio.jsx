import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Time Messenger Web App",
    img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A modern chat application built with Next.js, Socket.IO, and Prisma that enables real-time messaging between users. Features include instant message delivery, read receipts, typing indicators, and end-to-end encryption for secure conversations. The responsive design ensures seamless experience across desktop and mobile devices.",
  },
  {
    id: 2,
    title: "Full-Stack YouTube Clone",
    img: "https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A comprehensive video-sharing platform replicating core YouTube functionalities using React, Node.js, and MongoDB. Users can upload videos, create channels, subscribe to content creators, like and comment on videos, and enjoy personalized recommendations based on viewing history. Integrated with AWS S3 for efficient video storage and streaming.",
  },
  {
    id: 3,
    title: "AI-Based Interview System",
    img: "https://images.pexels.com/photos/7691367/pexels-photo-7691367.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "An innovative interview preparation platform powered by machine learning algorithms to simulate realistic interview scenarios. The system adapts questioning based on user responses, provides real-time feedback on communication skills, and offers detailed performance analytics. Features include industry-specific question banks and personalized improvement recommendations.",
  },
  {
    id: 4,
    title: "AI Shorts Generator",
    img: "https://images.pexels.com/photos/7034829/pexels-photo-7034829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A cutting-edge application that leverages AI to automatically generate short-form video content from longer videos. Using advanced algorithms for scene detection, content analysis, and engagement prediction, the tool identifies the most compelling segments to create attention-grabbing shorts optimized for social media platforms.",
  },
  {
    id: 5,
    title: "Finance Dashboard",
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A comprehensive financial analytics dashboard built with React and D3.js that visualizes complex financial data in an intuitive interface. The application provides real-time tracking of investments, expense analysis, budget forecasting, and personalized financial insights. Features include interactive charts, customizable widgets, and automated report generation.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;