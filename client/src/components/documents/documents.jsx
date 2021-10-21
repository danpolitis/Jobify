import React, {useState, useEffect} from "react"
import axios, { post } from 'axios';
import Upload from './upload.jsx';
import { FileIcon, defaultStyles } from "react-file-icon";

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

  return (
  <>
    <h1>
      Your Documents
    </h1>
    <div>
      {files.map((file) => (
        <div>
          <FileIcon extension={file.name} {...defaultStyles[file]} />
        </div>
      ))}
    </div>
    <h3>Upload Document</h3>
    <div>
      <Upload/>
    </div>
  </>
  );
}

export default Documents;