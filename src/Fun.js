import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Index from "./components/fun";
import fmr from "./images/car.png";
import kala from "./images/merge.png";
import dino from "./images/phishnet.png";
import dad from "./images/quicksign.png";
import calci from "./images/typing.png";
import blog from "./images/minimalist.png";
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
            name="random dad joke generator"
            desc="press the button, generate a dad joke"
            link="https://dadjokesrandom.netlify.app/"
          />

          <Index
            img={fmr}
            name="find my recipe"
            desc="a search engine for recipes on the internet"
            link="https://find-my-recipe-adi.netlify.app/"
          />

          <Index
            img={blog}
            name="adi's blog"
            desc="a blog application"
            link="https://github.com/advika-kharat/Reactjs-Blog_Application"
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
            name="calculator"
            desc="want to add something up?"
            link="https://adis-calci.netlify.app/"
          />
        </Fade>
      </Box>

      <Navbar prev="projects" next="contact" />
    </Box>
  );
};

export default Fun;
