import React from "react"
import Typography from "@mui/material/Typography";

function Post(props) {
  return (
    <Typography
      variant="h4"
      color="text.primary"
      align="center"
    >
      {props.title}
    </Typography>
  );
}

export default Post