import { CompleteStepIcon } from 'components/icons';

import styles from './Stepper.module.scss';
interface StepperProps {
  activeStep: number;
  steps: number;
}

const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <div className={styles.root}>
      {Array(steps)
        .fill('empty')
        .map((_, i) => (
          <div
            className={`${styles.stepItem} ${
              activeStep === i + 1 && styles.active
            } ${i + 1 < activeStep && styles.complete}`}
            key={i}
          >
            <div className={styles.step}>
              <span className={styles.iconComplete}>
                {<CompleteStepIcon />}
              </span>
            </div>

            <p className={styles.label}>{i + 1}</p>
          </div>
        ))}
    </div>
  );
};

export default Stepper;
