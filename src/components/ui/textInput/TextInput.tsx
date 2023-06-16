import { useField } from 'formik';
import styles from './TextInput.module.scss';

interface TextInputProps {
  name: string;
  placeholder: string;
  type: 'email' | 'text' | 'textarea';
  disabled?: boolean;
  counter?: boolean;
  id?: string;
  label?: string;
  children?: React.ReactNode;
}

const TextInput = ({ label, counter, children, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={
        props.type === 'textarea' ? styles.textareaWrapper : styles.root
      }
    >
      {label && (
        <label htmlFor={props.id || props.name} className={styles.label}>
          {label}
        </label>
      )}
      {props.type === 'textarea' ? (
        <textarea {...field} {...props} className={styles.textarea} />
      ) : (
        <input {...field} {...props} className={styles.input} />
      )}
      <div
        className={
          props.type === 'textarea' ? styles.feedbackTextarea : styles.feedback
        }
      >
        {counter && field.value.length > 0 && (
          <span className={styles.counter}>{field.value.length}</span>
        )}
        {meta.touched && meta.error ? (
          <span className={styles.error}>{meta.error}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default TextInput;
