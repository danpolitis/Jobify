import React, {useState, useEffect} from "react"
import axios, { post } from 'axios';
import Upload from './upload.jsx';
//import { FileIcon, defaultStyles } from "react-file-icon";
import DescriptionIcon from '@mui/icons-material/Description';
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
    icons: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
}));

const Documents = () => {
  const user_id = 'hghaskjsdlkja3';
  const [files, setFiles] = useState([]);

  const getDocs = () => {
    axios.get(`http://localhost:3000/documents/${user_id}`)
      .then((results) => {
        setFiles(results.data);
      })
  }

  useEffect(() => {
    getDocs()
  }, [])


  useEffect(() => {
    console.log('files: ', files);
  }, [files])

  const getExtension = (file) => {
    let extension = file.split('.')
    let formattedExtension = ('.' + extension[1]);
    return formattedExtension;
  }
  const getFileName = (file) => {
    let extension = file.split('.');
    return extension[0];
  }

  const classes = useStyles();
  return (
  <>
    <Typography variant="h2">
      Your Documents
    </Typography>
    <div maxWidth="sm" className={classes.icons}>
      {files.map((file, index) => (
        <div className={classes.icons} key={index}>
          <DescriptionIcon color="primary" fontSize="large" />
          <Typography variant="subtitle1">{file.name}</Typography>
        </div>
      ))}
    </div>
    <Container
      id="Upload Document"
      fullWidth
      margin="normal"
      >
    <Typography variant="h4">Upload Document</Typography>
    <div>
      <Upload/>
    </div>
    </Container>
  </>
  );
}
{/* <FileIcon extension={getFileName(file.name)} {...defaultStyles[file]} /> */}
export default Documents;