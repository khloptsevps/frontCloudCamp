import { useField, useFormikContext } from 'formik';
import Select from 'react-select';
import styles from './SelectInput.module.scss';

type Option = {
  value: string;
  label: string;
};
interface SelectInputProps {
  name: string;
  options: Option[];
}

const SelectInput = ({ name, options, ...props }: SelectInputProps) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const value = options.find((o) => o.value === field.value);

  return (
    <div className={styles.root}>
      <div className={styles.label}>
        <span>Sex</span>
      </div>
      <Select
        inputId="field-sex"
        options={options}
        placeholder="Не выбрано"
        components={{ IndicatorSeparator: () => null }}
        onChange={(v) => setFieldValue(name, v?.value)}
        value={value}
        {...props}
      />
      <div className={styles.feedback}>
        {meta.touched && meta.error ? (
          <span className={styles.error}>{meta.error}</span>
        ) : null}
      </div>
    </div>
  );
};
export default SelectInput;
