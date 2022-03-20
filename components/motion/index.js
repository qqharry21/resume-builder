/** @format */

import { Box, Button as Btn, Icon, IconButton as IconBtn, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const MotionIcon = motion(Icon);
export const MotionSimpleGrid = motion(SimpleGrid);
export const MotionBox = motion(Box);

export const Button = ({ children, ...props }) => {
  const MotionBtn = motion(Btn);
  return (
    <MotionBtn {...props} initial='initial' exit='exit' animate='animate' whileTap={{ scale: 1.1 }}>
      {children}
    </MotionBtn>
  );
};

export const IconButton = ({ children, ...props }) => {
  const MotionIconBtn = motion(IconBtn);
  return (
    <MotionIconBtn
      {...props}
      initial={false}
      exit='exit'
      animate='animate'
      whileTap={{ scale: 1.1 }}>
      {children}
    </MotionIconBtn>
  );
};

// export const MotionBox = ({ children, ...props }) => {
//   const MotionBox = motion(Box);
//   return (
//     <MotionBox {...props} initial='initial' animate='animate'>
//       {children}
//     </MotionBox>
//   );
// };
