import { FieldArray } from 'formik';

import { Button, TextInput } from 'components/ui';
import DeleteButtonIcon from 'assets/DeleteButtonIcon';

import styles from './Advantages.module.scss';

interface AdvantagesProps {
  name: string;
  count?: number;
}

const Advantages = ({ name }: AdvantagesProps) => {
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
                  />
                  <button
                    className={styles.deleteButotn}
                    onClick={() => remove(index)}
                  >
                    {<DeleteButtonIcon />}
                  </button>
                </div>
              );
            })}
            <div>
              <Button
                id="button add"
                type="button"
                variant="outlined"
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
