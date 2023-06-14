import React from 'react';

import styles from './StepTwo.module.scss';
import { Button, Checkbox } from 'components/ui';

type Checkbox = {
  id: string;
  label: number;
  name: string;
};

interface StepTwoProps {
  checkboxes: Checkbox[];
}

const StepTwo = ({ checkboxes }: StepTwoProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.advantages}>
        <h3>Advantages</h3>
        <div className={styles.inputGroup}></div>
        <div>
          <Button id="button add" type="button" variant="outlined">
            +
          </Button>
        </div>
      </div>
      <div className={styles.checkboxGroup}>
        <h3>Checkbox group</h3>
        <div className={styles.checkboxes}>
          {checkboxes?.map(({ id, label, name }) => (
            <Checkbox
              id={`field-checkbox-group-option-${id}`}
              name={name}
              label={label}
            />
          ))}
        </div>
      </div>
      <div className={styles.radios}>
        <h3>Radio group</h3>
      </div>
    </div>
  );
};

export default StepTwo;
