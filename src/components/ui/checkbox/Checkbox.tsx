import { useField } from 'formik';
import React from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  label: number;
  name: string;
}

const Checkbox = ({ id, label, ...props }: CheckboxProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  console.log(field);

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        <input
          className={field.checked ? styles.checked : ''}
          type="checkbox"
          {...field}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
