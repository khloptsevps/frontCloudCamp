import { TextInput, SelectInput } from 'components/ui';

import styles from './StepOne.module.scss';
import { useFormData } from 'redux/hooks';

const StepOne = () => {
  enum Sex {
    man = 'man',
    woman = 'woman',
  }

  const options = Object.keys(Sex).map((key) => {
    return { value: key, label: key };
  });

  const { form } = useFormData();

  console.log(form);
  return (
    <>
      <div className={styles.inputGroup}>
        <TextInput
          disabled={form.status !== 'filling'}
          label="Nickname"
          name="nickname"
          placeholder="Placeholder"
          id="field-nickname"
          type="text"
          counter
        />

        <TextInput
          disabled={form.status !== 'filling'}
          label="Name"
          name="name"
          placeholder="Placeholder"
          id="field-name"
          type="text"
          counter
        />

        <TextInput
          disabled={form.status !== 'filling'}
          label="Sername"
          name="sername"
          placeholder="Placeholder"
          id="field-sername"
          type="text"
          counter
        />

        <SelectInput
          disabled={form.status !== 'filling'}
          name="sex"
          options={options}
        />
      </div>
    </>
  );
};

export default StepOne;
