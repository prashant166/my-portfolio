import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Index from "./components/fun";
import fmr from "./images/car.png";
import dad from "./images/quicksign.png";
import calci from "./images/typing.png";
import blog from "./images/minimalist.png";
import filesharing from "./images/filesharing.png";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const Fun = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  // Variants for cascading animation
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <Box>
      <Heading name="JustForFun" />

      <motion.div initial="hidden" animate="visible" variants={fadeVariants}>
        <Box
          display="grid"
          gridTemplateColumns={isNotMobile ? "repeat(3,1fr)" : "repeat(1,ifr)"}
          gap="2rem"
          maxWidth={"80%"}
          ml="auto"
          mr="auto"
          mt="3rem"
          mb="10rem"
        >
          <motion.div variants={fadeVariants}>
            <Index
              img={dad}
              name="QuickSign - Digital signature app"
              desc="You want to sign a document digitally? This is for you"
              link="https://github.com/prashant166/instant-sign"
            />
          </motion.div>

          <motion.div variants={fadeVariants}>
            <Index
              img={fmr}
              name="Car Management App"
              desc="List, View, Update, Search your favourite cars"
              link="https://github.com/prashant166/car-frontend"
            />
          </motion.div>

          <motion.div variants={fadeVariants}>
            <Index
              img={blog}
              name="Minimalist Site"
              desc="Clone of minimalist site (did it for fun while learning NextJs)"
              link="https://github.com"
            />
          </motion.div>

          <motion.div variants={fadeVariants}>
            <Index
              img={calci}
              name="Typing test"
              desc="Test how fast your fingers do run on the keyboard"
              link="https://github.com/prashant166/typingtest"
            />
          </motion.div>

          <motion.div variants={fadeVariants}>
            <Index
              img={filesharing}
              name="File Sharing App"
              desc="Get a downloadable link of your files"
              link="https://github.com/prashant166/file-sharing-app"
            />
          </motion.div>
        </Box>
      </motion.div>

      <Navbar prev="projects" next="contact" />
    </Box>
  );
};

export default Fun;
