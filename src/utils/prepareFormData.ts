import { FormState, PreparedFormData } from '@types';

export const prepareFormData = (data: FormState): PreparedFormData => {
  const checkboxes = data.checkboxes.map((c) => c.value);
  const advantages = data.advantages.filter((c) => c.trim().length > 0);
  return {
    phone: data.phone,
    email: data.email,
    nickname: data.nickname,
    name: data.name,
    sername: data.sername,
    sex: data.sex,
    radioOption: Number(data.radioOption),
    advantages,
    checkboxes,
    aboutField: data.aboutField,
  };
};
