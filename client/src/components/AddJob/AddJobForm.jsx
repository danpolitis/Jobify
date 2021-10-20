import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default AddJobForm = () => {
  const [ submitClicked, setSubmitClicked ] = useState(false);
  const [ formAccepted, setFormAccepted ] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const employer_id = 3;

  const handleAddJobSubmit = (addJobForm, e) => {
    // e.preventDefault();
    axios.post(`/postings/employer/${employer_id}`, addJobForm)
      .then(() => {
        setSubmitClicked(true);
        setFormAccepted(true);
      })
      .catch((err) => {
        setSubmitClicked(true);
      });
  }

  return(
    <>
      {(submitClicked && formAccepted) && <Alert severity="success">A new job has been posted!</Alert>}
      {(submitClicked && !formAccepted) && <Alert severity="error">Something went wrong with posting the job, please try again!</Alert>}
      <form onSubmit={handleSubmit(handleAddJobSubmit)} style={{ maxWidth: '500px' }}>
        <TextField
          id="add-job-title"
          label="Job Title"
          fullWidth
          margin="normal"
          {...register('title', {
            required: {
              value: true,
              message: 'Please provide a job title'
            }
          })}
          error={errors.title ? true : false}
          helperText={errors.title ? errors.title.message : null}
        />
        <TextField
          id="add-job-field"
          label="Field"
          fullWidth
          margin="normal"
          {...register('field', {
            required: {
              value: true,
              message: 'Please provide a job field'
            }
          })}
          error={errors.field ? true : false}
          helperText={errors.field ? errors.field.message : null}
        />
        <TextField
          id="add-job-city"
          label="City"
          fullWidth
          margin="normal"
          {...register('city', {
            required: {
              value: true,
              message: 'Please provide a city'
            }
          })}
          error={errors.city ? true : false}
          helperText={errors.city ? errors.city.message : null}
        />
        <TextField
          id="add-job-salary"
          label="Salary"
          fullWidth
          margin="normal"
          type="number"
          {...register('salary', {
            required: {
              value: true,
              message: 'Please provide a salary'
            }
          })}
          error={errors.salary ? true : false}
          helperText={errors.salary ? errors.salary.message : null}
        />
        <TextField
          id="add-job-benefits"
          label="Benefits"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          placeholder="Please separate benefits with commas, e.g. Health insurance, 401(k), etc."
          {...register('benefits', {
            required: {
              value: false
            }
          })}
        />
        <TextField
          id="add-job-requirements"
          label="Requirements"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          placeholder="Please separate requirements with commas, e.g. Bachelor's or equivalent, 5 years experience, etc."
          {...register('requirements', {
            required: {
              value: false
            }
          })}
        />
        <TextField
          id="add-job-description"
          label="Job Description"
          multiline
          rows={7}
          fullWidth
          margin="normal"
          {...register('description', {
            required: {
              value: true,
              message: 'Please provide a detailed description of the job'
            }
          })}
          error={errors.description ? true : false}
          helperText={errors.description ? errors.description.message : null}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
          style={{ marginTop: '16px' }}
        >Add New Job</Button>
      </form>
    </>
  )
};