import {bool, object, string} from 'yup';

export const loginValidate = object().shape({
  Email: string().email().required(),
  Password: string().required(),
});
