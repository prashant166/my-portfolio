import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import myfolio from "./images/pulsecare.png";
import mvr from "./images/bookstore.png";
import fashioned from "./images/bookmyshow.png";
import phisnet from "./images/phishnet.png"
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
            link="https://care-pulse-healthpulse.vercel.app/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Bookstore Application"
            description="Developed a bookstore application offers a user-friendly platform with a smooth and visually appealing interface. It features dark mode for comfortable browsing, a free books section accessible to all, and an exclusive courses section for authorized users. The application ensures secure user authentication and is fully optimized for mobile and desktop devices, providing a seamless experience across platforms."
            tech="ReactJs, NodeJs, ExpressJs, MongoDB, Tailwind CSS, DaisyUI"
            img={mvr}
            link="https://bookstore-ivory-two.vercel.app/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="PhishNet.AI - Tool to verify fake websites"
            description="Phisnet is a tool helps identify malicious URLs and alerts users in real time. By incorporating machine learning models and web scraping techniques, PhishNet.AI can effectively differentiate between safe and phishing websites, helping users stay protected online."
            tech="Javascript, Machine Learning, Python"
            img={phisnet}
            link="https://github.com/prashant166/PhishNet.AI"
            isNotMobile={isNotMobile}
          />

<ProjectComponent
            title="Merge - Multi-User Video Calling Application"
            description="  Merge is a cutting-edge video communication platform designed for seamless multi-user connectivity. With dynamic bitrate adjustment, it ensures lag-free video calls, even in challenging network conditions. Merge includes powerful features like screen sharing for collaborative sessions, live chat to keep users engaged, and an AI-powered automated bot delivering smart, real-time replies. Whether for work or play, Merge creates an immersive, smooth, and interactive video experience that keeps you connected and engaged"
            tech="JavaScript, CSS, WebRTC"
            img={transactions}
            link="https://github.com/prashant166/Merge-VideoChat"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="CinePlus - Ticket Booking Application"
            description=" Designed and built a backend focused ticket booking application where user can select seats and movie of their choice and also can retrieve previous bookings, also would get email on every successful booking."
            tech="MongoDB, ExpressJs, ReactJs, NodeJs"
            img={fashioned}
            link="https://github.com/prashant166/bookMyShow"
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
              {"    >>  "}Grocery Store Management
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
              The Grocery Store Management project simplifies operations with Python and Flask for the backend and a MySQL-powered frontend. It handles inventory, sales, and orders efficiently while enabling customer management and personalized service. Built-in analytics provide insights into sales trends and inventory performance, aiding better decision-making.
                <br />
                <br />
                <Typography color="#7FE3F2" fontFamily={"Poppins"}>
                  Tech Stack: HTML, CSS, Bootstrap, JavaScript, Python(Flask),
                  MySQL
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
                    href="https://github.com/prashant166/grocery-store"
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
