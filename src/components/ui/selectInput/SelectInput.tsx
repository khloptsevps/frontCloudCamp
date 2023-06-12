import { useField } from 'formik';
import styles from './SelectInput.module.scss';

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.root}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className={styles.select} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default SelectInput;
