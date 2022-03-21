/** @format */

import { toast } from 'react-toastify';
import { config } from '../config/notifyConfig';

const alert = message => {
  toast.error(message, {
    ...config,
    position: 'bottom-right',
  });
};

const warning = message => {
  toast.warning(message, {
    ...config,
    position: 'bottom-right',
  });
};

const success = message => {
  toast.success(message, {
    ...config,
    position: 'bottom-right',
  });
};

export { alert, warning, success };
