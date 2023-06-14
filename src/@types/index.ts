export interface AboutForm {
  phone: string;
  email: string;
}

export interface FormStepOne {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
}

interface Field {
  id: string;
  fieldName: string;
  name: string;
  buttonId: string;
}

export interface FormStepTwo {
  fields: Field[];
}
