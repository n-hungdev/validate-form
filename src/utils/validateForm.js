import * as Yup from 'yup';

export const formValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(18, 'Password must be less than 18 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, 'Phone number is invalid')
    .required('Phone is required'),
  city: Yup.string().required('City is required'),
  gender: Yup.string().required('Gender is required').nullable(),
});
