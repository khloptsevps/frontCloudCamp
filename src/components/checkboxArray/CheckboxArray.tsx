import { FieldArray } from 'formik';
import { Checkbox as CheckboxType } from '@types';
import { Checkbox } from 'components/ui';

interface CheckboxArray {
  name: string;
}

const CheckboxArray = ({ name }: CheckboxArray) => (
  <FieldArray name={name}>
    {(fieldArrayProps) => {
      const { form } = fieldArrayProps;
      const { values } = form;
      const { checkboxes } = values;

      return (
        <div>
          {checkboxes.map((c: CheckboxType, i: number) => {
            return (
              <div key={c.key}>
                <Checkbox
                  name={`checkboxes[${i}].checked`}
                  id={`field-checkbox-group-option-${i}`}
                  label={c.value}
                />
              </div>
            );
          })}
        </div>
      );
    }}
  </FieldArray>
);

export default CheckboxArray;
