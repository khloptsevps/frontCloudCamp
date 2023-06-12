import { Formik, Form } from 'formik';
import React from 'react';

const SteppedForm = () => {
  return (
    <Formik initialValues={initValues} onSubmit={formHandler}>
      <Form>
        {step === 1 && <StepOneForm />}
        {step === 2 && <div>step 2</div>}
        {step === 3 && <div>step 3</div>}
        <div className="buttonGroup">
          <Button id="back" type="button" onClick={backButtonHandler}>
            Назад
          </Button>
          <Button id="next" type="submit">
            {step === 3 ? <span>Отправить</span> : <span>Вперед</span>}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default SteppedForm;
