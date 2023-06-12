import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AboutForm, FormStepOne } from '@types';
import { RootState } from 'redux/store';

interface FormState {
  aboutForm: AboutForm;
  stepOne: FormStepOne;
}

const initialState: FormState = {
  aboutForm: {
    phone: '',
    email: '',
  },
  stepOne: {
    nickname: '',
    name: '',
    sername: '',
    sex: '',
  },
};

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    aboutForm: (state, { payload }: PayloadAction<AboutForm>) => {
      const newState = { ...state, aboutForm: { ...payload } };
      return newState;
    },
  },
});

export const { aboutForm } = formSlice.actions;
export const selectAboutForm = (state: RootState) =>
  state.formReducer.aboutForm;
export default formSlice.reducer;
