import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import jyra from "./images/jyra.png";
import nodebrew from "./images/nodebrew.png";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

const Exp = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box mb="10rem">
      <Heading name="Experience" />

      <Box mt="3rem" maxWidth={"80%"} ml="auto" mr="auto">
        <Fade cascade damping={0.5}>
          <Box border="1px solid #13BAD4" mb="2rem">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Frontend Development Intern - Nodebrew
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                Dec 2023 - Feb 2024
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <img
                src={nodebrew}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="pic"
              />
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                Designed and developed the frontend of the Nodebrew website for
                an all-women hackathon organized by a non-profit organization in
                a team of talented women. <br /> Utilized frontend technologies
                including React.js, HTML, CSS, and Bootstrap to create an
                engaging and user-friendly interface.
              </Typography>
            </Box>
          </Box>

          <Box border="1px solid #13BAD4">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "}Software Engineering Intern - Jyra Consulting Inc
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                Jun 2023 - Aug 2023
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <img
                src={jyra}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="pic"
              />
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                Leveraged the Google Cloud Platform to create, manage, and host
                a WordPress website for the company. Seamlessly connected the
                website to the domain and implemented load balancers, ensuring
                optimal performance and a cohesive online presence.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>
      <Navbar prev="" next="skills" />
    </Box>
  );
};

export default Exp;
