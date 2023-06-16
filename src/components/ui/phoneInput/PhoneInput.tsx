import { useField } from 'formik';
import styles from './PhoneInput.module.scss';
import { formatPhoneNumber } from 'utils';

interface PhoneInputProps {
  label: string;
  name: string;
  placeholder: string;
  disabled?: boolean;
}

const PhoneInput = ({ label, ...props }: PhoneInputProps) => {
  const [field, meta, { setValue }] = useField(props);
  return (
    <div className={styles.root}>
      <label htmlFor="phone" className={styles.label}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={styles.input}
        type="tel"
        id="phone"
        onChange={(e) => setValue(formatPhoneNumber(e.target.value))}
      />
      {meta.touched && meta.error ? (
        <span className={styles.feedback}>{meta.error}</span>
      ) : null}
    </div>
  );
};

export default PhoneInput;
