import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Langs from "./components/langs";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  // Variants for cascading animation
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <Box>
      <Heading name="Skills" />
      
      <motion.div initial="hidden" animate="visible" variants={fadeVariants}>
        <Box
          maxWidth={isNotMobile ? "60%" : "100%"}
          ml="auto"
          mr="auto"
          mt="2rem"
          mb="10rem"
          display="grid"
          gridTemplateColumns={isNotMobile ? "repeat(4,1fr)" : "repeat(3,1fr)"}
        >
          <motion.div variants={fadeVariants}>
            <Langs
              name="Python"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="C++"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="JavaScript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="React"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Node.js"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Express.js"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Redux"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="TypeScript"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="HTML"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="CSS"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="React Native"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="MongoDB"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="MySQL"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="PostgreSQL"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Kafka"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="WebSockets"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Git"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="GitHub"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Google Cloud"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
            />
          </motion.div>
          <motion.div variants={fadeVariants}>
            <Langs
              name="Postman"
              url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
            />
          </motion.div>
        </Box>
      </motion.div>

      <Navbar prev="experience" next="projects" />
    </Box>
  );
};

export default Skills;
