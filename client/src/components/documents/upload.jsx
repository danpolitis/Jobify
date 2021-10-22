import React, { useState, useContext } from 'react';
import axios, { post } from 'axios';
import { GlobalContext } from '../App.jsx';

const Upload = ( {submitted, setSubmitted} ) => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const { state } = useContext(GlobalContext);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const onSubmit = async e => {
    e.preventDefault();
    console.log('in submit function');
    setSubmitted(submitted + 1);
    const formData = new FormData();
    formData.append('file', file);

    try {
      res = await axios.post(`http://127.0.0.1:3000/documents/${state.userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { fileName, filePath } = res.data;
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server')
      } else {
        console.log('error uploading: ', err);
      }
    }
  }

    return (
      <form onSubmit={onSubmit}>
        <div>
          <input
            type='file'
            onChange={onChange}
          />
          <label htmlFor='customFile'>
            {fileName}
          </label>
        </div>
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    )
}


{/* <form method="POST" action="http://127.0.0.1:3000/documents/1" encType="multipart/form-data">
<input type="file" name="file"/>
<input type="submit" value="Upload" />
</form> */}
export default Upload;