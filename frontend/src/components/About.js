import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is my first CRUD appliation 
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          Followed code from Indian coders
        </Typography>
      </Box>
    </div>
  );
};

export default About;