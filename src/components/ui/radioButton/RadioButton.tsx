import { useField } from 'formik';
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  id: string;
  value: string;
  name: string;
}

const RadioButton = ({ id, value, ...props }: RadioButtonProps) => {
  const [field] = useField(props);

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        <input
          className={field.checked ? styles.checked : ''}
          id={id}
          type="radio"
          {...field}
          value={value}
          checked={field.value === value}
          {...props}
        />
        <span>{value}</span>
      </label>
    </div>
  );
};

export default RadioButton;
