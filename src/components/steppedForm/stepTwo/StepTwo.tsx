import { Checkbox, RadioButton } from 'components/ui';

import styles from './StepTwo.module.scss';
import { AdvantagesForm } from 'components';

type Checkbox = {
  id: string;
  label: number;
  name: string;
};

type Radio = {
  id: string;
  value: string;
  name: string;
};

interface StepTwoProps {
  checkboxes: Checkbox[];
  radioButtons: Radio[];
}

const StepTwo = ({ checkboxes, radioButtons }: StepTwoProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.advantages}>
        <h3>Advantages</h3>
        <AdvantagesForm name="advantages" />
      </div>
      <div className={styles.checkboxGroup}>
        <h3>Checkbox group</h3>
        <div className={styles.checkboxes}>
          {checkboxes?.map(({ id, label, name }) => (
            <Checkbox
              key={id}
              id={`field-checkbox-group-option-${id}`}
              name={name}
              label={label}
            />
          ))}
        </div>
      </div>
      <div className={styles.radios}>
        <h3>Radio group</h3>
        <div className={styles.radioButtons}>
          {radioButtons?.map(({ id, value, name }) => (
            <RadioButton
              key={id}
              name={name}
              id={`field-radio-group-option-${id}`}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
