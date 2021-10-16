import React from "react"
import Typography from "@mui/material/Typography";



function Home(props) {
  return (
    <Typography
      variant="bodh2y2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Test Home Comp
      <h1> TEST </h1>
    </Typography>
  );
}

export default Home