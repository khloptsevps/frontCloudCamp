import { useField } from 'formik';
import styles from './TextInput.module.scss';

interface TextInputProps {
  label: string;
  name: string;
  placeholder: string;
  type: 'email' | 'text' | 'textarea';
  id?: string;
  children?: React.ReactNode;
}

const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.root}>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <input {...field} {...props} className={styles.input} />
      {meta.touched && meta.error ? (
        <span className={styles.feedback}>{meta.error}</span>
      ) : null}
    </div>
  );
};

export default TextInput;
