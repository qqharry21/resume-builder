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
  Textarea,
} from '@chakra-ui/react';
import { getIn, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

export const TextAreaInput = ({ form, field, label, isRequired, placeholder }) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return (
    <FormControl isInvalid={error && touched} isRequired={isRequired}>
      <FormLabel htmlFor={label} style={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Textarea
        {...field}
        id={label}
        placeholder={placeholder}
        autoComplete='off'
        resize='vertical'
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
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

export const DateInputField = ({
  form,
  field,
  label,
  icon,
  isRequired,
  data,
  setData,
  minDate,
  maxDate,
}) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  const { setFieldValue } = useFormikContext();

  const DateInput = forwardRef(({ value, onClick, field }, ref) => (
    <Input
      onClick={onClick}
      {...field}
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
          dateFormat='yyyy/MM'
          showMonthYearPicker
          showFullMonthYearPicker
          showFourColumnMonthYearPicker
          maxDate={maxDate}
          minDate={minDate}
          onChange={date => {
            setData(date);
            setFieldValue(
              field.name,
              new Date(date).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit' })
            );
          }}
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
