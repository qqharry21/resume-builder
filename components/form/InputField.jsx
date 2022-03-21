/** @format */
/* eslint-disable react/no-children-prop */
import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { getIn } from 'formik';
import DatePicker from 'react-datepicker';

export const InputField = ({ form, field, label, icon, isRequired, placeholder }) => {
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

export const DateInputField = ({ form, field, label, icon, isRequired, data, setData }) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  console.log('field', field);

  const DateInput = forwardRef(({ value, onClick, field }, ref) => (
    <Input
      {...field}
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly
      style={{ textAlign: 'center' }}
    />
  ));

  return (
    <FormControl isInvalid={error && touched} isRequired={isRequired}>
      <FormLabel htmlFor={label} style={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <InputGroup>
        <DatePicker
          selected={data}
          onChange={date => setData(date)}
          customInput={<DateInput field={field} />}
        />
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
