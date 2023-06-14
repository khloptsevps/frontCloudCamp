import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { StepOneForm, StepTwoForm } from 'components/steppedForm';
import { Button } from 'components/ui';

import { Stepper } from 'components';
import { pageRoutes } from 'routes';

import { useAppDispatch } from 'redux/hooks';
import { stepOneForm } from 'redux/formSlice/formSlice';

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

interface InitValuesProps {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  radioOption: string;
  advantages: string[];
  [key: string]: boolean | string | number | string[];
}

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [step, setStep] = React.useState(2);

  const initValues: InitValuesProps = {
    // step one
    nickname: '',
    name: '',
    sername: '',
    sex: '',
    // step two
    advantages: ['', '', ''],
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    radioOption: '',
  };

  const radioButtons = [
    { id: '1', value: '1', name: 'radioOption' },
    { id: '2', value: '2', name: 'radioOption' },
  ];

  const checkboxes = [
    { name: 'checkbox1', id: '1', label: 1 },
    { name: 'checkbox2', id: '2', label: 2 },
    { name: 'checkbox3', id: '3', label: 3 },
  ];

  const advantages = [];

  const formHandler = (formData: InitValuesProps) => {
    if (step === 1) {
      const { nickname, name, sername, sex } = formData;
      dispatch(stepOneForm({ nickname, name, sername, sex }));
    }
    if (step === 2) {
      console.log('step 2');
      console.log(formData);
      const checkboxesValues = checkboxes
        .filter((checkbox) => formData[checkbox.name])
        .map((checkbox) => checkbox.label);
      const radioValue = Number(formData.radioOption);
      console.log(radioValue);
      return;
    }
    setStep((prev) => {
      if (prev < 3) {
        return (prev += 1);
      }
      return prev;
    });
  };

  const backButtonHandler = () => {
    if (step === 1) {
      navigate(pageRoutes.main());
      return;
    }
    setStep((prev) => {
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
            {step === 2 && (
              <StepTwoForm
                checkboxes={checkboxes}
                radioButtons={radioButtons}
              />
            )}
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
