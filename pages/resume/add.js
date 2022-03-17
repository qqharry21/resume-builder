/** @format */

import React, { useState } from 'react';
import { Meta } from '../../components';
import { AddForm, Form, PersonDetailForm, ProjectForm } from '../../components/form';
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
    project: [{ id: 1, name: '', description: '', link: '' }],
  });
  return (
    <>
      <Meta title='Add' />
      <AddForm
        initialValues={formData}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}>
        <Form validationSchema={personalSchema} title='Personal Detail'>
          <PersonDetailForm />
        </Form>
        <Form validationSchema={projectSchema} title='Project Developed'>
          <ProjectForm />
        </Form>
      </AddForm>
    </>
  );
};

export default AddPage;
