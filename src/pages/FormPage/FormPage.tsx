import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { StepOneForm } from 'components/steppedForm';
import { Button } from 'components/ui';

import { Stepper } from 'components';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from 'routes';

import styles from './FormPage.module.scss';

const formValidation = Yup.object({
  nickname: Yup.string()
    .required('Обязательное поле')
    .max(30, 'Не больше 30-ти символов')
    .matches(/^[A-Za-z]+[0-9]*$/, 'Недопустимые символы'),
  name: Yup.string()
    .required('Обязательное поле')
    .max(50, 'Не больше 50-ти символов')
    .matches(/^[A-Za-z]*$/, 'Недопустимые символы'),
  sername: Yup.string()
    .required('Обязательное поле')
    .max(50, 'Не больше 50-ти символов')
    .matches(/^[A-Za-z]*$/, 'Недопустимые символы'),
  // sex: Yup.string().required('Обязательное поле'),
});

interface initValuesProps {
  stepOne: {
    nickname: string;
    name: string;
    sername: string;
    sex: string;
  };
}

const FormPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);

  const initValues: initValuesProps = {
    stepOne: {
      nickname: '',
      name: '',
      sername: '',
      sex: '',
    },
  };

  const formHandler = (v: initValuesProps) => {
    console.log(v);
    console.log('form');

    setStep((prev) => {
      if (prev < 3) {
        return (prev += 1);
      }
      console.log(prev);
      return prev;
    });
  };

  const backButtonHandler = () => {
    setStep((prev) => {
      if (prev === 1) {
        navigate(pageRoutes.main());
      }
      return (prev -= 1);
    });
  };

  const steps = 3;

  return (
    <div className={styles.root}>
      <Stepper steps={steps} activeStep={step} />
      <div className="form">
        <Formik
          initialValues={initValues}
          onSubmit={formHandler}
          validationSchema={formValidation}
        >
          <Form>
            {step === 1 && <StepOneForm />}
            {step === 2 && <div>step 2</div>}
            {step === 3 && <div>step 3</div>}
            <div className={styles.buttons}>
              <Button
                id="button-back"
                type="button"
                onClick={backButtonHandler}
                variant="outlined"
              >
                Назад
              </Button>
              <Button id="button-next" type="submit">
                {step === 3 ? <span>Отправить</span> : <span>Вперед</span>}
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
