import React from 'react';
import axios, { post } from 'axios';

class Upload extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        image: ''
      }
  }

  onChange(e) {
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

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h3>Upload</h3>
        <input type="file" name="file" onChange={(e) => this.onChange(e)} />
      </div>
    )
  }
}

export default Upload;