import * as yup from 'yup';

const inputValidation = yup.object().shape({
  name: yup
    .string()
    .required('Name field required')
    .min(3)
    .matches(/^[A-Za-zà-úÀ-Ú ]+$/, 'Name must be only characters'),
  birthday: yup.date()
    .max(new Date(), 'Invalid birthday')
    .required('Birthday field is required'),
  selectedDate: yup.date()
    .min(new Date(), 'Invalid selected date')
    .required('Selected date is required'),
});

export default inputValidation;
