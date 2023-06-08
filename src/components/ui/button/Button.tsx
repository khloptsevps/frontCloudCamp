import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  id: string;
  children: React.ReactNode | string;
  variant?: 'contained' | 'outlined';
}

const Button = ({ id, variant, children }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`${styles.root}${
        variant ? ` ${styles[variant]}` : ` ${styles.contained}`
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
