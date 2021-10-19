import React from 'react';
import axios, { post } from 'axios';
import Upload from './upload.jsx';

const Documents = () => {


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