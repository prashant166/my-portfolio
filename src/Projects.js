import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import myfolio from "./images/myfolio.png";
import mvr from "./images/mvr.png";
import fashioned from "./images/fashioned.png";
import transactions from "./images/transactions.png";
import learnify from "./images/learnify.png";
import { Fade } from "react-awesome-reveal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectComponent from "./components/projects";

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
          <ProjectComponent
            title="Myfolio-Portfolio Building Application"
            description="Designed and built an online platform to help users create personal portfolios, and turn them into deployable websites to use for job applications and hiring."
            tech="MongoDB, Express.js, Node.js, EJS, CSS"
            img={myfolio}
            link="https://myfolio-backend.onrender.com/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Movie Recommmendation System"
            description="Implemented a recommendation system to display top five movies
                closest to the movie selected by users. Used content-based
                filtering and cosine similarity to measure movie feature
                similarity."
            tech="Sci-Kit Learn, Pandas, Python, Streamlit"
            img={mvr}
            link="https://advika-recommends-movies.streamlit.app/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Transactions Tracker"
            description="  Developed a robust Spring Boot application to help users
                efficiently track their daily transactions. Utilized Microsoft
                Azure to create, deploy and manage a secure, cloud-based MySQL
                database, ensuring data integrity and scalability."
            tech="Spring Boot, Microsoft Azure, Thymeleaf, MySQL,
                  Bootstrap"
            img={transactions}
            link="https://github.com/advika-kharat/moneytracc"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Fashioned - Social Media Application"
            description=" Designed and built a social media web application that does CRUD
                operations made specially for the community of fashion freaks.
                Users can upload their posts with images and captions related to
                new emerging fashion trends, and show off their outfits to their
                friend users."
            tech="MongoDB, ExpressJs, ReactJs, NodeJs, Material UI"
            img={fashioned}
            link="https://fashioned.netlify.app"
            isNotMobile={isNotMobile}
          />

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
