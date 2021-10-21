import React from 'react';
import axios, { post } from 'axios';

// const onChange = (e) => {
//   let files = e.target.files;
//   let reader = new FileReader();

//     reader.readAsDataURL(files[0]);

//     reader.onload = (e) => {
//       console.warn("data: ", e.target.result);
//       const url = "http://127.0.0.1:3000/documents/1";
//       const formData= { file: e.target.result }

//       return post(url, formData)
//         .then(response => console.warn('result: ', response));
//     }
// }

const Upload = (props) => {

    return (
      <form method="POST" action="http://127.0.0.1:3000/documents/1" encType="multipart/form-data">
        <input type="file" name="file"/>
        <input type="submit" value="Upload" />
      </form>
    )
}

export default Upload;