import React, {useState, useEffect} from "react"
import axios, { post } from 'axios';
import Upload from './upload.jsx';

const Documents = () => {
  const user_id = 'hghaskjsdlkja';
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

  return (
  <>
    <h1>
      Documents!
    </h1>
    <div>
      <Upload/>
    </div>
  </>
  );
}

export default Documents;