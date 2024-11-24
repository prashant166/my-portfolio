import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Index from "./components/fun";
import fmr from "./images/car.png";
import dad from "./images/quicksign.png";
import calci from "./images/typing.png";
import blog from "./images/minimalist.png";
import filesharing from "./images/filesharing.png"
import { useMediaQuery } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Fun = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="JustForFun" />

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
        <Fade cascade damping={0.1}>
          <Index
            img={dad}
            name="QuickSign - Digital signature app"
            desc="You want to sign a document digitally? This is for you"
            link="https://github.com/prashant166/instant-sign"
          />

          <Index
            img={fmr}
            name="Car Managment App"
            desc="List, View, Update, Search your favourite cars"
            link="https://github.com/prashant166/car-frontend"
          />

          <Index
            img={blog}
            name="Minimalist Site"
            desc="Clone of minimalist site(did it for fun while learning NextJs"
            link="https://github.com"
          />
{/* 
          <Index
            img={kala}
            name="kala"
            desc="art selling platform"
            link="https://kala-art.netlify.app/"
          />

          <Index
            img={dino}
            name="jump dino jump"
            desc="infamous internet dinosaur game"
            link="https://adisdinogame.netlify.app/"
          /> */}

          <Index
            img={calci}
            name="Typing test"
            desc="test how fast your fingers do run on the keyboard"
            link="https://github.com/prashant166/typingtest"
          />
          <Index
            img={filesharing}
            name="File Saring App"
            desc="Get a downloadable link of your files"
            link="https://github.com/prashant166/file-sharing-app"
          />
        </Fade>
      </Box>

      <Navbar prev="projects" next="contact" />
    </Box>
  );
};

export default Fun;
