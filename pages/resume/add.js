/** @format */

import React, { useState } from 'react';
import { Meta } from '../../components';
import { AddForm, FormItem, PersonDetailForm, ProjectForm } from '../../components/form';
import { personalSchema, projectSchema } from '../../utils/validate';

const AddPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    github: '',
    linkedIn: '',
    twitter: '',
    facebook: '',
    instagram: '',
    project: [{ name: '', description: '', link: '' }],
  });
  return (
    <>
      <Meta title='Add' />
      <AddForm
        initialValues={formData}
        onSubmit={(values, actions) => {
          console.log('submit', values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}>
        <FormItem validationSchema={personalSchema} label='Personal Detail'>
          <PersonDetailForm />
        </FormItem>
        <FormItem validationSchema={projectSchema} label='Project Developed'>
          <ProjectForm />
        </FormItem>
      </AddForm>
    </>
  );
};

export default AddPage;
