import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  id: string;
  type: 'button' | 'submit';
  children: React.ReactNode | string;
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ id, variant, children, ...props }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`${styles.root}${
        variant ? ` ${styles[variant]}` : ` ${styles.contained}`
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
