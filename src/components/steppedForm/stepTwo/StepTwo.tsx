import { AdvantagesForm, CheckboxArray } from 'components';
import { RadioButton } from 'components/ui';

import styles from './StepTwo.module.scss';

type Radio = {
  id: string;
  value: string;
  name: string;
};

interface StepTwoProps {
  radioButtons: Radio[];
}

const StepTwo = ({ radioButtons }: StepTwoProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.advantages}>
        <h3>Advantages</h3>
        <AdvantagesForm name="advantages" />
      </div>
      <div className={styles.checkboxGroup} style={{ marginBottom: '24px' }}>
        <h3>Checkbox group</h3>
        <CheckboxArray name="checkboxes" />
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
