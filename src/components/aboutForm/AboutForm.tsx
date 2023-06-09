import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { PhoneInput, Button, TextInput } from 'components/ui';

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
    .email('Введите корректный email, example@example.com'),
});

const AboutForm = () => {
  const initValues = {
    phone: '',
    email: '',
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const phoneNumber = '8' + values.phone.replace(/\D/g, '').substring(1);
        const formData = {
          email: values.email,
          phone: phoneNumber,
        };
        // TODO: доделать событие формы
        console.log(formData);
      }}
    >
      <Form>
        <div className={`${styles.root} ${styles.marginBottom}`}>
          <PhoneInput
            label="Номер телефона"
            name="phone"
            placeholder="+7 999 999-99-99"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="tim.jennings@example.com"
          />
        </div>
        <Button id="button">Начать</Button>
      </Form>
    </Formik>
  );
};

export default AboutForm;
