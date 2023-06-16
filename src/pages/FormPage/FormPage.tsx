import React from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { FormDataFields } from '@types';

import { pageRoutes } from 'routes';

import { Modal, Stepper } from 'components';

import {
  StepOneForm,
  StepTwoForm,
  StepThreeForm,
} from 'components/steppedForm';

import { Button } from 'components/ui';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  stepOneForm,
  stepTwoForm,
  stepThreeForm,
  selectForm,
  setAllFieldValues,
} from 'redux/formSlice/formSlice';
import {
  selectModal,
  openModal,
  closeModal,
} from 'redux/modalSlice/modalSlice';

import { prepareFormData } from 'utils';

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
  aboutField: Yup.string().test(
    'customValidation',
    'Не более 200 символов',
    (value) => {
      if (value) return value.replace(/ /g, '').length <= 200;
      return true;
    },
  ),
  advantages: Yup.array().of(Yup.string().max(20, 'Не больше 20-ти символов')),
});

// TODO: доделать валидацию

const FormPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    phone,
    email,
    nickname,
    name,
    sername,
    sex,
    advantages,
    checkboxes,
    radioOption,
    aboutField,
  } = useAppSelector(selectForm);

  const { type, isOpened } = useAppSelector(selectModal);

  const initAdvantages = advantages.length > 0 ? advantages : ['', '', ''];
  const initCheckboxes =
    checkboxes.length > 0
      ? checkboxes
      : [
          { key: 'check1', checked: false, value: 1 },
          { key: 'check2', checked: false, value: 2 },
          { key: 'check3', checked: false, value: 3 },
        ];

  const [step, setStep] = React.useState(1);

  const initValues: FormDataFields = {
    // step one
    nickname: nickname || '',
    name: name || '',
    sername: sername || '',
    sex: sex || '',
    // step two
    advantages: initAdvantages,
    checkboxes: initCheckboxes,
    radioOption: radioOption || '',
    // step three
    aboutField: aboutField || '',
  };

  const radioButtons = [
    { id: '1', value: '1', name: 'radioOption' },
    { id: '2', value: '2', name: 'radioOption' },
    { id: '3', value: '3', name: 'radioOption' },
  ];

  const modalCloseHandler = () => {
    dispatch(closeModal());
  };

  const modalOpenHandler = () => {
    dispatch(openModal({ type: 'error' }));
  };

  // TODO: Сделать через свич?
  const formHandler = async (
    formData: FormDataFields,
    actions: FormikHelpers<FormDataFields>,
  ) => {
    if (step === 1) {
      const { nickname, name, sername, sex } = formData;
      dispatch(stepOneForm({ nickname, name, sername, sex }));
    }
    if (step === 2) {
      const { advantages, checkboxes, radioOption } = formData;
      dispatch(stepTwoForm({ advantages, checkboxes, radioOption }));
    }
    if (step === 3) {
      const { aboutField } = formData;
      dispatch(stepThreeForm({ aboutField }));
      const data = prepareFormData({ phone, email, ...formData });
      console.log(data);
      modalOpenHandler();
      actions.setSubmitting(false);

      return;
    }
    setStep((prev) => {
      if (prev < 3) {
        return (prev += 1);
      }
      return prev;
    });
  };

  const backButtonHandler = (fields: FormDataFields) => () => {
    if (step === 1) {
      dispatch(setAllFieldValues(fields));
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
      <Modal isOpen={isOpened} type={type} onClose={modalCloseHandler} />
      <div className="form">
        <Formik
          initialValues={initValues}
          onSubmit={formHandler}
          validationSchema={formValidation}
        >
          {({ values }) => {
            return (
              <Form>
                {step === 1 && <StepOneForm />}
                {step === 2 && <StepTwoForm radioButtons={radioButtons} />}
                {step === 3 && <StepThreeForm />}
                <div className={styles.buttons}>
                  <Button
                    id="button-back"
                    type="button"
                    onClick={backButtonHandler(values)}
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
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default FormPage;
