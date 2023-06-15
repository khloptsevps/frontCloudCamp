import { TextInput } from 'components/ui';

import styles from './StepThree.module.scss';

const StepThree = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>About</h3>
      <div className={styles.input}>
        <TextInput
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
