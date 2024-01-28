import { Box, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Index = ({ img, name, desc, link }) => {
    return (
        <Box
            border="1px solid #7175767F"
            alignContent={"center"}
            alignItems="center"
            justifyContent={"center"}
            textAlign={"center"}
            borderRadius={1}
            position="relative"
            minHeight={"17rem"}
        >
            <img src={img} width={"100%"} alt="pic" />



            <Box pl="1rem" pr="1rem">
                <Typography
                    fontFamily="Poppins"
                    fontWeight="500"
                    color="#22BCD4"
                >{name}
                </Typography>

                <Typography
                    fontFamily="Poppins"
                    mb="2rem"

                >{desc}
                </Typography>


                <a href={link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ position: 'absolute', right: "5px", bottom: "0" }}
                ><OpenInNewIcon /></a>









            </Box>
        </Box >
    );
}

export default Index;