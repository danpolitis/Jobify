import React from "react"
import Typography from "@mui/material/Typography";



function Test(props) {
  return (
    <Typography
      variant="h2"
      color="text.primary"
      align="center"
      {...props}
    >

    </Typography>
  );
}

export default Test