import * as Yup from 'yup';

export const aboutFormValidationSchema = Yup.object({
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(
      /[+7|8] \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Номер должен соответствовать формату +7 (999) 999-99-99',
    ),
  email: Yup.string()
    .required('Обязательное поле')
    .email('Введите корректный email, example@example.com'),
});
