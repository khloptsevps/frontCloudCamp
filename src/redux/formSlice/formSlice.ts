import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AboutForm, FormStepOne, FormStepTwo } from '@types';
import { RootState } from 'redux/store';

interface FormState {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  sername: string;
  sex: string;
  checkbox?: number[];
  stepOne?: FormStepOne;
  stepTwo?: FormStepTwo;
}

const initialState: FormState = {
  phone: '',
  email: '',
  nickname: '',
  name: '',
  sername: '',
  sex: '',
  checkbox: [],
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
  },
});

export const { aboutForm, stepOneForm } = formSlice.actions;

export const selectAboutForm = (state: RootState) => state.formReducer;

export const selectStepOneForm = (state: RootState) =>
  state.formReducer.stepOne;

export const selectStepTwoFrom = (state: RootState) =>
  state.formReducer.stepTwo;

export const selectCheckboxes = (state: RootState) =>
  state.formReducer.checkbox;

export default formSlice.reducer;
