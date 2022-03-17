/** @format */
import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
  mixed: { required: 'Required' },
  number: {
    min: ({ min }) => `Must be at least ${min}`,
    max: ({ max }) => `Must be at most ${max}`,
  },
});
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const personalSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Format error'
    )
    .required(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'Phone must be at least 10 characters')
    .required('Phone is required'),
  website: yup.string().url(),
  github: yup.string().url(),
  facebook: yup.string().url(),
  twitter: yup.string().url(),
  linkedin: yup.string().url(),
  instagram: yup.string().url(),
});
export const projectSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Format error'
    )
    .required(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'Phone must be at least 10 characters')
    .required('Phone is required'),
  website: yup.string().url(),
  github: yup.string().url(),
  facebook: yup.string().url(),
  twitter: yup.string().url(),
  linkedin: yup.string().url(),
  instagram: yup.string().url(),
});
