import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Checkbox } from '@types';

import { pageRoutes } from 'routes';

import { Stepper } from 'components';

import {
  StepOneForm,
  StepTwoForm,
  StepThreeForm,
} from 'components/steppedForm';

import { Button } from 'components/ui';

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
  aboutField: Yup.string().max(250, 'Не больше 250-ти символов'),
});

// TODO: доделать валидацию

interface InitValuesProps {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  radioOption: string;
  advantages: string[];
  checkboxes: Checkbox[];
  aboutField: string;
}

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [step, setStep] = React.useState(1);

  const initValues: InitValuesProps = {
    // step one
    nickname: '',
    name: '',
    sername: '',
    sex: '',
    // step two
    advantages: ['', '', ''],
    checkboxes: [
      { key: 'check1', checked: false, value: 1 },
      { key: 'check2', checked: false, value: 2 },
      { key: 'check3', checked: false, value: 3 },
    ],
    radioOption: '',
    // step three
    aboutField: '',
  };

  const radioButtons = [
    { id: '1', value: '1', name: 'radioOption' },
    { id: '2', value: '2', name: 'radioOption' },
  ];

  // TODO: Сделать через свич?
  const formHandler = (formData: InitValuesProps) => {
    if (step === 1) {
      const { nickname, name, sername, sex } = formData;
      dispatch(stepOneForm({ nickname, name, sername, sex }));
    }
    if (step === 2) {
      console.log(formData);
      return;
    }
    if (step === 3) {
      console.log(formData);
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
            {step === 2 && <StepTwoForm radioButtons={radioButtons} />}
            {step === 3 && <StepThreeForm />}
            <div className={styles.buttons}>
              <Button
                id="button-back"
                type="button"
                onClick={backButtonHandler}
                variant="outlined"
              >
                Назад
              </Button>
              <Button
                id={step === 3 ? '"button-send"' : '"button-next"'}
                type="submit"
              >
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
