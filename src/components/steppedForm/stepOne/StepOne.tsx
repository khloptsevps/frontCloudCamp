import { TextInput, SelectInput } from 'components/ui';

import styles from './StepOne.module.scss';

const StepOne = () => {
  enum Sex {
    man = 'man',
    woman = 'woman',
  }

  const options = Object.keys(Sex).map((key) => {
    return { value: key, label: key };
  });

  return (
    <>
      <div className={styles.inputGroup}>
        <TextInput
          label="Nickname"
          name="nickname"
          placeholder="Placeholder"
          id="field-nickname"
          type="text"
          counter
        />
        <TextInput
          label="Name"
          name="name"
          placeholder="Placeholder"
          id="field-name"
          type="text"
          counter
        />
        <TextInput
          label="Sername"
          name="sername"
          placeholder="Placeholder"
          id="field-sername"
          type="text"
          counter
        />
        <SelectInput name="sex" options={options} />
      </div>
    </>
  );
};

export default StepOne;
