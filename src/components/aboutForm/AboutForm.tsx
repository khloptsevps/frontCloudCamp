import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch } from 'redux/hooks';
import { aboutForm } from 'redux/formSlice/formSlice';

import { PhoneInput, Button, TextInput } from 'components/ui';

import formattedPhoneNumber from 'utils/formattedPhoneNumber';
import { pageRoutes } from 'routes';

import styles from './AboutForm.module.scss';

const validationSchema = Yup.object({
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(
      /[+7|8] \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Номер должен соответствовать формату +7 (999) 999-99-99',
    ),
  email: Yup.string()
    .required('Обязательное поле')
    // .email('Введите корректный email, example@example.com'),
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Введите корректный email, example@example.com',
    ),
});

const AboutForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initValues = {
    phone: formattedPhoneNumber('79243166651'),
    email: 'p.khloptsev@gmail.com',
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const phoneNumber = '7' + values.phone.replace(/\D/g, '').substring(1);
        const formData = {
          email: values.email,
          phone: phoneNumber,
        };
        dispatch(aboutForm(formData));
        navigate(pageRoutes.firstStep());
      }}
    >
      <Form>
        <div className={`${styles.root} ${styles.marginBottom}`}>
          <PhoneInput
            label="Номер телефона"
            name="phone"
            placeholder="+7 999 999-99-99"
            disabled
          />

          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="tim.jennings@example.com"
            disabled
          />
        </div>
        <Button type="submit" id="button-start">
          Начать
        </Button>
      </Form>
    </Formik>
  );
};

export default AboutForm;
