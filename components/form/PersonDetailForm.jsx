/** @format */

import { Field } from 'formik';
import React from 'react';
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiGithubLine,
  RiPhoneLine,
  MdOutlineEmail,
  MdWebAsset,
} from '../icon';
import { InputField } from '.';
import { fadeInUp } from '../../utils/animate';
import { MotionSimpleGrid } from '../motion';
const PersonDetailForm = () => {
  return (
    <>
      <MotionSimpleGrid
        columns={[1, 2]}
        spacingX='40px'
        spacingY='20px'
        variants={fadeInUp}
        initial='initial'
        animate='animate'>
        {personDetail.map((item, index) => (
          <Field
            key={index}
            name={item.name}
            component={InputField}
            label={item.label}
            icon={item?.icon}
            isRequired={item.isRequired}
            placeholder={item.placeholder}
          />
        ))}
      </MotionSimpleGrid>
    </>
  );
};

const personDetail = [
  { name: 'firstName', label: 'First Name', isRequired: true, placeholder: 'First Name' },
  { name: 'lastName', label: 'Last Name', isRequired: true, placeholder: 'First Name' },
  {
    name: 'email',
    label: 'Email',
    isRequired: true,
    placeholder: 'Email',
    icon: MdOutlineEmail,
  },
  {
    name: 'phone',
    label: 'Phone',
    isRequired: true,
    placeholder: 'XXXX-XXX-XXX',
    icon: RiPhoneLine,
  },
  {
    name: 'website',
    label: 'Website',
    isRequired: false,
    placeholder: 'Website',
    icon: MdWebAsset,
  },
  {
    name: 'github',
    label: 'Github',
    isRequired: false,
    placeholder: 'Github',
    icon: RiGithubLine,
  },
  {
    name: 'linkedIn',
    label: 'LinkedIn',
    isRequired: false,
    placeholder: 'LinkedIn',
    icon: RiLinkedinLine,
  },
  {
    name: 'twitter',
    label: 'Twitter',
    isRequired: false,
    placeholder: 'Twitter',
    icon: RiTwitterLine,
  },
  {
    name: 'facebook',
    label: 'Facebook',
    isRequired: false,
    placeholder: 'Facebook',
    icon: RiFacebookBoxLine,
  },
  {
    name: 'instagram',
    label: 'Instagram',
    isRequired: false,
    placeholder: 'Instagram',
    icon: RiInstagramLine,
  },
];
export default PersonDetailForm;
