import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const atomxelLogo = "https://media.licdn.com/dms/image/v2/C4E0BAQE_SAlUpXqgyg/company-logo_200_200/company-logo_200_200/0/1633429515481?e=1740614400&v=beta&t=UVtOYnIY84MuDwT9u1bzVcvRz62ouxmI8k4FRCloO5E";

const Exp = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");

  // Motion Variants for Fade
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <Box mb="10rem">
      <Heading name="Experience" />

      <Box mt="3rem" maxWidth={"80%"} ml="auto" mr="auto">
        {/* Motion wrapper for fade animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeVariants}>
          {/* AtomXel Experience */}
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
                {">> "} SDE Intern - AtomXel
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                July 2024 – Present
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
                src={atomxelLogo}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="AtomXel Logo"
              />
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                • Engineered and deployed scalable RESTful APIs with the MERN
                stack, enhancing data retrieval speed and user experience.<br />
                • Led cross-platform app development with React Native, Next.js, and TypeScript
                for flagship projects, boosting performance and user engagement.<br />
                • Optimized PostgreSQL schemas by deriving only necessary data
                columns and using relational model associations and indexing,
                achieving 40-55% faster query performance for managing 10,000+ products
                in a high-traffic B2B application.<br />
                • Implemented a tree-based hierarchical category system (L1, L2, L3)
                for product browsing, combined with granular category-based access
                control to enable personalized content delivery based on user roles
                and subscriptions.<br />
                • Integrated a ticket and inquiry-based chat system, providing users
                with timely notifications for product or message updates, enhancing
                customer support responsiveness and streamlining issue resolution processes.<br />
                • Created admin dashboard features, including real-time analytics, session tracking, event logging, and visualized user behavior data.<br />
                • Added location-based auto-fill to pre-fill addresses in product listings and profiles, enhancing user experience.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
      <Navbar prev="" next="skills" />
    </Box>
  );
};

export default Exp;
