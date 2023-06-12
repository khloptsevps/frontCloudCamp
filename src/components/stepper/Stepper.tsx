import React from 'react';
import CompleteStepIcon from 'assets/CompleteStepIcon';

import styles from './Stepper.module.scss';

interface Step {
  label: string;
}

interface StepperProps {
  activeStep: number;
  steps: Step[];
}

// {isComplete ? (
//   <div className={styles.completeIcon}>
//     <CompleteStepIcon />
//   </div>
// ) : (
//   <div className={styles.dot}></div>
// )}

{
  /* <div
  className={`${styles.point} ${styles.pointOne} ${styles.active} ${styles.complete}`}
></div>; */
}

const Stepper = ({ activeStep, steps }: StepperProps) => {
  const stepsLength = steps.length;
  console.log(stepsLength);
  return (
    <div className={styles.root}>
      {steps.map((step, index) => {
        const currentStep = activeStep - 1;
        const isCurrentStep = activeStep - 1 === index;

        const active = isCurrentStep ? ` ${styles.active}` : '';
        const complete = currentStep > index ? ` ${styles.complete}` : '';

        return (
          <div className={styles.stepContainer}>
            <div
              key={step.label}
              className={`${styles.point}${active}${complete}`}
            >
              {isCurrentStep && <div className={styles.dot}></div>}
              {currentStep > index && (
                <div className={styles.completeIcon}>
                  <CompleteStepIcon />
                </div>
              )}
              <span className={styles.label}>{step.label}</span>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <span className={styles.connectorColor} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
