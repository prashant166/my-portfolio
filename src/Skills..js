import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Langs from "./components/langs";
import { useMediaQuery } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="Skills" />
      <Box
        maxWidth={isNotMobile ? "60%" : "100%"}
        ml="auto"
        mr="auto"
        mt="2rem"
        mb="10rem"
        display="grid"
        gridTemplateColumns={isNotMobile ? "repeat(4,1fr)" : "repeat(3,1fr)"}
      >
        <Fade cascade damping={0.1}>
          {/* Core Development Skills */}
          <Langs
            name="Python"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <Langs
            name="C++"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          />
          <Langs
            name="JavaScript"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <Langs
            name="React"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <Langs
            name="Node.js"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <Langs
            name="Express.js"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
          <Langs
            name="Redux"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
          <Langs
            name="TypeScript"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />

          {/* Frontend Skills */}
          <Langs
            name="HTML"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <Langs
            name="CSS"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          {/* <Langs
            name="Tailwind CSS"
            url="https://github.com/devicons/devicon/tree/v2.16.0/icons/tailwindcss/tailwindcss-plain.svg"
          /> */}
          <Langs
            name="React Native"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />

          {/* Backend and Databases */}
          <Langs
            name="MongoDB"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <Langs
            name="MySQL"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />
          <Langs
            name="PostgreSQL"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />

          {/* Tools and Supporting Technologies */}
          <Langs
            name="Kafka"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
          />
          <Langs
            name="WebSockets"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
          />
          <Langs
            name="Git"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <Langs
            name="GitHub"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <Langs
            name="Google Cloud"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
          />
          <Langs
            name="Postman"
            url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
          />

          {/* Programming Languages */}
          
        </Fade>
      </Box>

      <Navbar prev="experience" next="projects" />
    </Box>
  );
};

export default Skills;
