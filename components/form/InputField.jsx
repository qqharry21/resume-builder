/** @format */
/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { getIn } from 'formik';

const InputField = ({ form, field, label, icon, isRequired, placeholder }) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return (
    <FormControl isInvalid={error && touched} isRequired={isRequired}>
      <FormLabel htmlFor={label} style={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <InputGroup>
        <Input {...field} id={label} placeholder={placeholder} autoComplete='off' />
        {icon && (
          <InputRightElement
            pointerEvents='none'
            children={<Icon as={icon} w={5} h={5} color='teal' />}
          />
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
export default InputField;
