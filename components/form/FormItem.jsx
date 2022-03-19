/** @format */

import React from 'react';

const FormItem = ({ children }) => {
  // const checkChild = children => {
  //   if (React.isValidElement(children)) {
  //     return React.cloneElement(children, { data });
  //   }
  //   return children;
  // };
  // const childrenWithProps = checkChild(children);
  return <>{children}</>;
};
export default FormItem;
