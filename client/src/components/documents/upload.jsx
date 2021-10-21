import React from 'react';
import axios, { post } from 'axios';



const Upload = (props) => {

    return (
      <form method="POST" action="http://127.0.0.1:3000/documents/1" encType="multipart/form-data">
        <input type="file" name="file"/>
        <input type="submit" value="Upload" />
      </form>
    )
}

export default Upload;