import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AboutForm,
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormState,
  FormDataFields,
} from '@types';
import { RootState } from 'redux/store';

interface State extends FormState {
  form: {
    status: 'filling' | 'sending';
    massage: '';
    error: '';
  };
}

const initialState: State = {
  form: {
    status: 'filling',
    massage: '',
    error: '',
  },
  phone: '',
  email: '',
  nickname: '',
  name: '',
  sername: '',
  sex: '',
  advantages: [],
  checkboxes: [],
  radioOption: '',
  aboutField: '',
};

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    aboutForm: (state, { payload }: PayloadAction<AboutForm>) => {
      const newState = { ...state, ...payload };
      return newState;
    },
    stepOneForm: (state, { payload }: PayloadAction<FormStepOne>) => {
      const newState = { ...state, ...payload };
      return newState;
    },
    stepTwoForm: (state, { payload }: PayloadAction<FormStepTwo>) => {
      const newState = { ...state, ...payload };
      return newState;
    },
    stepThreeForm: (state, { payload }: PayloadAction<FormStepThree>) => {
      const newState = { ...state, ...payload };
      return newState;
    },
    setAllFieldValues: (state, { payload }: PayloadAction<FormDataFields>) => {
      const newState = { ...state, ...payload };
      return newState;
    },
  },
});

export const {
  aboutForm,
  stepOneForm,
  stepTwoForm,
  stepThreeForm,
  setAllFieldValues,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.formReducer;

export default formSlice.reducer;
