import React from 'react';
import axios, { post } from 'axios';

const onChange = (e) => {
  let files = e.target.files;
  let reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      console.warn("data: ", e.target.result);
      const url = "http://127.0.0.1:3000/documents/1";
      const formData= { file: e.target.result }

      return post(url, formData)
        .then(response => console.warn('result: ', response));
    }
}


const Upload = (props) => {

    return (
      <div onSubmit={console.log('submitted')}>
        <h3>Upload</h3>
        <input type="file" name="file" onChange={(e) => onChange(e)} />
      </div>
    )
}

export default Upload;