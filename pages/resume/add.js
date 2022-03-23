/** @format */
import React from 'react';
import { Meta } from '../../components';
import {
  AddForm,
  ExperienceForm,
  FormItem,
  PersonDetailForm,
  ProjectForm,
  SkillForm,
} from '../../components/form';
import { success } from '../../services/notifyService';
import { personalSchema, projectSchema, experienceSchema, skillSchema } from '../../utils/validate';

const AddPage = () => {
  return (
    <>
      <Meta title='Add' />
      <AddForm
        initialValues={formData}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          success('Successfully added');
        }}>
        <FormItem validationSchema={personalSchema} label='Personal Detail'>
          <PersonDetailForm />
        </FormItem>
        <FormItem validationSchema={projectSchema} label='Project Developed'>
          <ProjectForm />
        </FormItem>
        <FormItem validationSchema={experienceSchema} label='Experiences'>
          <ExperienceForm />
        </FormItem>
        <FormItem validationSchema={skillSchema} label='Skills'>
          <SkillForm />
        </FormItem>
      </AddForm>
    </>
  );
};

const formData = {
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
  experience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
  skill: [{ name: '' }],
};

export default AddPage;
