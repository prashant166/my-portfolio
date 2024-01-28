import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import myfolio from "./images/myfolio.png";
import fashioned from "./images/fashioned.png";
import learnify from "./images/learnify.png";
import { Fade } from "react-awesome-reveal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="Projects" />

      <Box
        display="flex"
        maxWidth="80%"
        ml="auto"
        mr="auto"
        mt="3rem"
        flexDirection={"column"}
        gap="2rem"
        mb="10rem"
      >
        <Fade cascade damping={0.1}>
          <Box flexBasis="100%" pb="2rem" borderBottom="1.5px solid #8F98A07D">
            <Typography
              // backgroundColor="#FEFFFFEA"
              fontSize="1.5rem"
              fontFamily={"Poppins"}
              color="#C9F4FB"
              fontWeight={400}
              pl="1rem"
              pr="1rem"
              pt="0.5rem"
            >
              {"    >>  "}Fashioned - Social Media Application
            </Typography>
            <Box display="flex" flexDirection={isNotMobile ? "row" : "column"}>
              <img
                src={fashioned}
                width={isNotMobile ? "40%" : "100%"}
                alt="pic"
                style={{
                  padding: "1rem",
                }}
              />
              <Typography fontFamily={"Poppins"} p="1rem" color="#FFFFFF">
                Designed and built a social media web application that does CRUD
                operations made specially for the community of fashion freaks.
                Users can upload their posts with images and captions related to
                new emerging fashion trends, and show off their outfits to their
                friend users.
                <br />
                <br />
                <Typography color="#7FE3F2" fontFamily={"Poppins"}>
                  Tech Stack : MongoDB, ExpressJs, ReactJs, NodeJs, Material UI{" "}
                  <br />
                  <br />
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid white"
                  width="fit-content"
                  borderRadius="5px"
                  padding="0.3rem"
                >
                  <a
                    href="https://fashioned.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    fontSize="10px"
                  >
                    Open <OpenInNewIcon fontSize="small" />
                  </a>
                </Box>
              </Typography>
            </Box>
          </Box>

          {/* //second */}

          <Box flexBasis="100%" pb="2rem" borderBottom="1.5px solid #8F98A07D">
            <Typography
              fontSize="1.5rem"
              fontFamily={"Poppins"}
              color="#BDE0E6"
              fontWeight={400}
              pr="1rem"
              pt="0.5rem"
              pl="1rem"
            >
              {"    >>  "}Myfolio - Portfolio Building Application
            </Typography>
            <Box display="flex" flexDirection={isNotMobile ? "row" : "column"}>
              <img
                src={myfolio}
                width={isNotMobile ? "40%" : "100%"}
                alt="pic"
                style={{
                  padding: "1rem",
                }}
              />
              <Typography fontFamily={"Poppins"} p="1rem">
                Designed and built an online platform to help users create
                personal portfolios, and turn them into deployable websites to
                use for job applications and hiring.
                <br />
                <br />
                <Typography color="#7FE3F2" fontFamily={"Poppins"}>
                  Tech Stack: MongoDB, Express.js, Node.js, EJS, CSS
                  <br />
                  <br />
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid white"
                  width="fit-content"
                  borderRadius="5px"
                  padding="0.3rem"
                >
                  <a
                    href="https://myfolio-backend.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    fontSize="10px"
                  >
                    Open <OpenInNewIcon fontSize="small" />
                  </a>
                </Box>
              </Typography>
            </Box>
          </Box>

          {/* third */}

          <Box flexBasis="100%">
            <Typography
              fontSize="1.5rem"
              fontFamily={"Poppins"}
              color="#AEE3EB"
              fontWeight={400}
              pr="1rem"
              pt="0.5rem"
              pl="1rem"
            >
              {"    >>  "}Learnify - AI Powered Learning Platform
            </Typography>
            <Box display="flex" flexDirection={isNotMobile ? "row" : "column"}>
              <img
                src={learnify}
                width={isNotMobile ? "40%" : "100%"}
                alt="pic"
                style={{
                  padding: "1rem",
                }}
              />
              <Typography fontFamily={"Poppins"} p="1rem" color="#FFFFFF">
                Developed the frontend for an AI powered E-learning website that
                uses OpenAI’s GPT-3 for a personalized learning experience.
                Users can search for specific topics and receive question banks,
                online resources and nearby libraries according to the topics
                searched.
                <br />
                <br />
                <Typography color="#7FE3F2" fontFamily={"Poppins"}>
                  Tech Stack: HTML, CSS, Bootstrap, JavaScript, Flask,
                  SQLAlchemy
                  <br />
                  <br />
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid white"
                  width="fit-content"
                  borderRadius="5px"
                  padding="0.3rem"
                >
                  <a
                    href="https://github.com/advika-kharat/learnify/"
                    fontSize="10px"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                    <OpenInNewIcon fontSize="small" />
                  </a>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>

      <Navbar prev="skills" next="fun" />
    </Box>
  );
};

export default Projects;
