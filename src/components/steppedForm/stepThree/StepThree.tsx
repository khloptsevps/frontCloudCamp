import { TextInput } from 'components/ui';

import styles from './StepThree.module.scss';
import { useFormData } from 'redux/hooks';

const StepThree = () => {
  const { form } = useFormData();
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>About</h3>
      <div className={styles.input}>
        <TextInput
          disabled={form.status !== 'filling'}
          type="textarea"
          id="field-about"
          name="aboutField"
          placeholder="Placeholder"
          counter
        />
      </div>
    </div>
  );
};

export default StepThree;
