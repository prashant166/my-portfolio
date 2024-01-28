import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import { useMediaQuery } from "@mui/material";
import file from "./images/file.png";
import { Modal } from "@mui/material";
import { useState } from "react";
import resume from "./images/resume.pdf";
import ContactModal from "./components/contact";
import { Fade } from "react-awesome-reveal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20rem",
  boxShadow: 100,
  backgroundColor: "#313030",
  p: 0,
  borderRadius: "10px",
  textAlign: "center",
};

const Contact = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Heading name="ContactMe" />

      <Fade cascade damping={0.5}>
        <Box
          display={isNotMobile ? "flex" : "grid"}
          gridTemplateColumns={"repeat(2,1fr)"}
          gap={isNotMobile ? "3rem" : "2rem"}
          maxWidth="80%"
          ml="auto"
          mr="auto"
          mt="6rem"
        >
          {/* File 1 */}
          <Box>
            <button
              style={{
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <Box>
                <img src={file} width="100px" alt="pic" />
                <Typography fontFamily={"Poppins"}>resume</Typography>
              </Box>
            </button>
            <Modal
              open={open}
              borderRadius="10px"
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                backdropFilter: "blur(1px)", // Add backdrop filter for blur effect
                backgroundColor: "rgba(49, 48, 48, 0.8)", // Adjust the rgba values as needed
              }}
            >
              <Box sx={style}>
                <Typography
                  backgroundColor="#69ADB5"
                  color="black"
                  fontFamily={"Courier Prime"}
                  fontSize="1.2rem"
                  textAlign={"left"}
                  borderRadius="5px 5px 0 0"
                >
                  {">>"}Resume
                </Typography>
                <Box p="1rem" backgroundColor="#313030" borderRadius="5px">
                  <a
                    href={resume}
                    download="AdvikaKharat_Resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      style={{
                        backgroundColor: "#313030",
                        fontFamily: "Courier Prime",
                        padding: "0.5rem",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        border: "1.5px solid #69ADB5",
                        borderRadius: "10px",
                        color: "#69ADB5",
                      }}
                    >
                      Download Resume
                    </button>
                  </a>

                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      backgroundColor: "#313030",
                      paddingTop: "1rem",
                    }}
                  >
                    click anywhere to close
                  </Typography>
                </Box>
              </Box>
            </Modal>
          </Box>

          <ContactModal
            name="email"
            url="mailto:kharatadvika.com"
            desc="kharatadvika@gmail.com"
          />
          <ContactModal
            name="linkedin"
            url="https://www.linkedin.com/in/advika-kharat-41917322a/"
            desc="view linkedin profile"
          />
          <ContactModal
            name="github"
            url="https://github.com/advika-kharat"
            desc="view github profile"
          />
          <ContactModal
            name="leetcode"
            url="https://leetcode.com/advika_kharat"
            desc="view leetcode profile"
          />
        </Box>
      </Fade>

      <Navbar prev="fun" />
    </Box>
  );
};

export default Contact;
