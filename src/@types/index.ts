export type FormDataFields = {
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  radioOption: string;
  advantages: string[];
  checkboxes: Checkbox[];
  aboutField: string;
};

export type PreparedFormData = {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  radioOption: number;
  advantages: string[];
  checkboxes: number[];
  aboutField: string;
};

export type Checkbox = {
  key: string;
  checked: boolean;
  value: number;
};
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

export type FormStepOnee = Pick<
  FormDataFields,
  'nickname' | 'name' | 'sername' | 'sex'
>;

export type FormStepTwo = Pick<
  FormDataFields,
  'advantages' | 'checkboxes' | 'radioOption'
>;
export type FormStepThree = Pick<FormDataFields, 'aboutField'>;

export interface FormState extends FormDataFields {
  phone: string;
  email: string;
}
