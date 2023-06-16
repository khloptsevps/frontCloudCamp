import { FieldArray } from 'formik';

import { Button, TextInput } from 'components/ui';
import { DeleteButtonIcon } from 'components/icons';

import styles from './Advantages.module.scss';
import { useFormData } from 'redux/hooks';

interface AdvantagesProps {
  name: string;
  count?: number;
}

const Advantages = ({ name }: AdvantagesProps) => {
  const formData = useFormData();
  return (
    <FieldArray name={name}>
      {(fieldArrayProps) => {
        const { push, remove, form } = fieldArrayProps;
        const { values } = form;
        const { advantages } = values;
        return (
          <div className={styles.group}>
            {advantages.map((_: string, index: number) => {
              return (
                <div key={index} className={styles.root}>
                  <TextInput
                    name={`advantages[${index}]`}
                    id={`field-advantages-${index}`}
                    type="text"
                    placeholder="Paceholder"
                    counter
                    disabled={formData.form.status !== 'filling'}
                  >
                    <button
                      disabled={formData.form.status !== 'filling'}
                      className={styles.deleteButotn}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      {<DeleteButtonIcon />}
                    </button>
                  </TextInput>
                </div>
              );
            })}
            <div>
              <Button
                id="button add"
                type="button"
                variant="outlined"
                disabled={formData.form.status !== 'filling'}
                onClick={() => push('')}
              >
                +
              </Button>
            </div>
          </div>
        );
      }}
    </FieldArray>
  );
};

export default Advantages;
