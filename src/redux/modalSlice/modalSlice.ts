import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

type ModalState = {
  type: 'success' | 'error' | null;
  isOpened: boolean;
};

const initialState: ModalState = {
  type: null,
  isOpened: false,
};

const modalSlice = createSlice({
  name: '@@modal-slice',
  initialState,
  reducers: {
    openModal: (
      state,
      { payload }: PayloadAction<Pick<ModalState, 'type'>>,
    ) => {
      const newState = { ...state, type: payload.type, isOpened: true };
      return newState;
    },
    closeModal: (state) => {
      const newState = { ...state, isOpened: false };
      return newState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modalReducer;

export default modalSlice.reducer;
