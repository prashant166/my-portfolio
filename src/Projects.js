import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import myfolio from "./images/pulsecare.png";
import mvr from "./images/bookstore.png";
import fashioned from "./images/bookmyshow.png";
import transactions from "./images/merge.png";
import learnify from "./images/grocerystore.png";
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
            title="CarePulse - Healthcare appointment booking app"
            description="A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications. "
            tech="TypeScript, NextJs, Tailwind CSS, ShadCN, Twilio, Appwrite"
            img={myfolio}
            link="https://myfolio-backend.onrender.com/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Bookstore Application"
            description="Developed a bookstore application offers a user-friendly platform with a smooth and visually appealing interface. It features dark mode for comfortable browsing, a free books section accessible to all, and an exclusive courses section for authorized users. The application ensures secure user authentication and is fully optimized for mobile and desktop devices, providing a seamless experience across platforms."
            tech="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwind CSS, DaisyUI"
            img={mvr}
            link="https://advika-recommends-movies.streamlit.app/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Merge - Multi-User Video Calling Application"
            description="  Merge is a cutting-edge video communication platform designed for seamless multi-user connectivity. With dynamic bitrate adjustment, it ensures lag-free video calls, even in challenging network conditions. Merge includes powerful features like screen sharing for collaborative sessions, live chat to keep users engaged, and an AI-powered automated bot delivering smart, real-time replies. Whether for work or play, Merge creates an immersive, smooth, and interactive video experience that keeps you connected and engaged"
            tech="JavaScript, CSS, WebRTC"
            img={transactions}
            link="https://github.com/advika-kharat/moneytracc"
            isNotMobile={isNotMobile}
          />

<ProjectComponent
            title="Merge - Multi-User Video Calling Application"
            description="  Merge is a cutting-edge video communication platform designed for seamless multi-user connectivity. With dynamic bitrate adjustment, it ensures lag-free video calls, even in challenging network conditions. Merge includes powerful features like screen sharing for collaborative sessions, live chat to keep users engaged, and an AI-powered automated bot delivering smart, real-time replies. Whether for work or play, Merge creates an immersive, smooth, and interactive video experience that keeps you connected and engaged"
            tech="JavaScript, CSS, WebRTC"
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
