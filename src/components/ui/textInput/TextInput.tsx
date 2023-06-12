import { useField } from 'formik';
import styles from './TextInput.module.scss';

interface TextInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: 'email' | 'text' | 'textarea';
  counter?: boolean;
  id?: string;
  children?: React.ReactNode;
}

const TextInput = ({ label, counter, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.root}>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <input {...field} {...props} className={styles.input} />
      <div className={styles.feedback}>
        {counter && field.value.length > 0 && (
          <span className={styles.counter}>{field.value.length}</span>
        )}
        {meta.touched && meta.error ? (
          <span className={styles.error}>{meta.error}</span>
        ) : null}
      </div>
    </div>
  );
};

export default TextInput;
