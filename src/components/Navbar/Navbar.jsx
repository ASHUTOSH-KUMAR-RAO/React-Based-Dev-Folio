// import Sidebar from "../sidebar/Sidebar";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ashutosh
        </motion.span>
        <div className="social">
          <a key="github" href="https://github.com/ASHUTOSH-KUMAR-RAO">
            <img src="/GitHub.png" alt="GitHub Profile" />
          </a>
          <a key="linkedin" href="https://www.linkedin.com/in/ashutosh-kumar-rao/">
            <img src="/LinkedIn.png" alt="LinkedIn Profile" />
          </a>
          <a
            key="twitter"
             href="https://x.com/RaoAshutosh19"
          >
            <img src="/Twitter.png" alt="Twitter Profile" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
