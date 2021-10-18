import React from "react"
import Typography from "@mui/material/Typography";



function Home(props) {
  return (
    <Typography
      variant="h2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Home Comp
    </Typography>
  );
}

export default Home