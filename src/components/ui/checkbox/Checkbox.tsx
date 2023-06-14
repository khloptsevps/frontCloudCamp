import { useField } from 'formik';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  label: number;
  name: string;
}

const Checkbox = ({ id, label, ...props }: CheckboxProps) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        <input
          id={id}
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
