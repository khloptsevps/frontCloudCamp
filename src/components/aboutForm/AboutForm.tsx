import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { aboutForm, selectAboutForm } from 'redux/formSlice/formSlice';

import { aboutFormValidationSchema } from 'validation';
import { PhoneInput, Button, TextInput } from 'components/ui';

import formattedPhoneNumber from 'utils/formattedPhoneNumber';
import { pageRoutes } from 'routes';

import styles from './AboutForm.module.scss';

const AboutForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAboutForm);

  const initValues = {
    phone: data.phone ? formattedPhoneNumber(data.phone) : '',
    email: data.email,
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={aboutFormValidationSchema}
      onSubmit={(values) => {
        const phoneNumber = '+7' + values.phone.replace(/\D/g, '').substring(1);
        const formData = {
          email: values.email,
          phone: phoneNumber,
        };
        // TODO: доделать событие формы
        console.log(formData);
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
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="tim.jennings@example.com"
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
