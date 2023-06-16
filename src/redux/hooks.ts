import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import { selectForm } from './formSlice/formSlice';
import { selectModal } from './modalSlice/modalSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFormData = () => {
  const formData = useAppSelector(selectForm);

  return { ...formData };
};

export const useModal = () => {
  const modal = useAppSelector(selectModal);

  return { ...modal };
};
