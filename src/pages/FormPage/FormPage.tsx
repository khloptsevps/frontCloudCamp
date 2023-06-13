import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { StepOneForm, StepTwoForm } from 'components/steppedForm';
import { Button } from 'components/ui';

import { Stepper } from 'components';
import { pageRoutes } from 'routes';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { stepOneForm, selectStepOneForm } from 'redux/formSlice/formSlice';

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
  sex: Yup.string().required('Обязательное поле'),
});

interface initValuesProps {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
}

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectStepOneData = useAppSelector(selectStepOneForm);

  console.log(selectStepOneData);

  const [step, setStep] = React.useState(1);

  const initValues: initValuesProps = {
    ...selectStepOneData,
  };

  const formHandler = (formData: initValuesProps) => {
    console.log(formData);
    console.log('form');
    console.log(step);
    if (step === 1) {
      console.log(step);
      const { nickname, name, sername, sex } = formData;
      dispatch(stepOneForm({ nickname, name, sername, sex }));
    }
    setStep((prev) => {
      if (prev < 3) {
        return (prev += 1);
      }
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
            {step === 2 && <StepTwoForm />}
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
