import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  AboutForm,
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormState,
  FormDataFields,
  PreparedFormData,
} from '@types';
import axios from 'axios';
import { RootState } from 'redux/store';
import { APIRoutes } from 'routes';

interface State extends FormState {
  form: {
    status: 'filling' | 'sending' | 'success' | 'error';
    message: string;
    error: string;
  };
}

export const postFormData = createAsyncThunk(
  '@@post-form-data',
  async (data: PreparedFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post(APIRoutes.main(), data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState: State = {
  form: {
    status: 'filling',
    message: '',
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
    setFormStatusFilling: (state) => {
      state.form.status = 'filling';
    },
    clearStore: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postFormData.pending, (state) => {
        state.form.status = 'sending';
      })
      .addCase(postFormData.fulfilled, (state, action) => {
        state.form.status = action.payload.status;
        state.form.message = action.payload.message;
      })
      .addCase(postFormData.rejected, (state) => {
        state.form.status = 'error';
        state.form.error = 'Ошибка';
      });
  },
});

export const {
  aboutForm,
  stepOneForm,
  stepTwoForm,
  stepThreeForm,
  setAllFieldValues,
  setFormStatusFilling,
  clearStore,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.formReducer;

export default formSlice.reducer;
