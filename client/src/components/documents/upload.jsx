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
      const url = "http://127.0.0.1:3000/documents/1";
      const formData= { file: e.target.result }

      let config = {
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
      }
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h1>Upload</h1>
        <input type="file" name="file" onChange={(e) => this.onChange(e)} />
      </div>
    )
  }
}

export default Upload;